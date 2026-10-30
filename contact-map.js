const L = window.L;

const mapElement = document.getElementById('contact-map');
const locateButton = document.getElementById('locate-visitor');
const status = document.getElementById('location-status');
const distanceResult = document.getElementById('distance-result');

if (mapElement && locateButton && status && distanceResult) {
  // This published Teachers Village East area coordinate is only an approximate neighborhood marker.
  const businessArea = [14.6442, 121.0598];
  const map = L.map(mapElement, { scrollWheelZoom: false, minZoom: 1 }).setView(businessArea, 16);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    minZoom: 1,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> &middot; Tiles <a href="https://www.openstreetmap.fr/">OpenStreetMap France</a> &middot; Routing by <a href="https://project-osrm.org/">OSRM</a>'
  }).addTo(map);

  map.attributionControl.setPrefix(false);

  const businessIcon = L.divIcon({
    className: '',
    html: '<span class="contact-map-marker" aria-hidden="true"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 22]
  });
  const visitorIcon = L.divIcon({
    className: '',
    html: '<span class="contact-map-marker visitor" aria-hidden="true"></span>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  L.marker(businessArea, { icon: businessIcon, title: 'Hiraya Musiko Showroom & Studio - Fictional Location' })
    .addTo(map)
    .bindPopup('<strong>Hiraya Musiko Showroom &amp; Studio - Fictional Location</strong><br>Ground Floor, Hiraya Musiko Building, 18 Maginhawa Street, Teachers Village East, Quezon City, Metro Manila, Philippines.<br>Filipino-made musical instrument showroom and studio.<br>Approximate area marker only; not a verified building coordinate.');

  let visitorMarker = null;
  let distanceLine = null;
  let routeLine = null;
  let lastRoutingRequestAt = 0;

  async function requestRoadRoute(visitorPosition) {
    const waitMs = Math.max(0, 1000 - (Date.now() - lastRoutingRequestAt));
    if (waitMs) await new Promise((resolve) => setTimeout(resolve, waitMs));
    lastRoutingRequestAt = Date.now();

    const [latitude, longitude] = visitorPosition;
    const coordinates = `${longitude},${latitude};${businessArea[1]},${businessArea[0]}`;
    const routeUrl = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson&steps=false&alternatives=false`;

    try {
      const response = await fetch(routeUrl, { headers: { Accept: 'application/json' } });
      if (!response.ok) {
        throw new Error('ROUTING_UNAVAILABLE');
      }

      const result = await response.json();
      if (result.code === 'NoRoute' || (Array.isArray(result.routes) && result.routes.length === 0)) {
        throw new Error('NO_ROUTE');
      }
      if (result.code !== 'Ok' || !Array.isArray(result.routes)) {
        throw new Error('ROUTING_UNAVAILABLE');
      }

      const route = result.routes[0];
      const coordinates = route.geometry?.coordinates;
      if (!Number.isFinite(route.distance) || route.distance < 0 || !Array.isArray(coordinates) || coordinates.length < 2) {
        throw new Error('ROUTING_UNAVAILABLE');
      }

      const routePoints = coordinates.map(([routeLongitude, routeLatitude]) => [routeLatitude, routeLongitude]);
      if (routePoints.some(([routeLatitude, routeLongitude]) =>
        !Number.isFinite(routeLatitude) || !Number.isFinite(routeLongitude) ||
        Math.abs(routeLatitude) > 90 || Math.abs(routeLongitude) > 180
      )) {
        throw new Error('ROUTING_UNAVAILABLE');
      }

      if (distanceLine) {
        map.removeLayer(distanceLine);
        distanceLine = null;
      }
      if (routeLine) map.removeLayer(routeLine);
      routeLine = L.polyline(routePoints, {
        color: '#d8a653',
        weight: 5,
        opacity: 0.95
      }).addTo(map);

      const distanceKm = route.distance / 1000;
      const duration = Number.isFinite(route.duration) && route.duration >= 0
        ? ` Estimated driving time: ${route.duration < 60 ? 'under 1 min' : `${Math.round(route.duration / 60)} min`}.`
        : '';
      distanceResult.textContent = `Road route: approximately ${distanceKm.toFixed(1)} km.${duration}`;
      distanceResult.hidden = false;

      const bounds = L.latLngBounds(visitorPosition, businessArea).extend(routeLine.getBounds());
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 16 });
      visitorMarker.openPopup();
      status.textContent = 'A road route to the showroom is displayed.';
    } catch (error) {
      const straightDistanceKm = L.latLng(visitorPosition).distanceTo(L.latLng(businessArea)) / 1000;
      const isNoRoute = error.message === 'NO_ROUTE';
      status.textContent = isNoRoute
        ? 'No road route was found between your location and the showroom.'
        : 'The road routing service is unavailable. Please try again later.';
      distanceResult.textContent = `Road routing failed. The ${straightDistanceKm.toFixed(1)} km shown is straight-line distance only, not road distance.`;
      distanceResult.hidden = false;
      map.fitBounds(L.latLngBounds(visitorPosition, businessArea), { padding: [48, 48], maxZoom: 16 });
    } finally {
      locateButton.disabled = false;
      locateButton.removeAttribute('aria-busy');
    }
  }

  locateButton.addEventListener('click', () => {
    if (!window.isSecureContext) {
      status.textContent = 'Location access requires a secure connection, such as HTTPS or localhost.';
      return;
    }

    if (!navigator.geolocation) {
      status.textContent = 'Your browser does not support location sharing.';
      return;
    }

    locateButton.disabled = true;
    locateButton.setAttribute('aria-busy', 'true');
    status.textContent = 'Requesting your location...';

    navigator.geolocation.getCurrentPosition((position) => {
      const visitorPosition = [position.coords.latitude, position.coords.longitude];
      const [latitude, longitude] = visitorPosition;
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
        if (visitorMarker) map.removeLayer(visitorMarker);
        if (distanceLine) map.removeLayer(distanceLine);
        if (routeLine) map.removeLayer(routeLine);
        visitorMarker = null;
        distanceLine = null;
        routeLine = null;
        distanceResult.hidden = true;
        status.textContent = 'We could not use the coordinates returned by your browser. Please try again.';
        locateButton.disabled = false;
        locateButton.removeAttribute('aria-busy');
        return;
      }

      if (visitorMarker) {
        visitorMarker.setLatLng(visitorPosition);
      } else {
        visitorMarker = L.marker(visitorPosition, {
          icon: visitorIcon,
          title: 'Your Current Location',
          zIndexOffset: 1000
        }).addTo(map).bindPopup('<strong>Your Current Location</strong>');
      }

      if (routeLine) {
        map.removeLayer(routeLine);
        routeLine = null;
      }
      if (distanceLine) {
        distanceLine.setLatLngs([visitorPosition, businessArea]);
      } else {
        distanceLine = L.polyline([visitorPosition, businessArea], {
          color: '#d8a653',
          weight: 4,
          opacity: 0.9,
          dashArray: '8, 8'
        }).addTo(map);
      }
      const straightDistanceKm = L.latLng(visitorPosition).distanceTo(L.latLng(businessArea)) / 1000;
      distanceResult.textContent = `Straight-line distance only while the road route is requested: ${straightDistanceKm.toFixed(1)} km.`;
      distanceResult.hidden = false;
      map.fitBounds(L.latLngBounds(visitorPosition, businessArea), { padding: [48, 48], maxZoom: 16 });
      status.textContent = 'Your location was found. Requesting a road route...';
      requestRoadRoute(visitorPosition);
    }, (error) => {
      const messages = {
        1: 'Location permission was denied. You can allow it in your browser settings and try again.',
        2: 'Your current location is unavailable. Check your device location settings and try again.',
        3: 'We could not get your location in time. Please try again.'
      };
      status.textContent = messages[error.code] || 'We could not find your location. Please try again.';
      locateButton.disabled = false;
      locateButton.removeAttribute('aria-busy');
    }, {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: 12000
    });
  });
}
