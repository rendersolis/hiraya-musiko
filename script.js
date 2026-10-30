// PRODUCT DATA
const STORAGE_KEYS = {
  cart: 'hirayaMusikoCart',
  wishlist: 'hirayaMusikoWishlist',
  buyNow: 'hirayaMusikoBuyNow',
  user: 'hirayaMusikoUser',
  registeredAccount: 'hirayaMusikoRegisteredAccount',
  registeredAccounts: 'hirayaMusikoRegisteredAccounts',
  checkout: 'hirayaMusikoCheckout',
  orders: 'hirayaMusikoOrders',
  profile: 'hirayaMusikoProfile',
  addresses: 'hirayaMusikoAddresses',
  recent: 'hirayaMusikoRecentlyViewed',
  notifications: 'hirayaMusikoNotifications',
  reviews: 'hirayaMusikoReviews',
  newsletter: 'hirayaMusikoNewsletter'
};

const defaultProductImage = './images/product-placeholder.svg';

const products = [
  {
    id: 'hiraya-harana',
    name: 'Hiraya Harana',
    category: 'Acoustic Guitars',
    price: 25000,
    image: './images/hiraya-harana.png',
    productPage: 'product-harana.html',
    availability: 'available',
    description: 'Settle into a familiar steel-string sound with Harana, a full-size acoustic made for daily practice, songwriting, and intimate performances. Its rounded body, round soundhole, and rosette give it a classic folk-guitar character, while the dark reddish-brown appearance adds a warm visual presence. Six strings support familiar strumming and fingerstyle approaches. Harana suits new players building confidence as well as experienced musicians who want a straightforward instrument for home sessions, lessons, and unplugged OPM sets.',
    gallery: ['./images/hiraya-harana.png', './images/hiraya-harana-angle-1.png', './images/hiraya-harana-angle-2.png', './images/hiraya-harana-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Harana', 'Instrument type': 'Steel-string acoustic guitar', 'Body design': 'Full-size acoustic body with round soundhole and rosette', 'Body top material': 'Solid spruce', 'Back and sides material': 'Sapele laminate', 'Neck material': 'Nato', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '25.5 in (648 mm)', 'Number of frets': '20', 'Pickguard': 'Dark pickguard', 'Bridge': 'Fixed acoustic bridge; walnut bridge plate', 'Nut and saddle': 'Synthetic bone', 'Tuning machines': 'Gold-tone, 3+3 geared machines', 'Body color and finish': 'Dark reddish-brown appearance; finish type not specified', 'Electronics': 'No pickup controls or output jack shown', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Practice, songwriting, lessons, and unplugged performance' },
  },
  {
    id: 'hiraya-sinta',
    name: 'Hiraya Sinta',
    category: 'Acoustic Guitars',
    price: 22000,
    image: './images/hiraya-sinta.png',
    productPage: 'product-sinta.html',
    availability: 'available',
    description: 'Sinta brings a balanced acoustic character to practice rooms, songwriting sessions, and small unplugged sets. Its full-size body, round soundhole, and rosette follow a familiar steel-string layout, while the natural-to-sunburst wood appearance gives the guitar a relaxed, traditional look. The six-string setup works with standard acoustic tunings and supports both steady chord work and picked melodic parts. Choose Sinta for lessons, home recording, or casual performances when you want a versatile acoustic form without unnecessary complexity.',
    gallery: ['./images/hiraya-sinta.png', './images/hiraya-sinta-angle-1.png', './images/hiraya-sinta-angle-2.png', './images/hiraya-sinta-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Sinta', 'Instrument type': 'Steel-string acoustic guitar', 'Body design': 'Full-size acoustic body with round soundhole and rosette', 'Body top material': 'Solid spruce', 'Back and sides material': 'Mahogany laminate', 'Neck material': 'Nato', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '25.5 in (648 mm)', 'Number of frets': '20', 'Pickguard': 'Dark pickguard', 'Bridge': 'Fixed acoustic bridge; walnut bridge plate', 'Nut and saddle': 'Synthetic bone', 'Tuning machines': 'Gold-tone, 3+3 geared machines', 'Body color and finish': 'Amber-to-dark sunburst appearance; finish type not specified', 'Electronics': 'No pickup controls or output jack shown', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Chord accompaniment, fingerstyle practice, and small unplugged sets' },
  },
  {
    id: 'hiraya-kundiman',
    name: 'Hiraya Kundiman',
    category: 'Acoustic Guitars',
    price: 32000,
    image: './images/hiraya-kundiman.png',
    productPage: 'product-kundiman.html',
    availability: 'available',
    description: 'Kundiman pairs a light natural-looking top with a decorative rosette and dark pickguard for a distinctive steel-string acoustic style. Its full-size body and six-string layout suit chord-led accompaniment, fingerstyle arrangements, and developing original songs. The traditional soundhole design makes the instrument approachable for lessons and everyday practice, while its clear visual contrast helps it stand out in a small performance setup. Kundiman is intended for players who want a familiar acoustic guitar for folk-inspired writing, home sessions, and relaxed unplugged performances.',
    gallery: ['./images/hiraya-kundiman.png', './images/hiraya-kundiman-angle-1.png', './images/hiraya-kundiman-angle-2.png', './images/hiraya-kundiman-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Kundiman', 'Instrument type': 'Steel-string acoustic guitar', 'Body design': 'Full-size acoustic body with round soundhole and rosette', 'Body top material': 'Solid spruce', 'Back and sides material': 'Mahogany laminate', 'Neck material': 'Nato', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '25.5 in (648 mm)', 'Number of frets': '20', 'Pickguard': 'Dark pickguard', 'Bridge': 'Fixed acoustic bridge; walnut bridge plate', 'Nut and saddle': 'Synthetic bone', 'Tuning machines': 'Gold-tone, 3+3 geared machines', 'Body color and finish': 'Light natural top with darker sides; finish type not specified', 'Electronics': 'No pickup controls or output jack shown', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Fingerstyle, folk accompaniment, and songwriting' },
  },
  {
    id: 'hiraya-agos-electric',
    name: 'Hiraya Agos',
    category: 'Electric Guitars',
    price: 21000,
    image: './images/hiraya-agos.png',
    productPage: 'product-electric-agos.html',
    availability: 'available',
    description: 'Agos is a solid-body electric built around a contoured double-cutaway shape and a three-single-coil pickup layout. The six-string guitar is suited to players who move between clean chord parts, bright lead lines, and effects-driven textures in rehearsals or on stage. Its visible control layout gives players direct access to volume and tone adjustments, while the tremolo-style bridge supports expressive pitch movement. The white body and chrome-tone hardware create a crisp look for musicians exploring pop, rock, and OPM electric-guitar parts.',
    gallery: ['./images/hiraya-agos.png', './images/hiraya-agos-angle-1.png', './images/hiraya-agos-angle-2.png', './images/hiraya-agos-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Agos', 'Instrument type': 'Solid-body electric guitar', 'Body material': 'Basswood', 'Body shape': 'Double-cutaway contoured body', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '25.5 in (648 mm)', 'Number of frets': '22', 'Pickup configuration': 'Three single-coil pickups, as shown', 'Controls and selector': 'Two control knobs and a pickup selector, as shown', 'Bridge': 'Tremolo-style bridge, as shown', 'Tuning machines': 'Chrome-tone, sealed geared machines', 'Finish and color': 'White body; finish type not specified', 'Electronics': 'Passive pickup circuit', 'Included accessories': 'Padded gig bag and instrument cable', 'Recommended use': 'Clean rhythm, bright lead parts, and effects-driven playing' },
  },
  {
    id: 'hiraya-sinag',
    name: 'Hiraya Sinag',
    category: 'Electric Guitars',
    price: 29500,
    image: './images/hiraya-sinag.png',
    productPage: 'product-sinag.html',
    description: 'Sinag takes a classic single-cutaway electric shape and gives it a warm sunburst appearance, cream pickguard, and two humbucking pickups. Its six-string layout suits chord work, sustained lead parts, and layered studio arrangements across rock, blues-inspired music, and OPM. The visible pickup selector and four control knobs provide familiar ways to shape the instrument’s output. Sinag is a practical fit for players who prefer a traditional solid-body outline and want one guitar for rehearsal, home recording, and amplified performance.',
    gallery: ['./images/hiraya-sinag.png', './images/hiraya-sinag-angle-1.png', './images/hiraya-sinag-angle-2.png', './images/hiraya-sinag-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Sinag', 'Instrument type': 'Solid-body electric guitar', 'Body material': 'Mahogany', 'Body shape': 'Single-cutaway body', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '24.75 in (629 mm)', 'Number of frets': '22', 'Pickup configuration': 'Two humbucking pickups, as shown', 'Controls and selector': 'Four control knobs and pickup selector, as shown', 'Bridge': 'Fixed bridge, as shown', 'Tuning machines': 'Chrome-tone, sealed geared machines', 'Finish and color': 'Amber sunburst appearance with cream pickguard; finish type not specified', 'Electronics': 'Passive pickup circuit', 'Included accessories': 'Padded gig bag and instrument cable', 'Recommended use': 'Sustained lead lines, chord work, rehearsal, and recording' },
  },
  {
    id: 'hiraya-tala',
    name: 'Hiraya Tala',
    category: 'Electric Guitars',
    price: 34000,
    image: './images/hiraya-tala-electric.png',
    productPage: 'product-tala.html',
    description: 'Tala combines a double-cutaway electric-guitar outline with a vivid amber-red figured appearance and two humbucking pickups. The six-string configuration works for rhythm playing, melodic leads, and heavier layered parts, while the tremolo-style bridge invites expressive pitch changes. Its contoured shape keeps upper-fret access open for players who move around the neck during a performance. Tala suits rehearsal rooms, recording projects, and stage sets where a bold-looking electric guitar needs to cover a range of rock and contemporary OPM parts.',
    gallery: ['./images/hiraya-tala-electric.png', './images/hiraya-tala-electric-angle-1.png', './images/hiraya-tala-electric-angle-2.png', './images/hiraya-tala-electric-angle-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Tala', 'Instrument type': 'Solid-body electric guitar', 'Body material': 'Mahogany', 'Body shape': 'Double-cutaway body', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '6', 'Scale length': '25.5 in (648 mm)', 'Number of frets': '22', 'Pickup configuration': 'Two humbucking pickups, as shown', 'Controls and selector': 'Three control knobs shown; selector configuration not specified', 'Bridge': 'Tremolo-style bridge, as shown', 'Tuning machines': 'Chrome-tone, sealed geared machines', 'Finish and color': 'Amber-red figured appearance; finish type not specified', 'Electronics': 'Passive pickup circuit', 'Included accessories': 'Padded gig bag and instrument cable', 'Recommended use': 'Rock rhythm, expressive lead parts, rehearsal, and live sets' },
  },
  {
    id: 'hiraya-tala-keyboard',
    name: 'Hiraya Tala Keyboard',
    category: 'Pianos & Keyboards',
    priceSourceId: 'hiraya-tala',
    image: './images/hiraya-tala-keyboard-1.png',
    productPage: 'product-tala-keyboard.html',
    description: 'Tala Keyboard is a compact digital keyboard for writers, learners, and performers who need a portable instrument for practice or small setups. Its full-width keybed, central display, onboard controls, and built-in speaker positions are visible in the product image. Piano-style sounds support basic parts, melody writing, and simple accompaniment without requiring a separate sound module. Its portable format makes it suitable for a desk, rehearsal corner, or starter home studio. Explore its keybed and control layout for everyday practice, musical sketches, and small performance setups.',
    gallery: ['./images/hiraya-tala-keyboard-1.png', './images/hiraya-tala-keyboard-2.png', './images/hiraya-tala-keyboard-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Tala Keyboard', 'Instrument type': 'Portable digital keyboard', 'Number of keys': '61 full-size keys', 'Key type': 'Velocity-sensitive synth action', 'Sound engine': 'Piano, electric piano, organ, and synth voices', 'Polyphony': '64-note maximum', 'Tones and rhythms': '300 tones and 100 rhythms', 'Connectivity': 'USB-MIDI, headphone output, and sustain-pedal input', 'Speaker system': 'Two built-in speakers, 10 W each', 'Power source': '12 V DC adapter; battery support not specified', 'Dimensions': 'Approx. 95 × 31 × 10 cm', 'Weight': 'Approx. 5.5 kg', 'Included accessories': 'Power adapter and music rest', 'Recommended use': 'Practice, songwriting, and portable rehearsal' },
  },
  {
    id: 'hiraya-daluyong',
    name: 'Hiraya Daluyong',
    category: 'Bass Guitars',
    price: 18500,
    image: './images/hiraya-daluyong-1.png',
    productPage: 'product-daluyong.html',
    availability: 'available',
    description: 'Daluyong is a four-string electric bass with a solid-body format and two single-coil pickups, suited to players who need a direct, flexible foundation for a band. Its pickup arrangement and simple volume-and-tone controls support a range of familiar bass tones for pop, rock, and OPM parts. The full-length neck and 20-fret layout are intended for standard bass technique, from steady root-note lines to more active fills. Daluyong works for rehearsals, home recording, and live sets where dependable low-end is central to the arrangement.',
    gallery: ['./images/hiraya-daluyong-1.png', './images/hiraya-daluyong-2.png', './images/hiraya-daluyong-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Daluyong', 'Bass type': 'Four-string electric bass', 'Body construction': 'Solid-body construction', 'Body material': 'Basswood', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '4', 'Scale length': '34 in (864 mm)', 'Number of frets': '20', 'Pickup configuration': 'Two single-coil pickups', 'Electronics': 'Passive pickup circuit', 'Controls': '1 volume and 1 tone control', 'Bridge type': 'Fixed four-saddle bass bridge', 'Tuning machines': 'Open-gear bass tuners', 'Finish and color': 'Deep blue gloss', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Pop, rock, OPM, rehearsal, and home recording' },
  },
  {
    id: 'hiraya-alon',
    name: 'Hiraya Alon',
    category: 'Bass Guitars',
    price: 16800,
    image: './images/hiraya-alon-1.png',
    productPage: 'product-alon.html',
    availability: 'available',
    description: 'Alon is a four-string bass with a classic solid-body form and a split-coil pickup, designed for players who favor a familiar single-pickup layout. Two volume controls and a tone control let musicians balance the signal and adjust its character while playing mellow songs, funk grooves, or full-band arrangements. Its 20-fret neck supports foundational bass parts and melodic fills without adding an overly complex control scheme. Alon is a considered choice for practice, small ensemble work, and everyday rehearsal across acoustic and amplified settings.',
    gallery: ['./images/hiraya-alon-1.png', './images/hiraya-alon-2.png', './images/hiraya-alon-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Alon', 'Bass type': 'Four-string electric bass', 'Body construction': 'Solid-body construction', 'Body material': 'Alder', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '4', 'Scale length': '34 in (864 mm)', 'Number of frets': '20', 'Pickup configuration': 'One split-coil pickup', 'Electronics': 'Passive pickup circuit', 'Controls': '2 volume and 1 tone control', 'Bridge type': 'Fixed four-saddle bass bridge', 'Tuning machines': 'Open-gear bass tuners', 'Finish and color': 'Natural amber gloss', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Mellow songs, funk grooves, and everyday ensemble playing' },
  },
  {
    id: 'hiraya-habagat',
    name: 'Hiraya Habagat',
    category: 'Bass Guitars',
    price: 21500,
    image: './images/hiraya-habagat-1.png',
    productPage: 'product-habagat.html',
    availability: 'available',
    description: 'Habagat is a four-string solid-body bass with dual humbucker pickups, a 24-fret layout, and straightforward volume-and-tone controls. The two-pickup arrangement is intended for players who want to blend a broader range of bass voices across rock, heavier arrangements, and stage work. Its bold appearance and extended fret count suit musicians who add upper-register fills alongside a strong low foundation. Habagat is designed for rehearsals, recording, and amplified sets where a versatile electric bass is part of a dense mix.',
    gallery: ['./images/hiraya-habagat-1.png', './images/hiraya-habagat-2.png', './images/hiraya-habagat-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Habagat', 'Bass type': 'Four-string electric bass', 'Body construction': 'Solid-body construction', 'Body material': 'Mahogany', 'Neck material': 'Maple', 'Fingerboard material': 'Laurel', 'Strings': '4', 'Scale length': '34 in (864 mm)', 'Number of frets': '24', 'Pickup configuration': 'Dual humbucker pickups', 'Electronics': 'Passive pickup circuit', 'Controls': '2 volume and 1 tone control', 'Bridge type': 'Fixed four-saddle bass bridge', 'Tuning machines': 'Open-gear bass tuners', 'Finish and color': 'Black cherry gloss', 'Included accessories': 'Padded gig bag and hex key', 'Recommended use': 'Rock, heavier arrangements, rehearsal, and live performance' },
  },
  {
    id: 'hiraya-harmonia',
    name: 'Hiraya Harmonia',
    category: 'Pianos & Keyboards',
    price: 40000,
    image: './images/hiraya-harmonia-keyboard-1.png',
    productPage: 'product-harmonia.html',
    availability: 'available',
    description: 'Harmonia is a portable digital keyboard for players who need a broad key range for lessons, composition, and rehearsals. The product image shows a full-width keyboard layout with an onboard display, control panel, and built-in speaker positions. Piano-style playing pairs with additional tones and rhythms for sketching arrangements or practicing with accompaniment. Use it at home, in a teaching space, or in a compact studio. Its wide layout supports chord practice, melodic parts, and arranging ideas, while the onboard controls keep common functions close at hand.',
    gallery: ['./images/hiraya-harmonia-keyboard-1.png', './images/hiraya-harmonia-keyboard-2.png', './images/hiraya-harmonia-keyboard-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Harmonia Keyboard', 'Instrument type': 'Portable digital keyboard', 'Number of keys': '61 full-size keys', 'Key type': 'Velocity-sensitive synth action', 'Sound engine': 'Piano, electric piano, organ, strings, and synth voices', 'Polyphony': '128-note maximum', 'Tones and rhythms': '500 tones and 200 rhythms', 'Connectivity': 'USB-MIDI, line output, headphone output, and sustain-pedal input', 'Speaker system': 'Two built-in speakers, 10 W each', 'Power source': '12 V DC adapter', 'Dimensions': 'Approx. 96 × 33 × 11 cm', 'Weight': 'Approx. 6.2 kg', 'Included accessories': 'Power adapter and music rest', 'Recommended use': 'Composition, lessons, rehearsal, and home performance' },
  },
  {
    id: 'hiraya-diwa',
    name: 'Hiraya Diwa',
    category: 'Pianos & Keyboards',
    price: 38500,
    image: './images/hiraya-diwa-keyboard-1.png',
    productPage: 'product-diwa.html',
    description: 'Diwa is a streamlined keyboard for students, songwriters, and home-studio players who value a clear control layout. Its compact keybed and central display make basic tone selection and practice functions easy to reach, with piano parts, simple layers, and rhythmic accompaniment available for arranging ideas. The portable format can fit a desk or rehearsal space and supports everyday scale work, chord practice, and musical sketches. Its focused layout suits players who want accessible controls for lessons, writing sessions, and home-studio use.',
    gallery: ['./images/hiraya-diwa-keyboard-1.png', './images/hiraya-diwa-keyboard-2.png', './images/hiraya-diwa-keyboard-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Diwa Keyboard', 'Instrument type': 'Portable digital keyboard', 'Number of keys': '61 full-size keys', 'Key type': 'Touch-sensitive synth action', 'Sound engine': 'Piano, electric piano, organ, and synth voices', 'Polyphony': '128-note maximum', 'Tones and rhythms': '300 tones and 120 rhythms', 'Connectivity': 'USB-MIDI, headphone output, and sustain-pedal input', 'Speaker system': 'Two built-in speakers, 8 W each', 'Power source': '12 V DC adapter', 'Dimensions': 'Approx. 94 × 31 × 10 cm', 'Weight': 'Approx. 5.1 kg', 'Included accessories': 'Power adapter and music rest', 'Recommended use': 'Lessons, practice, songwriting, and home-studio sketches' },
  },
  {
    id: 'hiraya-indak',
    name: 'Hiraya Indak',
    category: 'Drums & Percussion',
    price: 46000,
    image: './images/hiraya-indak-drum-kit-1.png',
    productPage: 'product-indak.html',
    description: 'Indak is a five-piece acoustic drum kit shown with mounted toms, a floor tom, a bass drum, a snare, cymbals, and stands. It is intended for drummers building a complete setup for rehearsals, school performances, and band practice. The multi-drum layout supports foundational grooves, fills, and dynamic changes across pop, rock, and OPM. Its coordinated pieces create a practical starting point for developing timekeeping and expression, while the cymbals and stands complete a setup ready for a rehearsal room or practice space.',
    gallery: ['./images/hiraya-indak-drum-kit-1.png', './images/hiraya-indak-drum-kit-2.png', './images/hiraya-indak-drum-kit-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Indak Drum Kit', 'Kit type': 'Five-piece acoustic drum kit', 'Pieces': 'Bass drum, snare, two mounted toms, and floor tom', 'Drum sizes': '22 in bass, 14 in snare, 10 in and 12 in mounted toms, 16 in floor tom', 'Shell material': 'Poplar', 'Shell construction': '6-ply, approx. 7 mm shells', 'Included cymbals': '14 in hi-hats, 16 in crash, and 20 in ride', 'Hardware included': 'Bass-drum pedal, hi-hat stand, snare stand, tom mounts, and two cymbal stands', 'Drumheads': 'Coated batter head on snare; clear batter heads on toms', 'Finish': 'Deep purple gloss', 'Included accessories': 'Drum key and basic setup guide', 'Recommended use': 'Practice, school band, and rehearsal-room performance' },
  },
  {
    id: 'hiraya-agos',
    name: 'Hiraya Agos',
    category: 'Drums & Percussion',
    price: 21000,
    image: './images/hiraya-agos-percussion-set-1.png',
    productPage: 'product-agos.html',
    availability: 'available',
    description: 'Agos Percussion Set is a coordinated drum-and-cymbal setup for players who want a complete rhythm station for practice and ensemble work. The product image shows a bass drum, mounted toms, a floor tom, a snare, cymbals, and supporting stands. Its layout is suited to learning timekeeping, building fills, and contributing a steady rhythmic foundation in school bands or rehearsals. The combination of drums and cymbals supports a range of grooves and transitions, making it useful for group practice and developing players.',
    gallery: ['./images/hiraya-agos-percussion-set-1.png', './images/hiraya-agos-percussion-set-2.png', './images/hiraya-agos-percussion-set-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Agos Percussion Set', 'Kit type': 'Five-piece acoustic drum-and-cymbal set', 'Pieces': 'Bass drum, snare, two mounted toms, and floor tom', 'Drum sizes': '20 in bass, 14 in snare, 10 in and 12 in mounted toms, 14 in floor tom', 'Shell material': 'Basswood', 'Shell construction': '6-ply, approx. 7 mm shells', 'Included cymbals': '14 in hi-hats, 16 in crash, and 18 in ride', 'Hardware included': 'Bass-drum pedal, hi-hat stand, snare stand, tom mounts, and two cymbal stands', 'Drumheads': 'Coated snare batter head; clear tom batter heads', 'Finish': 'Natural brown wood-look wrap', 'Included accessories': 'Drum key and basic setup guide', 'Recommended use': 'Practice, school ensembles, and band rehearsal' },
  },
  {
    id: 'hiraya-tambol',
    name: 'Hiraya Tambol',
    category: 'Drums & Percussion',
    price: 18000,
    image: './images/hiraya-tambol-1.png',
    productPage: 'product-tambol.html',
    description: 'Tambol is a compact acoustic drum kit shown with a bass drum, mounted toms, a floor tom, a snare, cymbals, and stands. It is aimed at learners and developing drummers who want a coordinated setup for home practice, lessons, or small ensemble rehearsals. The arrangement provides the core pieces for practicing pulse, basic grooves, and transitions between drums and cymbals. Its compact footprint can suit a dedicated practice corner, while the coordinated kit layout gives players room to develop timing and dynamics.',
    gallery: ['./images/hiraya-tambol-1.png', './images/hiraya-tambol-2.png', './images/hiraya-tambol-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Tambol', 'Kit type': 'Compact five-piece acoustic drum kit', 'Pieces': 'Bass drum, snare, two mounted toms, and floor tom', 'Drum sizes': '20 in bass, 14 in snare, 10 in and 12 in mounted toms, 14 in floor tom', 'Shell material': 'Basswood', 'Shell construction': '6-ply, approx. 7 mm shells', 'Included cymbals': '14 in hi-hats, 16 in crash, and 18 in crash/ride', 'Hardware included': 'Bass-drum pedal, hi-hat stand, snare stand, tom mounts, and two cymbal stands', 'Drumheads': 'Coated snare batter head; clear tom batter heads', 'Finish': 'Blue and magenta gloss', 'Included accessories': 'Drum key and basic setup guide', 'Recommended use': 'Beginner practice, lessons, and compact rehearsal spaces' },
  },
  {
    id: 'hiraya-hibla',
    name: 'Hiraya Hibla',
    category: 'Accessories',
    price: 900,
    image: './images/hiraya-hibla-strings-1.png',
    productPage: 'product-hibla.html',
    description: 'Hibla is a packaged guitar-string set for players replacing a worn set or keeping a spare ready for rehearsal and travel. The product image presents it as an individually packaged guitar accessory with a dark-and-gold presentation. The six-string acoustic set is suited to players who prefer a familiar light setup. Match string type and gauge to your instrument and playing preference, and check compatibility before ordering. Keeping a spare set in a case or gig bag makes it easy to prepare for regular practice, recording sessions, and performances.',
    gallery: ['./images/hiraya-hibla-strings-1.png', './images/hiraya-hibla-strings-2.png', './images/hiraya-hibla-strings-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Hibla Acoustic Strings', 'Instrument compatibility': 'Six-string steel-string acoustic guitar', 'String count': '6', 'Material': 'Phosphor bronze wrap over steel core', 'String gauge': '.012–.053 light gauge', 'Winding type': 'Roundwound, wound low strings', 'Scale compatibility': 'Full-scale acoustic guitars, approx. 25.5 in', 'Package contents': 'One six-string set in protective envelopes' },
  },
  {
    id: 'hiraya-kawayan',
    name: 'Hiraya Kawayan',
    category: 'Accessories',
    price: 650,
    image: './images/hiraya-kawayan-picks-1.png',
    productPage: 'product-kawayan.html',
    description: 'Kawayan is a bamboo guitar pick for players looking for a natural-material alternative to standard plastic picks. The product image shows a teardrop-shaped pick in branded packaging, with a smooth-looking face and a simple grip profile. Its compact format is easy to carry with a guitar for practice, songwriting, or a live set. Choose a pick thickness that suits your attack and string feel, and keep a spare close by for rehearsals and performances. Its natural material gives this small accessory a distinctive look among everyday guitar essentials.',
    gallery: ['./images/hiraya-kawayan-picks-1.png', './images/hiraya-kawayan-picks-2.png', './images/hiraya-kawayan-picks-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Kawayan Bamboo Picks', 'Material': 'Bamboo', 'Thickness': '1.0 mm medium', 'Shape': 'Teardrop', 'Texture or grip': 'Smooth face with lightly textured grip area', 'Quantity per pack': '3 picks', 'Instrument compatibility': 'Electric and acoustic guitar' },
  },
  {
    id: 'hiraya-strap',
    name: 'Hiraya Strap',
    category: 'Accessories',
    price: 1200,
    image: './images/hiraya-strap-1.png',
    productPage: 'product-strap.html',
    description: 'Hiraya Strap is an adjustable black instrument strap with woven webbing, end tabs, and a sliding length adjuster. It is intended to help support a compatible guitar or bass during standing practice and performance, with length adjustment for different player heights and positions. The dark finish pairs with the site’s instrument range without drawing attention away from the instrument. Check that the strap ends fit your instrument’s attachment points before use, and adjust its length for a comfortable playing position during rehearsals, lessons, and live sets.',
    gallery: ['./images/hiraya-strap-1.png', './images/hiraya-strap-2.png', './images/hiraya-strap-3.png'],
    specifications: { 'Brand': 'Hiraya Musiko', 'Model': 'Hiraya Strap', 'Material': 'Woven nylon webbing with reinforced end tabs', 'Minimum and maximum length': 'Approx. 36–60 in (91–152 cm)', 'Width': '2 in (5 cm)', 'Adjustment type': 'Sliding length adjuster', 'Attachment type': 'Instrument strap buttons; locks not included', 'Color': 'Black with dark hardware', 'Included components': 'One adjustable strap' },
  }
];

const productMap = new Map(products.map((product) => [product.id, product]));
products.forEach((product) => {
  if (product.priceSourceId) {
    Object.defineProperty(product, 'price', {
      enumerable: true,
      get: () => productMap.get(product.priceSourceId)?.price
    });
  }
});

// UI HELPERS
// Read saved data and use a fallback if it is missing or cannot be parsed.
function safeParseJSON(key, fallback) {
  try {
    // Read stored text so missing values can use the caller's fallback.
    const raw = localStorage.getItem(key);
    if (!raw || raw === 'undefined') {
      return fallback;
    }

    // Convert valid JSON text back into a value the page can use.
    const value = JSON.parse(raw);
    return value ?? fallback;
  } catch (error) {
    return fallback;
  }
}

// Save data as JSON so it can be loaded again from localStorage.
function safeSetJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Could not save to localStorage:', error);
    return false;
  }
}

// Keep account data separate while retaining an independent guest cart and wishlist.
function accountStorageKey(key) {
  const user = safeParseJSON(STORAGE_KEYS.user, null);
  const identity = user?.accountId || user?.email?.trim().toLowerCase();
  const account = identity ? encodeURIComponent(identity) : 'guest';
  return `${key}:${account}`;
}

function currency(value) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0
  }).format(value || 0);
}

// Read the catalog's canonical numeric price, accepting formatted values as well.
function getProductPrice(product) {
  const rawPrice = product?.price;
  if (typeof rawPrice === 'number') return Number.isFinite(rawPrice) ? rawPrice : null;
  if (rawPrice == null) return null;
  const normalizedPrice = String(rawPrice).replace(/[^\d.-]/g, '');
  if (!/\d/.test(normalizedPrice)) return null;
  const numericPrice = Number(normalizedPrice);
  return Number.isFinite(numericPrice) ? numericPrice : null;
}

// Load the cart from storage, using an empty list when no cart is saved.
function getCart() {
  return safeParseJSON(accountStorageKey(STORAGE_KEYS.cart), []);
}

function saveCart(cart) {
  safeSetJSON(accountStorageKey(STORAGE_KEYS.cart), cart);
}

// Retrieve saved wishlist entries through the shared safe JSON reader.
function getWishlist() {
  return safeParseJSON(accountStorageKey(STORAGE_KEYS.wishlist), []);
}

function saveWishlist(items) {
  safeSetJSON(accountStorageKey(STORAGE_KEYS.wishlist), items);
}

function getCurrentProduct() {
  const pagePath = window.location.pathname.split('/').pop() || '';
  const productId = products
    .map((product) => product.productPage)
    .includes(pagePath)
    ? products.find((product) => product.productPage === pagePath)?.id
    : null;

  return productId ? productMap.get(productId) : null;
}

function getProductIdFromHref(href) {
  if (!href) {
    return null;
  }

  const pageName = href.split('/').pop().split('?')[0];
  const product = products.find((item) => item.productPage === pageName || item.id === pageName.replace('product-', ''));
  return product ? product.id : null;
}

function getProductDataFromContext(element) {
  const fromDataset = element?.dataset?.productId;
  if (fromDataset) {
    return productMap.get(fromDataset) || null;
  }

  const currentProduct = getCurrentProduct();
  if (currentProduct) {
    return currentProduct;
  }

  const card = element?.closest('.product-card, .product-item, article');
  const href = card?.querySelector('a[href*="product-"]')?.getAttribute('href');
  const productId = href ? getProductIdFromHref(href) : null;

  if (productId) {
    return productMap.get(productId) || null;
  }

  return null;
}

function renderCartCount() {
  const totalItems = getCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const counts = document.querySelectorAll('[data-cart-count]');

  counts.forEach((element) => {
    element.textContent = totalItems > 0 ? String(totalItems) : '';
    element.hidden = totalItems === 0;
  });
}

function renderWishlistCount() {
  const totalItems = getWishlist().length;
  const counts = document.querySelectorAll('[data-wishlist-count]');

  counts.forEach((element) => {
    element.textContent = totalItems > 0 ? String(totalItems) : '';
    element.hidden = totalItems === 0;
  });
}

function updateCounts() {
  renderCartCount();
  renderWishlistCount();
}

function getOrders() {
  return safeParseJSON(accountStorageKey(STORAGE_KEYS.orders), []);
}

function saveOrders(orders) {
  safeSetJSON(accountStorageKey(STORAGE_KEYS.orders), orders);
}

function getProfile() {
  return safeParseJSON(accountStorageKey(STORAGE_KEYS.profile), safeParseJSON(STORAGE_KEYS.user, {}));
}

function saveProfile(profile) {
  const accountId = safeParseJSON(STORAGE_KEYS.user, null)?.accountId || profile.email?.trim().toLowerCase();
  profile.accountId = accountId;
  safeSetJSON(accountStorageKey(STORAGE_KEYS.profile), profile);
  safeSetJSON(STORAGE_KEYS.user, { ...profile, accountId, password: 'demo-hidden' });
}

function getAddresses() {
  return safeParseJSON(accountStorageKey(STORAGE_KEYS.addresses), []);
}

function saveAddresses(addresses) {
  safeSetJSON(accountStorageKey(STORAGE_KEYS.addresses), addresses);
}

function recordRecentlyViewed(product) {
  if (!product) return;
  const recent = safeParseJSON(STORAGE_KEYS.recent, []).filter((id) => id !== product.id);
  recent.unshift(product.id);
  safeSetJSON(STORAGE_KEYS.recent, recent.slice(0, 6));
}

function getRecentlyViewed() {
  return safeParseJSON(STORAGE_KEYS.recent, []).map((id) => productMap.get(id)).filter(Boolean);
}

function openSideCart() {
  const panel = document.getElementById('mini-cart-panel');
  const backdrop = document.getElementById('mini-cart-backdrop');
  if (!panel || !backdrop) {
    return;
  }

  panel.classList.add('open');
  backdrop.classList.add('open');
  document.body.classList.add('mini-cart-open');
}

function closeSideCart() {
  const panel = document.getElementById('mini-cart-panel');
  const backdrop = document.getElementById('mini-cart-backdrop');
  if (!panel || !backdrop) {
    return;
  }

  panel.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.classList.remove('mini-cart-open');
}

function renderMiniCart() {
  const panel = document.getElementById('mini-cart-panel');
  const items = getCart();

  if (!panel) {
    return;
  }

  if (!items.length) {
    panel.innerHTML = `
      <div class="mini-cart-header">
        <h3>Cart</h3>
        <button type="button" class="close-mini-cart">Close</button>
      </div>
      <div class="mini-cart-empty">
        <p>Your cart is empty.</p>
      </div>
    `;
    return;
  }

  const total = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity || 1)), 0);

  panel.innerHTML = `
    <div class="mini-cart-header">
      <h3>Cart</h3>
      <button type="button" class="close-mini-cart">Close</button>
    </div>
    <div class="mini-cart-items">
      ${items
        .map(
          (item) => `
            <div class="mini-cart-item">
              <img src="${item.image || defaultProductImage}" alt="${item.name}" />
              <div class="mini-cart-copy">
                <p class="mini-name">${item.name}</p>
                <p>Qty: ${item.quantity}</p>
                <p>${currency(item.price * item.quantity)}</p>
              </div>
            </div>
          `
        )
        .join('')}
    </div>
    <div class="mini-cart-summary">
      <span>Subtotal</span>
      <strong>${currency(total)}</strong>
    </div>
    <div class="mini-cart-actions">
      <a href="cart.html" class="main-button">VIEW CART</a>
      <a href="checkout.html" class="main-button">CHECKOUT</a>
    </div>
  `;

  panel.querySelector('.close-mini-cart')?.addEventListener('click', closeSideCart);
}

function addToCart(productId, quantity = 1) {
  if (!isUserLoggedIn()) {
    showLoginRequiredAction('cart');
    return;
  }

  const product = productMap.get(productId);
  if (!product) {
    return;
  }

  const currentCart = getCart();
  const existingItem = currentCart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += Number(quantity);
  } else {
    currentCart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image || defaultProductImage,
      quantity: Number(quantity)
    });
  }

  saveCart(currentCart);
  updateCounts();
  renderMiniCart();
  openSideCart();

  const confirmation = document.getElementById('cart-confirmation');
  if (confirmation) {
    confirmation.classList.remove('login-required');
    confirmation.textContent = `${product.name} added to cart.`;
    confirmation.classList.add('show');
    window.clearTimeout(confirmation.dismissTimer);
    confirmation.dismissTimer = window.setTimeout(() => confirmation.classList.remove('show'), 1800);
  }
}

// Remove the selected item and refresh the cart totals and mini cart.
function removeFromCart(productId) {
  const nextCart = getCart().filter((item) => item.id !== productId);
  saveCart(nextCart);
  updateCounts();
  renderCartPage();
  renderMiniCart();
}

// Change the item quantity, keeping it at one or more, then refresh the cart.
function updateCartQuantity(productId, change) {
  const cart = getCart();
  // Find the selected item before applying the requested quantity change.
  const item = cart.find((entry) => entry.id === productId);
  if (!item) {
    return;
  }

  const nextQty = Number(item.quantity) + Number(change);
  // Keep the quantity at one or more when the decrease button is used.
  item.quantity = Math.max(1, nextQty);
  saveCart(cart);
  updateCounts();
  renderCartPage();
  renderMiniCart();
}

function setBuyNow(productId) {
  if (!isUserLoggedIn()) {
    showLoginRequiredAction('purchase');
    return;
  }

  safeSetJSON(accountStorageKey(STORAGE_KEYS.buyNow), productId);
  window.location.href = 'checkout.html';
}

function getBuyNowProduct() {
  const id = safeParseJSON(accountStorageKey(STORAGE_KEYS.buyNow), null);
  return id ? productMap.get(id) : null;
}

function isUserLoggedIn() {
  return Boolean(safeParseJSON(STORAGE_KEYS.user, null)?.email);
}

function showLoginRequiredAction(action) {
  const message = action === 'purchase'
    ? 'Please log in to your account first to continue with your purchase.'
    : action === 'wishlist'
      ? 'Please log in to your account first to add items to your wishlist.'
      : 'Please log in to your account first to add items to your cart.';
  const notification = document.getElementById('cart-confirmation');
  if (notification) {
    notification.textContent = message;
    notification.classList.add('login-required');
    notification.classList.add('show');
    window.clearTimeout(notification.dismissTimer);
    notification.dismissTimer = window.setTimeout(() => notification.classList.remove('show'), 4000);
  }

  const accountTrigger = document.querySelector('.header-icon-link[aria-label="Account"]');
  if (accountTrigger) openAccountPrompt(accountTrigger);
}

// Check the saved list for an item with this product ID.
function hasProductInWishlist(productId) {
  return getWishlist().some((item) => item.id === productId);
}

// Add the product to the saved wishlist, or remove it if it is already there.
function toggleWishlist(productId) {
  if (!isUserLoggedIn()) {
    showLoginRequiredAction('wishlist');
    return;
  }

  const product = productMap.get(productId);
  if (!product) {
    return;
  }

  const wishlist = getWishlist();
  // Use the product ID to decide whether this click adds or removes the item.
  const exists = wishlist.some((item) => item.id === productId);

  // Keep other entries when removing, or append this product when adding.
  const nextList = exists
    ? wishlist.filter((item) => item.id !== productId)
    : [
        ...wishlist,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image || defaultProductImage
        }
      ];

  // Save the changed list, then refresh its count, page, and button labels.
  saveWishlist(nextList);
  updateCounts();
  renderWishlistPage();
  syncWishlistButtons();
}

function syncWishlistButtons() {
  const buttons = document.querySelectorAll('[data-wishlist-toggle]');
  buttons.forEach((button) => {
    const productId = button.dataset.wishlistToggle;
    // Set each button label and style from the saved wishlist state.
    const inWishlist = hasProductInWishlist(productId);
    button.classList.toggle('active', inWishlist);
    button.textContent = inWishlist ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST';
  });
}

// Load saved wishlist items and show either the products or the empty state.
function renderWishlistPage() {
  const wishlistRoot = document.getElementById('wishlist-items');
  if (!wishlistRoot) {
    return;
  }

  const loginRequired = document.getElementById('wishlist-login-required');
  const wishlistContent = document.querySelectorAll('[data-wishlist-content]');
  const isLoggedIn = Boolean(safeParseJSON(STORAGE_KEYS.user, null)?.email);
  if (loginRequired) loginRequired.hidden = isLoggedIn;
  wishlistContent.forEach((section) => { section.hidden = !isLoggedIn; });
  if (!isLoggedIn) {
    wishlistRoot.replaceChildren();
    return;
  }

  const wishlist = getWishlist();
  // Show an empty state instead of trying to render missing wishlist items.
  if (!wishlist.length) {
    wishlistRoot.innerHTML = `
      <div class="wishlist-empty">
        <p>Your wishlist is empty.</p>
        <a class="main-button" href="products.html">EXPLORE PRODUCTS</a>
      </div>
    `;
    return;
  }

  // Build one display card for every saved product.
  wishlistRoot.innerHTML = wishlist
    .map(
      (item) => `
        <div class="wishlist-item">
          <img src="${item.image || defaultProductImage}" alt="${item.name}" />
          <div class="wishlist-copy">
            <h3>${item.name}</h3>
            <p>${currency(item.price)}</p>
            <div class="wishlist-actions">
              <a href="${productMap.get(item.id)?.productPage || 'products.html'}" class="main-button">VIEW PRODUCT</a>
              <button type="button" class="main-button add-to-cart-btn" data-product-id="${item.id}">ADD TO CART</button>
              <button type="button" class="main-button wishlist-remove" data-product-id="${item.id}">REMOVE</button>
            </div>
          </div>
        </div>
      `
    )
    .join('');

  // Connect the cart buttons after their HTML has been added.
  wishlistRoot.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.productId));
  });

  // Removing an item uses the same toggle logic as adding it.
  wishlistRoot.querySelectorAll('.wishlist-remove').forEach((button) => {
    button.addEventListener('click', () => toggleWishlist(button.dataset.productId));
  });
}

// CART PAGE
// Calculate each line price and the subtotal, then update the cart display.
function renderCartPage() {
  const cartRoot = document.getElementById('cart-items');
  const subtotalNode = document.getElementById('cart-subtotal');
  const totalNode = document.getElementById('cart-total');

  if (!cartRoot) {
    return;
  }

  const loginRequired = document.getElementById('cart-login-required');
  const cartContent = document.querySelectorAll('[data-cart-content]');
  const isLoggedIn = Boolean(safeParseJSON(STORAGE_KEYS.user, null)?.email);
  if (loginRequired) loginRequired.hidden = isLoggedIn;
  cartContent.forEach((element) => { element.hidden = !isLoggedIn; });
  if (!isLoggedIn) {
    cartRoot.replaceChildren();
    if (subtotalNode) subtotalNode.textContent = currency(0);
    if (totalNode) totalNode.textContent = currency(0);
    const shippingNode = document.getElementById('cart-shipping');
    if (shippingNode) shippingNode.textContent = currency(0);
    return;
  }

  const cart = getCart();

  // Show the empty-cart message and reset displayed amounts to zero.
  if (!cart.length) {
    cartRoot.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">Your cart is empty.</td>
      </tr>
    `;
    if (subtotalNode) subtotalNode.textContent = currency(0);
    if (document.getElementById('cart-shipping')) document.getElementById('cart-shipping').textContent = currency(0);
    if (totalNode) totalNode.textContent = currency(0);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0);

  // User each item with its unit price, quantity controls, and line price.
  cartRoot.innerHTML = cart
    .map(
      (item) => `
        <tr>
          <td class="cart-product-cell">
            <div class="cart-product">
              <img src="${item.image || defaultProductImage}" alt="${item.name}" />
              <div>
                <strong>${item.name}</strong>
                <p>${item.category || 'General'}</p>
              </div>
            </div>
          </td>
          <td>${currency(item.price)}</td>
          <td>
            <div class="quantity-control compact">
              <button type="button" data-action="decrease" data-product-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-action="increase" data-product-id="${item.id}">+</button>
            </div>
          </td>
          <td>${currency(Number(item.price) * Number(item.quantity))}</td>
          <td><button type="button" class="remove-cart-item" data-product-id="${item.id}">Remove</button></td>
        </tr>
      `
    )
    .join('');

  // Shipping is zero in this demo, so the total stays equal to the subtotal.
  if (subtotalNode) subtotalNode.textContent = currency(subtotal);
  if (document.getElementById('cart-shipping')) document.getElementById('cart-shipping').textContent = currency(0);
  if (totalNode) totalNode.textContent = currency(subtotal);

  // Quantity buttons change one unit and then redraw the cart.
  cartRoot.querySelectorAll('[data-action="increase"]').forEach((button) => {
    button.addEventListener('click', () => updateCartQuantity(button.dataset.productId, 1));
  });

  cartRoot.querySelectorAll('[data-action="decrease"]').forEach((button) => {
    button.addEventListener('click', () => updateCartQuantity(button.dataset.productId, -1));
  });

  cartRoot.querySelectorAll('.remove-cart-item').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.productId));
  });
}

// CHECKOUT
function getCheckoutItems() {
  const buyNowProduct = getBuyNowProduct();
  if (buyNowProduct) {
    return [{ ...buyNowProduct, quantity: 1, image: buyNowProduct.image || defaultProductImage }];
  }

  return getCart();
}

function setSelectedPayment(value) {
  const labels = document.querySelectorAll('.payment-option');
  labels.forEach((label) => {
    const matches = label.dataset.payment === value;
    label.classList.toggle('selected', matches);
  });

  const paymentInput = document.querySelector('input[name="payment"][value="' + value + '"]');
  if (paymentInput) {
    paymentInput.checked = true;
  }

  const checkoutState = safeParseJSON(accountStorageKey(STORAGE_KEYS.checkout), {});
  checkoutState.paymentMethod = value;
  safeSetJSON(accountStorageKey(STORAGE_KEYS.checkout), checkoutState);
}

function renderCheckoutPage() {
  const summaryRoot = document.getElementById('checkout-items');
  if (!summaryRoot) {
    return;
  }

  const items = getCheckoutItems();
  const total = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0);

  summaryRoot.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <div class="checkout-item">
              <div>
                <strong>${item.name}</strong>
                <span>${item.category || 'Product'}</span>
              </div>
              <span>${item.quantity}</span>
              <span>${currency(item.price)}</span>
              <span>${currency(Number(item.price) * Number(item.quantity || 1))}</span>
            </div>
          `
        )
        .join('')
    : '<p class="empty-state">Your cart is empty.</p>';

  const totalNode = document.getElementById('checkout-total');
  if (totalNode) {
    totalNode.textContent = currency(total);
  }

  const paymentState = safeParseJSON(accountStorageKey(STORAGE_KEYS.checkout), {});
  const selectedValue = paymentState.paymentMethod || null;
  if (selectedValue) {
    setSelectedPayment(selectedValue);
  }

  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.addEventListener('change', (event) => setSelectedPayment(event.target.value));
  });
}

function validateCheckoutForm(form) {
  const fullName = form.querySelector('input[name="fullname"]')?.value.trim() || '';
  const email = form.querySelector('input[name="email"]')?.value.trim() || '';
  const phone = form.querySelector('input[name="phone"]')?.value.trim() || '';
  const address = form.querySelector('textarea[name="address"]')?.value.trim() || '';
  const city = form.querySelector('input[name="city"]')?.value.trim() || '';
  const province = form.querySelector('input[name="province"]')?.value.trim() || '';
  const postalCode = form.querySelector('input[name="postal-code"]')?.value.trim() || '';
  const paymentValue = document.querySelector('input[name="payment"]:checked')?.value || '';
  const orderItems = getCheckoutItems();

  if (!fullName || !email || !phone || !address || !city || !province || !postalCode || !paymentValue || !orderItems.length) {
    return 'Please complete all customer details, choose a payment method, and ensure your cart is not empty.';
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) {
    return 'Please enter a valid email address.';
  }

  return '';
}

function placeOrder() {
  if (document.querySelector('.checkout-grid.order-confirmed')) return;
  const form = document.querySelector('.checkout-form');
  if (!form) {
    return;
  }

  const error = validateCheckoutForm(form);
  const messageRoot = document.getElementById('checkout-message');

  if (error) {
    if (messageRoot) {
      messageRoot.textContent = error;
      messageRoot.className = 'form-message error';
    }
    return;
  }

  const reference = 'HM-' + Math.floor(100000 + Math.random() * 900000);
  const orderItems = getCheckoutItems();
  const total = orderItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0);
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'cod';
  const order = {
    id: reference,
    date: new Date().toISOString(),
    items: orderItems,
    total,
    paymentMethod,
    status: 'Order Confirmed',
    customer: {
      name: form.querySelector('input[name="fullname"]')?.value.trim() || '',
      email: form.querySelector('input[name="email"]')?.value.trim() || '',
      phone: form.querySelector('input[name="phone"]')?.value.trim() || '',
      address: form.querySelector('textarea[name="address"]')?.value.trim() || '',
      city: form.querySelector('input[name="city"]')?.value.trim() || '',
      province: form.querySelector('input[name="province"]')?.value.trim() || '',
      postalCode: form.querySelector('input[name="postal-code"]')?.value.trim() || ''
    }
  };
  saveOrders([order, ...getOrders()].slice(0, 20));
  safeSetJSON(accountStorageKey(STORAGE_KEYS.notifications), [
    { id: `${reference}-confirmed`, text: `Order ${reference} confirmed.`, date: order.date, read: false },
    ...safeParseJSON(accountStorageKey(STORAGE_KEYS.notifications), [])
  ].slice(0, 30));

  if (messageRoot) {
    document.querySelector('.checkout-grid')?.classList.add('order-confirmed');
    const paymentLabels = {
      cod: 'Cash on Delivery',
      gcash: 'GCash',
      maya: 'Maya',
      'bank-transfer': 'Bank Transfer',
      'credit-debit-card': 'Credit / Debit Card'
    };
    const paymentLabel = paymentLabels[paymentMethod] || paymentMethod;
    messageRoot.innerHTML = `
      <div class="order-confirmation-content">
        <h2>ORDER RECEIVED</h2>
        <p class="order-confirmation-thanks">Thank you for choosing Hiraya Musiko.</p>
        <dl class="order-confirmation-details">
          <div><dt>Order reference</dt><dd><strong>${reference}</strong></dd></div>
          <div><dt>Your total</dt><dd><strong>${currency(total)}</strong></dd></div>
          <div><dt>Payment method</dt><dd><strong>${paymentLabel}</strong></dd></div>
        </dl>
        <div class="order-confirmation-actions">
          <a class="main-button" href="account.html">VIEW ORDER</a>
          <a class="main-button" href="products.html">CONTINUE SHOPPING</a>
        </div>
      </div>
    `;
    messageRoot.className = 'form-message success order-confirmation';
  }

  localStorage.removeItem(accountStorageKey(STORAGE_KEYS.cart));
  localStorage.removeItem(accountStorageKey(STORAGE_KEYS.buyNow));
  updateCounts();
  renderCartPage();
  renderMiniCart();
  renderCheckoutPage();
}

// PRODUCT GALLERY
function resolveGalleryImages(product) {
  if (!product) {
    return [defaultProductImage];
  }

  const gallery = Array.isArray(product.gallery) && product.gallery.length ? product.gallery : [product.image || defaultProductImage];
  return gallery.map((item) => item || defaultProductImage);
}

function createGallery(product) {
  const galleryRoot = document.querySelector('.product-gallery');
  if (!galleryRoot) {
    return;
  }

  const galleryImages = resolveGalleryImages(product);
  const mainImage = galleryRoot.querySelector('img');
  const selected = galleryImages[0] || defaultProductImage;

  if (mainImage) {
    mainImage.src = selected;
    mainImage.alt = product?.name || 'Hiraya product';
    mainImage.dataset.default = selected;
    mainImage.dataset.current = selected;
    mainImage.onerror = () => {
      mainImage.src = defaultProductImage;
    };
  }

  if (galleryImages.length > 1) {
    const thumbs = document.createElement('div');
    thumbs.className = 'gallery-thumbnails';
    thumbs.innerHTML = galleryImages
      .map(
        (image, index) => `
          <button type="button" class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${image}" alt="${product?.name || 'Gallery item'} ${index + 1}" />
          </button>
        `
      )
      .join('');

    const existingThumbs = galleryRoot.querySelector('.gallery-thumbnails');
    if (existingThumbs) {
      existingThumbs.remove();
    }
    galleryRoot.appendChild(thumbs);

    galleryRoot.querySelectorAll('.gallery-thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const index = Number(thumb.dataset.index);
        const currentImage = galleryImages[index] || selected;
        const main = galleryRoot.querySelector('img');
        if (main) {
          main.src = currentImage;
          main.dataset.current = currentImage;
        }
        galleryRoot.querySelectorAll('.gallery-thumb').forEach((item) => item.classList.toggle('active', item === thumb));
      });
    });
  }

  const main = galleryRoot.querySelector('img');
  if (main) {
    main.addEventListener('click', () => openLightbox(galleryImages));
  }
}

function renderVerifiedProductDetails(product) {
  const specs = product?.specifications;
  const root = document.querySelector('#specs');
  if (!root || !specs) return;
  if (product.category === 'Acoustic Guitars' || product.category === 'Electric Guitars' || product.category === 'Bass Guitars') {
    document.body.classList.add('product-guitar-detail');
  }
  root.innerHTML = `<h2>Full Specifications</h2><table class="spec-table"><tbody>${Object.entries({ 'Product name': product.name, 'Category': product.category, ...specs }).map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join('')}</tbody></table>`;
  ['#config', '#inclusions', '#options', '#highlights'].forEach((selector) => document.querySelector(selector)?.remove());
  const meta = document.querySelector('.product-meta');
  const availabilityParagraph = meta && Array.from(meta.querySelectorAll('p')).find((paragraph) => paragraph.querySelector('strong')?.textContent.includes('Availability'));
  const availability = availabilityParagraph?.textContent.replace(/^[^:]+:\s*/, '').trim() || (product.availability ? 'Available' : '');
  if (meta) meta.innerHTML = `<p><strong>Category:</strong> ${product.category}</p>${availability ? `<p><strong>Availability:</strong> ${availability}</p>` : ''}`;
  document.querySelector('.product-subnav')?.querySelectorAll('a[href="#config"], a[href="#inclusions"], a[href="#options"], a[href="#highlights"]').forEach((link) => link.remove());
}

function renderRelatedProducts(currentProduct) {
  const root = document.querySelector('#related .product-list');
  if (!root) return;

  const categoryText = document.querySelector('.product-meta strong')?.parentElement?.textContent
    || document.querySelector('.product-info .eyebrow')?.textContent
    || '';
  const pageCategory = categoryText.replace(/^\s*Category:\s*/i, '').trim();
  const categoryAliases = {
    acoustic: 'Acoustic Guitars',
    'acoustic guitar': 'Acoustic Guitars',
    bass: 'Bass Guitars',
    'bass guitar': 'Bass Guitars',
    keyboard: 'Pianos & Keyboards',
    'pianos & keyboards': 'Pianos & Keyboards'
  };
  const category = currentProduct?.category || categoryAliases[pageCategory.toLowerCase()] || pageCategory;
  const recommendations = products.filter((product) => product.category === category && product.id !== currentProduct?.id);

  root.replaceChildren();
  recommendations.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    image.addEventListener('error', () => {
      if (!image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = 'true';
        image.src = defaultProductImage;
      } else {
        card.remove();
      }
    });
    card.append(image);

    const name = document.createElement('h3');
    name.textContent = product.name;
    card.append(name);

    const description = document.createElement('p');
    const words = (product.description || '').trim().split(/\s+/).filter(Boolean);
    description.textContent = words.length > 24 ? `${words.slice(0, 24).join(' ')}…` : words.join(' ');
    card.append(description);

    const price = getProductPrice(product);
    if (price !== null) {
      const priceNode = document.createElement('p');
      priceNode.className = 'related-product-price';
      priceNode.textContent = currency(price);
      card.append(priceNode);
    }

    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const viewLink = document.createElement('a');
    viewLink.href = product.productPage;
    viewLink.className = 'main-button';
    viewLink.textContent = 'View Product';
    const cartLink = document.createElement('a');
    cartLink.href = 'cart.html';
    cartLink.className = 'main-button';
    cartLink.textContent = 'Add to Cart';
    actions.append(viewLink, cartLink);
    card.append(actions);
    root.append(card);
  });

  addWishlistButtons();
}

function openLightbox(images) {
  const modal = document.getElementById('product-lightbox');
  if (!modal) {
    return;
  }

  let currentIndex = 0;
  const imageNodes = Array.isArray(images) ? images : [images || defaultProductImage];

  const render = () => {
    const mainImage = modal.querySelector('.lightbox-image');
    if (mainImage) {
      mainImage.src = imageNodes[currentIndex] || defaultProductImage;
    }
    const label = modal.querySelector('.lightbox-counter');
    if (label) {
      label.textContent = `${currentIndex + 1} / ${imageNodes.length}`;
    }
  };

  const close = () => modal.classList.remove('open');
  render();
  modal.classList.add('open');

  const closeButton = modal.querySelector('.close-lightbox');
  const previousButton = modal.querySelector('[data-lightbox-prev]');
  const nextButton = modal.querySelector('[data-lightbox-next]');
  if (closeButton) closeButton.onclick = close;
  if (previousButton) previousButton.onclick = () => {
    currentIndex = (currentIndex - 1 + imageNodes.length) % imageNodes.length;
    render();
  };
  if (nextButton) nextButton.onclick = () => {
    currentIndex = (currentIndex + 1) % imageNodes.length;
    render();
  };

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      close();
    }
  });
}

function ensureLightboxMarkup() {
  if (document.getElementById('product-lightbox')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'product-lightbox';
  modal.className = 'lightbox-overlay';
  modal.innerHTML = `
    <div class="lightbox-content">
      <button type="button" class="close-lightbox" aria-label="Close product gallery">Close</button>
      <button type="button" class="lightbox-arrow prev" data-lightbox-prev aria-label="Previous image">‹</button>
      <img class="lightbox-image" src="${defaultProductImage}" alt="Product preview" />
      <button type="button" class="lightbox-arrow next" data-lightbox-next aria-label="Next image">›</button>
      <div class="lightbox-counter">1 / 1</div>
    </div>
  `;

  document.body.appendChild(modal);
}

// SEARCH / FILTERS
// Check whether a product matches the current search and filter choices.
function productMatches(product, query, category, priceRange = 'ALL', card = null) {
  // Normalize search text so capitalization and outer spaces do not matter.
  const normalizedQuery = (query || '').trim().toLowerCase();
  // Search catalog fields and the card's visible copy (which can include a type suffix).
  const cardText = card ? `${card.querySelector('h3')?.textContent || ''} ${card.querySelector('p')?.textContent || ''}` : '';
  const searchableText = `${product.name || ''} ${product.category || ''} ${product.description || ''} ${cardText}`.toLowerCase();
  const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

  // Accept every category for ALL; otherwise require the selected category.
  const normalizeCategory = (value) => (value || '').trim().toUpperCase().replace(/\s+/g, ' ');
  const normalizedCategory = normalizeCategory(category || 'ALL');
  const listingCategory = card?.closest('.products')?.querySelector('h2')?.textContent || product.category;
  const matchesCategory = normalizedCategory === 'ALL' || normalizeCategory(listingCategory) === normalizedCategory;
  // Compare the selected price band with the product's numeric price.
  const numericPrice = getProductPrice(product);
  const normalizedPriceRange = (priceRange || 'ALL').trim().toUpperCase();
  const matchesPrice = normalizedPriceRange === 'ALL' || (Number.isFinite(numericPrice) && ((normalizedPriceRange === 'UNDER-5000' && numericPrice < 5000) || (normalizedPriceRange === '5000-25000' && numericPrice >= 5000 && numericPrice <= 25000) || (normalizedPriceRange === 'OVER-25000' && numericPrice > 25000)));
  // Keep a product only when it passes every active check.
  return matchesQuery && matchesCategory && matchesPrice;
}

// Show matching products and show an empty message when needed.
function applyProductFilter(categoryOverride) {
  const searchInput = document.getElementById('product-search');
  const query = (searchInput ? searchInput.value : '').trim();
  const selectedCategory = categoryOverride || document.querySelector('.filter-button[data-category].active')?.dataset.category || 'ALL';
  const priceRange = (document.getElementById('product-price-filter')?.value || 'ALL').trim().toUpperCase();

  const cards = Array.from(document.querySelectorAll('.products .product-card'));
  const productForCard = (card) => {
    const href = card.querySelector('a[href*="product-"]')?.getAttribute('href') || '';
    const productId = card.dataset.productId || getProductIdFromHref(href);
    const product = productId ? productMap.get(productId) || null : null;
    return product;
  };

  cards.forEach((card) => {
    const product = productForCard(card);
    let shouldShow;
    if (product) {
      shouldShow = productMatches(product, query, selectedCategory, priceRange, card);
    } else {
      // Without catalog data, do not guess at a product's price for filtering.
      const name = card.querySelector('h3')?.textContent.trim() || '';
      const category = card.closest('.products')?.querySelector('h2')?.textContent.trim() || '';
      const description = card.querySelector('p')?.textContent.trim() || '';
      const searchableText = `${name} ${category} ${description}`.toLowerCase();
      const normalizedCategory = (selectedCategory || 'ALL').trim().toUpperCase();
      shouldShow = (!query || searchableText.includes(query.toLowerCase())) &&
        (normalizedCategory === 'ALL' || category.toUpperCase() === normalizedCategory) &&
        priceRange === 'ALL';
    }
    card.style.display = shouldShow ? '' : 'none';
  });

  document.querySelectorAll('.products').forEach((section) => {
    const sectionHasResults = Array.from(section.querySelectorAll('.product-card')).some((card) => card.style.display !== 'none');
    section.style.display = sectionHasResults ? '' : 'none';
  });

  // Count visible cards to decide whether the empty-results message is needed.
  const visibleProducts = cards.filter((card) => card.style.display !== 'none');
  const noProductsNode = document.getElementById('product-empty-state');
  // Explain whether the empty result comes from the search or selected filters.
  if (noProductsNode) {
    noProductsNode.textContent = query ? 'NO PRODUCTS FOUND MATCHING YOUR SEARCH.' : 'NO PRODUCTS MATCH THE SELECTED FILTERS.';
    noProductsNode.style.display = visibleProducts.length ? 'none' : 'block';
  }
}

function addProductFilters() {
  // Add search and filter controls only on pages that show the catalog.
  const productsPage = window.location.pathname.endsWith('products.html') || document.querySelector('#acoustic');
  if (!productsPage) {
    return;
  }

  const existing = document.getElementById('product-search');
  if (existing) {
    return;
  }

  const toolbar = document.createElement('div');
  toolbar.className = 'product-toolbar';
  toolbar.innerHTML = `
    <div class="product-search-wrap">
      <label for="product-search">Search</label>
      <input id="product-search" type="search" placeholder="Search products" />
    </div>
    <div class="product-filter-group">
      <button type="button" class="filter-button active" data-category="ALL">ALL</button>
      <button type="button" class="filter-button" data-category="ACOUSTIC GUITARS">ACOUSTIC GUITARS</button>
      <button type="button" class="filter-button" data-category="ELECTRIC GUITARS">ELECTRIC GUITARS</button>
      <button type="button" class="filter-button" data-category="BASS GUITARS">BASS GUITARS</button>
      <button type="button" class="filter-button" data-category="PIANOS & KEYBOARDS">PIANOS &amp; KEYBOARDS</button>
      <button type="button" class="filter-button" data-category="DRUMS & PERCUSSION">DRUMS &amp; PERCUSSION</button>
      <button type="button" class="filter-button" data-category="ACCESSORIES">ACCESSORIES</button>
      <select id="product-price-filter" class="filter-button" aria-label="Price range"><option value="ALL">ALL PRICES</option><option value="UNDER-5000">UNDER ₱5,000</option><option value="5000-25000">₱5,000–₱25,000</option><option value="OVER-25000">OVER ₱25,000</option></select>
      <button type="button" class="filter-button clear-filter" id="clear-product-filters">CLEAR FILTERS</button>
    </div>
    <div id="product-empty-state" class="empty-state" style="display:none;">NO PRODUCTS FOUND</div>
  `;

  const firstSection = document.querySelector('#acoustic');
  if (firstSection) {
    firstSection.parentNode.insertBefore(toolbar, firstSection);
  }

  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    // Reapply filters each time the user types in the search field.
    // Call without the DOM Event; applyProductFilter's optional argument is a category string.
    searchInput.addEventListener('input', () => applyProductFilter());
  }

  document.querySelectorAll('.filter-button[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button[data-category]').forEach((item) => item.classList.toggle('active', item === button));
      // Mark the chosen category active, then immediately filter the cards.
      applyProductFilter(button.dataset.category);
    });
  });

  // Re-run the same filter logic without passing the DOM Event as a category. ALL PRICES removes the price restriction.
  document.getElementById('product-price-filter')?.addEventListener('change', () => applyProductFilter());
  // Reset controls to their defaults and display the full product list.
  document.getElementById('clear-product-filters')?.addEventListener('click', () => { if (searchInput) searchInput.value = ''; document.querySelectorAll('.filter-button[data-category]').forEach((item) => item.classList.toggle('active', item.dataset.category === 'ALL')); const priceFilter = document.getElementById('product-price-filter'); if (priceFilter) priceFilter.value = 'ALL'; applyProductFilter(); });

  const categoryMap = {
    acoustic: 'ACOUSTIC GUITARS',
    electric: 'ELECTRIC GUITARS',
    bass: 'BASS GUITARS',
    keyboards: 'PIANOS & KEYBOARDS',
    drums: 'DRUMS & PERCUSSION',
    accessories: 'ACCESSORIES'
  };
  const applyCategoryHash = () => {
    const hashKey = window.location.hash.replace('#', '').toLowerCase();
    const activeCategory = categoryMap[hashKey];
    if (!activeCategory) return;
    const searchInput = document.getElementById('product-search');
    const priceFilter = document.getElementById('product-price-filter');
    if (searchInput) searchInput.value = '';
    if (priceFilter) priceFilter.value = 'ALL';
    document.querySelectorAll('.filter-button[data-category]').forEach((button) => {
      button.classList.toggle('active', button.dataset.category === activeCategory);
    });
    applyProductFilter(activeCategory);
    window.requestAnimationFrame(() => {
      const target = document.getElementById(hashKey);
      if (!target || target.style.display === 'none') return;
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    });
  };

  window.addEventListener('hashchange', applyCategoryHash);
  document.querySelectorAll('.category-banners a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!categoryMap[hash.slice(1).toLowerCase()]) return;
      event.preventDefault();
      if (window.location.hash === hash) {
        applyCategoryHash();
      } else {
        window.location.hash = hash;
      }
    });
  });
  if (!categoryMap[window.location.hash.replace('#', '').toLowerCase()]) {
    applyProductFilter();
  } else {
    applyCategoryHash();
  }
}

// FORMS
function showInlineMessage(form, message, type) {
  let node = form.querySelector('.form-message');
  if (!node) {
    node = document.createElement('div');
    node.className = 'form-message';
    form.appendChild(node);
  }

  node.className = `form-message ${type}`;
  node.textContent = message;
}

function setupContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('input[name="name"]')?.value.trim() || '';
    const email = form.querySelector('input[name="email"]')?.value.trim() || '';
    const message = form.querySelector('textarea[name="message"]')?.value.trim() || '';

    if (!name || !email || !message) {
      showInlineMessage(form, 'Please complete all required fields.', 'error');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      showInlineMessage(form, 'Please enter a valid email address.', 'error');
      return;
    }

    showInlineMessage(form, 'Thanks. Your message passed local validation; this demo does not send messages.', 'success');
    form.reset();
  });
}

// Check required fields, email format, and matching passwords before saving the demo account.
function setupSignupForm() {
  const form = document.querySelector('.auth-form');
  // Skip setup unless this page has the sign-up form this handler needs.
  if (!form || !window.location.pathname.endsWith('signup.html')) {
    return;
  }

  form.addEventListener('submit', (event) => {
    // Handle this submit in the page so failed checks can stop account creation.
    event.preventDefault();
    // Read the entered fields, trimming spaces from the name and email.
    const name = form.querySelector('input[name="full-name"]')?.value.trim() || '';
    const email = form.querySelector('input[name="email"]')?.value.trim() || '';
    const password = form.querySelector('input[name="password"]')?.value || '';
    const confirmPassword = form.querySelector('input[name="confirm-password"]')?.value || '';

    // Stop here and show an error if any required field is blank.
    if (!name || !email || !password || !confirmPassword) {
      showInlineMessage(form, 'Please complete all required fields.', 'error');
      return;
    }

    // Check that the address follows a basic name@domain.extension format.
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      showInlineMessage(form, 'Please enter a valid email address.', 'error');
      return;
    }

    // Require both password entries to match exactly.
    if (password !== confirmPassword) {
      showInlineMessage(form, 'Passwords do not match.', 'error');
      return;
    }

    const demoUser = { email: 'demo@hiraya.com', name: 'Demo User' };
    const registeredUsers = getRegisteredAccounts();
    if (email.toLowerCase() === demoUser.email || registeredUsers.some((account) => account.email?.toLowerCase() === email.toLowerCase())) {
      showInlineMessage(form, 'An account with this email already exists. Please log in.', 'error');
      return;
    }

    registeredUsers.push({ name, email, password, accountId: email.toLowerCase() });
    if (!safeSetJSON(STORAGE_KEYS.registeredAccounts, registeredUsers)) {
      showInlineMessage(form, 'Account could not be saved in this browser. Please check browser storage and try again.', 'error');
      return;
    }
    showInlineMessage(form, 'Account created successfully! Please log in to continue. Redirecting…', 'success');
    form.reset();
    window.setTimeout(() => {
      window.location.href = 'login.html?registered=1';
    }, 1200);
  });
}

function getRegisteredAccounts() {
  const savedAccounts = safeParseJSON(STORAGE_KEYS.registeredAccounts, null);
  const legacyAccount = safeParseJSON(STORAGE_KEYS.registeredAccount, null);
  const accounts = Array.isArray(savedAccounts) ? savedAccounts : [];
  if (legacyAccount?.email && !accounts.some((account) => account.email?.toLowerCase() === legacyAccount.email.toLowerCase())) {
    accounts.push(legacyAccount);
  }
  return accounts;
}

function setupLoginForm() {
  const isLoginPage = window.location.pathname.endsWith('login.html');
  const form = isLoginPage ? document.querySelector('.auth-form') : document.querySelector('#login form.account-form');
  if (!form) {
    return;
  }

  if (new URLSearchParams(window.location.search).has('registered')) {
    showInlineMessage(form, 'Account created successfully! Please log in to continue.', 'success');
  }

  const passwordInput = form.querySelector('input[name="password"]');
  const emailInput = form.querySelector('input[name="email"], input[name="login-email"]');
  const passwordToggle = form.querySelector('.password-toggle');
  passwordToggle?.addEventListener('click', () => {
    const showPassword = passwordInput.type === 'password';
    passwordInput.type = showPassword ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
    passwordToggle.setAttribute('aria-pressed', String(showPassword));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput?.value.trim() || '';
    const password = form.querySelector('input[name="password"]')?.value || '';

    if (!email || !password) {
      showInlineMessage(form, 'Please complete both email and password.', 'error');
      return;
    }

    const savedUser = getRegisteredAccounts().find((account) => account.email?.toLowerCase() === email.toLowerCase());
    const demoUser = { email: 'demo@hiraya.com', password: 'hiraya123', name: 'Demo User', accountId: 'demo@hiraya.com' };
    const userToUse = savedUser || (demoUser.email === email.toLowerCase() ? demoUser : null);

    const passwordMatches = userToUse?.password === 'demo-hidden' ? Boolean(password) : password === userToUse?.password;
    if (userToUse && passwordMatches) {
      safeSetJSON(STORAGE_KEYS.user, { name: userToUse.name || 'Member', email: userToUse.email, accountId: userToUse.accountId || userToUse.email.toLowerCase(), password: 'demo-hidden' });
      setupAccountAccess();
      updateCounts();
      renderCartPage();
      renderWishlistPage();
      syncWishlistButtons();
      renderMiniCart();
      showInlineMessage(form, 'Login Successfully!\nWelcome to HIRAYA MUSIKO.', 'success');
      form.querySelector('.form-message').style.whiteSpace = 'pre-line';
      form.reset();
      window.setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
      return;
    }

    showInlineMessage(form, 'Demo login failed. Use the saved account or demo account.', 'error');
  });
}

function bindGlobalActions() {
  document.querySelectorAll('a.main-button').forEach((button) => {
    const text = (button.textContent || '').trim().toUpperCase();
    const pageName = button.getAttribute('href') || '';

    if (text.includes('ADD TO CART')) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const product = getProductDataFromContext(button) || getCurrentProduct();
        if (product) {
          addToCart(product.id, 1);
        }
      });
    }

    if (text.includes('BUY NOW')) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const product = getProductDataFromContext(button) || getCurrentProduct();
        if (product) {
          setBuyNow(product.id);
        }
      });
    }

    if (button.getAttribute('href') === 'checkout.html' && text.includes('PROCEED TO CHECKOUT')) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'checkout.html';
      });
    }

    if (pageName === 'cart.html' && text.includes('VIEW CART')) {
      button.setAttribute('href', 'cart.html');
    }

    const wishlistButton = button.dataset.wishlistToggle;
    if (wishlistButton) {
      button.addEventListener('click', () => toggleWishlist(wishlistButton));
    }
  });

  document.querySelectorAll('button.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.productId));
  });

  document.querySelectorAll('.wishlist-remove').forEach((button) => {
    button.addEventListener('click', () => toggleWishlist(button.dataset.productId));
  });

  document.querySelectorAll('.product-card').forEach((card) => {
    const productId = card.dataset.productId || getProductIdFromHref(card.querySelector('a[href*="product-"]')?.getAttribute('href') || '');
    if (!productId) {
      return;
    }

    card.dataset.productId = productId;
    const actionButtons = card.querySelectorAll('.main-button');
    actionButtons.forEach((button) => {
      button.dataset.productId = productId;
    });
  });
}

function wireWishlistButtons() {
  const wishlistButtons = document.querySelectorAll('[data-wishlist-toggle]');
  wishlistButtons.forEach((button) => {
    button.addEventListener('click', () => {
      toggleWishlist(button.dataset.wishlistToggle);
    });
  });
}

function addWishlistButtons() {
  const currentProduct = getCurrentProduct();
  if (currentProduct) {
    const productActions = document.querySelector('.product-actions');
    if (productActions && !productActions.querySelector('[data-wishlist-toggle]')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'main-button wishlist-toggle';
      button.dataset.productId = currentProduct.id;
      button.dataset.wishlistToggle = currentProduct.id;
      button.textContent = hasProductInWishlist(currentProduct.id) ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST';
      productActions.appendChild(button);
    }
  }

  document.querySelectorAll('.product-card').forEach((card) => {
    const productLink = card.querySelector('a[href*="product-"]');
    if (!productLink) {
      return;
    }

    const productId = card.dataset.productId || getProductIdFromHref(productLink.getAttribute('href'));
    if (!productId || card.querySelector('[data-wishlist-toggle]')) {
      return;
    }

    const wishlistButton = document.createElement('button');
    wishlistButton.type = 'button';
    wishlistButton.className = 'main-button wishlist-toggle';
    wishlistButton.dataset.wishlistToggle = productId;
    wishlistButton.textContent = hasProductInWishlist(productId) ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST';
    const cardActions = card.querySelector('.card-actions');
    if (cardActions) {
      cardActions.appendChild(wishlistButton);
    }
  });

  wireWishlistButtons();
  syncWishlistButtons();
}

function addAnnouncementBar() {
  if (document.querySelector('.top-announcement-bar')) {
    return;
  }

  const bar = document.createElement('div');
  bar.className = 'top-announcement-bar';
  bar.setAttribute('aria-label', 'Site announcement');
  const content = document.createElement('div');
  content.className = 'announcement-track';
  content.innerHTML = `
    <span>CRAFTED IN THE PHILIPPINES</span>
    <span>•</span>
    <span>FILIPINO-MADE MUSICAL INSTRUMENTS</span>
    <span>•</span>
    <span>HIRAYA MUSIKO</span>
    <span>•</span>
    <span>BUILT FOR SOUND</span>
    <span>•</span>
    <span>CRAFTED IN THE PHILIPPINES</span>
    <span>•</span>
    <span>FILIPINO-MADE MUSICAL INSTRUMENTS</span>
    <span>•</span>
    <span>HIRAYA MUSIKO</span>
    <span>•</span>
    <span>BUILT FOR SOUND</span>
  `;
  bar.appendChild(content);
  document.body.insertBefore(bar, document.body.firstChild);
}

// CONTINUOUS SCROLLING STRIP
function setupContinuousStrip() {
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    return;
  }

  if (document.querySelector('.loop-strip')) {
    return;
  }

  const strip = document.createElement('section');
  strip.className = 'loop-strip';
  strip.setAttribute('aria-label', 'Hiraya Musiko product categories');

  const track = document.createElement('div');
  track.className = 'loop-track';

  const items = [
    'ACOUSTIC GUITARS',
    '•',
    'ELECTRIC GUITARS',
    '\u2022',
    'BASS GUITARS',
    '•',
    'PIANOS & KEYBOARDS',
    '•',
    'DRUMS & PERCUSSION',
    '•',
    'ACCESSORIES',
    '•',
    'HIRAYA MUSIKO',
    '•',
    'CRAFTED IN THE PHILIPPINES',
    '•'
  ];

  const repeated = [...items, ...items, ...items, ...items].map((item, index) => {
    const chip = document.createElement('span');
    chip.className = 'loop-item';
    chip.textContent = item;
    chip.setAttribute('aria-hidden', index >= items.length ? 'true' : 'false');
    return chip;
  });

  repeated.forEach((item) => track.appendChild(item));
  strip.appendChild(track);

  const featuredSection = document.querySelector('#products');
  if (document.querySelector('#brand-statement')) {
    document.querySelector('#brand-statement').insertAdjacentElement('afterend', strip);
  } else if (featuredSection) {
    featuredSection.insertAdjacentElement('afterend', strip);
  } else {
    const main = document.querySelector('main');
    if (main) {
      main.appendChild(strip);
    }
  }

  strip.addEventListener('mouseenter', () => {
    strip.classList.add('paused');
  });

  strip.addEventListener('mouseleave', () => {
    strip.classList.remove('paused');
  });
}

function setupPremiumMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  const parallaxItems = [...document.querySelectorAll('.about-page .about-parallax-media')]
    .map((item) => ({ item, image: item.querySelector('img'), currentX: null, currentY: null }));
  if (!parallaxItems.length) {
    return;
  }

  let animationFrame = 0;
  let previousFrameTime = 0;
  const updateParallax = (timestamp) => {
    const viewportHeight = window.innerHeight;
    const isMobile = window.matchMedia('(max-width: 680px)').matches;
    const movementY = isMobile ? 44 : 64;
    const movementX = isMobile ? 8 : 12;
    const frameDelta = previousFrameTime ? Math.min(timestamp - previousFrameTime, 50) : 16.67;
    const interpolation = 1 - Math.exp(-frameDelta / 90);
    let stillMoving = false;

    parallaxItems.forEach((state) => {
      const { item, image } = state;
      const section = item.closest('.about-parallax-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      const easedProgress = progress * progress * (3 - 2 * progress);
      const targetY = (easedProgress - 0.5) * movementY;
      const targetX = (0.5 - easedProgress) * movementX;

      if (state.currentX === null) state.currentX = targetX;
      if (state.currentY === null) state.currentY = targetY;
      state.currentX += (targetX - state.currentX) * interpolation;
      state.currentY += (targetY - state.currentY) * interpolation;

      item.style.setProperty('--about-image-x', `${state.currentX}px`);
      if (image) {
        image.style.setProperty('--about-image-y', `${state.currentY}px`);
      }

      if (Math.abs(targetX - state.currentX) > 0.05 || Math.abs(targetY - state.currentY) > 0.05) {
        stillMoving = true;
      }
    });

    previousFrameTime = timestamp;
    if (stillMoving) {
      animationFrame = window.requestAnimationFrame(updateParallax);
    } else {
      animationFrame = 0;
      previousFrameTime = 0;
    }
  };

  const scheduleUpdate = () => {
    if (animationFrame) return;
    animationFrame = window.requestAnimationFrame(updateParallax);
  };

  scheduleUpdate();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
}

// IMAGE FADE TRANSITIONS
function applyGalleryFade() {
  const galleryMain = document.querySelector('.product-gallery img');
  if (!galleryMain) {
    return;
  }

  galleryMain.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
  galleryMain.style.opacity = '1';

  const mainImage = document.querySelector('.product-gallery img');
  if (!mainImage) {
    return;
  }

  const originalSrc = mainImage.getAttribute('src');
  const setImage = (src) => {
    mainImage.style.opacity = '0';
    mainImage.style.transform = 'scale(0.985)';
    window.setTimeout(() => {
      mainImage.setAttribute('src', src);
      mainImage.style.opacity = '1';
      mainImage.style.transform = 'scale(1)';
    }, 180);
  };

  mainImage.dataset.originalSrc = originalSrc || '';
  mainImage.setAttribute('data-fade-setter', 'true');

  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const nextSrc = thumb.querySelector('img')?.getAttribute('src');
      if (nextSrc) {
        setImage(nextSrc);
      }
    });
  });
}

function ensureHeaderCartLinks() {
  updateCounts();
}
function setupCheckoutButton() {
  const checkoutButton = document.querySelector('.checkout-form button.main-button, .order-summary .main-button, a.main-button[href="#"]');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      placeOrder();
    });
  }

  const submitButton = document.querySelector('button[type="submit"].main-button');
  if (submitButton && window.location.pathname.endsWith('checkout.html')) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      placeOrder();
    });
  }
}

function setupCheckoutAddresses() {
  const select = document.getElementById('checkout-address-select');
  if (!select) return;
  getAddresses().forEach((address) => {
    const option = document.createElement('option');
    option.value = address.id;
    option.textContent = `${address.fullName} — ${address.city}, ${address.province}${address.default ? ' (Default)' : ''}`;
    select.appendChild(option);
  });
  select.addEventListener('change', () => {
    const address = getAddresses().find((item) => item.id === select.value);
    if (!address) return;
    const form = document.querySelector('.checkout-form');
    if (!form) return;
    form.elements.fullname.value = address.fullName || '';
    form.elements.phone.value = address.phone || '';
    form.elements.address.value = address.address || '';
    form.elements.city.value = address.city || '';
    form.elements.province.value = address.province || '';
    form.elements['postal-code'].value = address.postalCode || '';
  });
}

function setupFallbackImages() {
  document.querySelectorAll('img').forEach((image) => {
    image.onerror = () => {
      image.src = defaultProductImage;
    };
  });
}

function renderAccountPage() {
  const root = document.querySelector('.account-page');
  if (!root) return;
  const profile = getProfile();
  const orders = getOrders();
  const wishlist = getWishlist();
  const cart = getCart();
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    ['name', 'email', 'phone', 'address'].forEach((name) => {
      const input = profileForm.elements[name];
      if (input) input.value = profile[name] || '';
    });
  }
  const welcome = document.getElementById('account-welcome');
  const accountName = document.getElementById('account-name');
  if (welcome) welcome.textContent = `Welcome, ${profile.name || 'Member'}`;
  if (accountName) accountName.textContent = `Welcome, ${profile.name || 'Member'}`;
  document.getElementById('account-order-count')?.replaceChildren(document.createTextNode(String(orders.length)));
  document.getElementById('account-wishlist-count')?.replaceChildren(document.createTextNode(String(wishlist.length)));
  document.getElementById('account-cart-count')?.replaceChildren(document.createTextNode(String(cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0))));

  const ordersRoot = document.getElementById('account-orders');
  if (ordersRoot) {
    ordersRoot.innerHTML = orders.length ? orders.map((order) => `
      <article class="account-order-card">
        <div><strong>${order.id}</strong><p>${new Date(order.date).toLocaleDateString()} · ${order.items.length} item(s) · ${currency(order.total)}</p><p>${order.status}</p></div>
        <div class="account-order-actions"><button type="button" class="main-button" data-view-order="${order.id}">VIEW ORDER</button></div>
      </article>`).join('') : '<div class="empty-state">No orders yet. Your completed demo orders will appear here.</div>';
  }

  const wishlistRoot = document.getElementById('account-wishlist');
  if (wishlistRoot) wishlistRoot.innerHTML = wishlist.length ? wishlist.slice(0, 4).map((item) => `<div class="account-mini-item"><div><strong>${item.name}</strong><p>${currency(item.price)}</p></div><a class="main-button" href="${productMap.get(item.id)?.productPage || 'products.html'}">VIEW</a></div>`).join('') : '<div class="empty-state">Your wishlist is empty. <a href="products.html">Explore Products</a></div>';

  const cartRoot = document.getElementById('account-cart-summary');
  if (cartRoot) {
    const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0);
    cartRoot.innerHTML = `<strong>${cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0)} item(s)</strong><span>${currency(subtotal)}</span>`;
  }

  renderAccountAddresses();
  renderAccountNotifications();
}

function renderAccountAddresses() {
  const root = document.getElementById('account-addresses');
  if (!root) return;
  const addresses = getAddresses();
  root.innerHTML = addresses.length ? addresses.map((address) => `<article class="account-address-card"><div><strong>${address.fullName}${address.default ? ' · Default' : ''}</strong><p>${address.address}, ${address.city}, ${address.province} ${address.postalCode}</p><p>${address.phone}</p></div><div class="account-address-actions"><button class="main-button" type="button" data-address-edit="${address.id}">EDIT</button><button class="main-button" type="button" data-address-delete="${address.id}">DELETE</button><button class="main-button" type="button" data-address-default="${address.id}">MAKE DEFAULT</button></div></article>`).join('') : '<div class="empty-state">No saved shipping addresses yet.</div>';
}

function renderAccountNotifications() {
  const root = document.getElementById('account-notifications');
  if (!root) return;
  const notifications = safeParseJSON(accountStorageKey(STORAGE_KEYS.notifications), []);
  root.innerHTML = notifications.length ? `<div class="account-section-heading"><strong>Notifications</strong><button type="button" class="main-button" data-notifications-read>MARK ALL READ</button></div>${notifications.slice(0, 5).map((item) => `<div class="account-notification ${item.read ? '' : 'unread'}"><strong>${item.text}</strong><p>${new Date(item.date).toLocaleDateString()}</p><button type="button" data-notification-read="${item.id}">${item.read ? 'Read' : 'Mark as read'}</button></div>`).join('')}` : '';
}

function showAccountMessage(message, type = 'success') {
  const node = document.getElementById('account-message');
  if (node) { node.textContent = message; node.className = `form-message ${type}`; }
}

function getPasswordRecord(email, accountId) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedAccountId = String(accountId || '').trim().toLowerCase();
  const accounts = getRegisteredAccounts();
  const storedAccount = accounts.find((account) => account.email?.toLowerCase() === normalizedEmail || (normalizedAccountId && account.accountId?.toLowerCase() === normalizedAccountId));
  if (storedAccount) return { accounts, account: storedAccount };
  if (normalizedEmail === 'demo@hiraya.com') {
    return { accounts, account: { email: 'demo@hiraya.com', name: 'Demo User', accountId: 'demo@hiraya.com', password: 'hiraya123' } };
  }
  return { accounts, account: null };
}

function closePasswordForm() {
  const form = document.getElementById('change-password-form');
  if (!form) return;
  resetPasswordForm(form);
  form.hidden = true;
  const message = document.getElementById('account-message');
  if (message) { message.textContent = ''; message.className = 'form-message'; }
}

function resetPasswordForm(form) {
  form.reset();
  form.querySelectorAll('.password-field').forEach((field) => {
    const input = field.querySelector('input');
    const toggle = field.querySelector('.password-toggle');
    if (input) input.type = 'password';
    if (toggle) {
      toggle.textContent = 'Show';
      toggle.setAttribute('aria-pressed', 'false');
      toggle.setAttribute('aria-label', `Show ${input?.name.replaceAll('-', ' ') || 'password'}`);
    }
  });
}

function updateAccountPassword(form) {
  const currentPassword = form.elements['current-password'].value;
  const newPassword = form.elements['new-password'].value;
  const confirmPassword = form.elements['confirm-password'].value;
  if (!currentPassword || !newPassword || !confirmPassword) {
    showAccountMessage('Please complete all password fields.', 'error');
    return;
  }
  const user = safeParseJSON(STORAGE_KEYS.user, null);
  const { accounts, account } = getPasswordRecord(user?.email, user?.accountId);
  if (!account || account.password !== currentPassword) {
    showAccountMessage('Current password is incorrect.', 'error');
    return;
  }
  if (newPassword !== confirmPassword) {
    showAccountMessage('New password and confirmation do not match.', 'error');
    return;
  }
  if (newPassword === currentPassword) {
    showAccountMessage('Choose a new password different from your current password.', 'error');
    return;
  }

  const accountIndex = accounts.findIndex((entry) => entry.email?.toLowerCase() === account.email.toLowerCase());
  const updatedAccount = { ...account, password: newPassword };
  if (accountIndex >= 0) accounts[accountIndex] = updatedAccount;
  else accounts.push(updatedAccount);
  if (!safeSetJSON(STORAGE_KEYS.registeredAccounts, accounts)) {
    showAccountMessage('Password could not be saved in this browser. Please try again.', 'error');
    return;
  }
  closePasswordForm();
  showAccountMessage('Password updated successfully. Use your new password the next time you log in.');
}

function showOrderDetails(orderId) {
  const order = getOrders().find((item) => item.id === orderId);
  const host = document.getElementById('order-detail-host');
  if (!order || !host) return;
  host.replaceChildren();
  const panel = document.createElement('section');
  panel.id = 'order-detail-panel';
  panel.className = 'content-box order-detail-panel';
  const heading = document.createElement('div');
  heading.className = 'account-section-heading order-detail-heading';
  const title = document.createElement('div');
  title.innerHTML = '<p class="section-tag">Order details</p><h2></h2>';
  title.querySelector('h2').textContent = order.id || 'Order';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'main-button';
  close.dataset.closeOrder = '';
  close.textContent = 'Close';
  close.setAttribute('aria-label', 'Close order details');
  heading.append(title, close);
  panel.append(heading);

  const date = document.createElement('p');
  date.className = 'order-detail-meta';
  const parsedDate = order.date ? new Date(order.date) : null;
  date.textContent = `Order date: ${parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toLocaleDateString() : 'Not available'} | Status: ${order.status || 'Not available'}`;
  panel.append(date);

  const customer = order.customer || {};
  const address = [customer.address, customer.city, customer.province, customer.postalCode].filter(Boolean).join(', ');
  const customerDetails = [
    ['Payment method', order.paymentMethod ? ({ cod: 'Cash on Delivery', gcash: 'GCash', maya: 'Maya', bank: 'Bank Transfer', card: 'Credit / Debit Card' }[String(order.paymentMethod).toLowerCase()] || String(order.paymentMethod)) : ''],
    ['Customer', customer.name], ['Email', customer.email], ['Phone', customer.phone], ['Delivery address', address]
  ].filter(([, value]) => value);
  if (customerDetails.length) {
    const details = document.createElement('dl');
    details.className = 'order-customer-details';
    customerDetails.forEach(([label, value]) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const description = document.createElement('dd');
      term.textContent = label;
      description.textContent = value;
      row.append(term, description);
      details.append(row);
    });
    panel.append(details);
  }

  const itemsRoot = document.createElement('div');
  itemsRoot.className = 'order-detail-items';
  let subtotal = 0;
  (Array.isArray(order.items) ? order.items : []).forEach((item) => {
    const quantity = Number(item.quantity) || 1;
    const price = Number(item.price) || 0;
    const lineTotal = price * quantity;
    subtotal += lineTotal;
    const row = document.createElement('article');
    row.className = 'order-detail-item';
    const image = document.createElement('img');
    image.src = item.image || defaultProductImage;
    image.alt = item.name ? `${item.name} product image` : 'Product image';
    image.onerror = () => { image.src = defaultProductImage; };
    const copy = document.createElement('div');
    copy.className = 'order-detail-item-copy';
    const name = document.createElement('strong');
    name.textContent = item.name || 'Product';
    const quantityPrice = document.createElement('p');
    quantityPrice.textContent = `${quantity} x ${currency(price)} each`;
    const amount = document.createElement('strong');
    amount.textContent = currency(lineTotal);
    copy.append(name, quantityPrice);
    row.append(image, copy, amount);
    itemsRoot.append(row);
  });
  panel.append(itemsRoot);

  const summary = document.createElement('div');
  summary.className = 'order-detail-summary';
  const addAmount = (label, value, emphasize = false) => {
    const row = document.createElement('p');
    const labelNode = document.createElement(emphasize ? 'strong' : 'span');
    const amountNode = document.createElement(emphasize ? 'strong' : 'span');
    labelNode.textContent = label;
    amountNode.textContent = currency(value);
    row.append(labelNode, amountNode);
    summary.append(row);
  };
  const shipping = Number(order.shippingFee ?? order.shipping);
  addAmount('Subtotal', subtotal);
  if (Number.isFinite(shipping)) addAmount('Shipping', shipping);
  addAmount('Total', Number(order.total) || subtotal + (Number.isFinite(shipping) ? shipping : 0), true);
  panel.append(summary);
  host.append(panel);
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


// Send signed-in users to their account and show guests the login and sign-up options.
function setupAccountAccess() {
  const user = safeParseJSON(STORAGE_KEYS.user, null);
  // The saved email is used to decide whether a user is logged in.
  const isLoggedIn = Boolean(user?.email);
  document.querySelectorAll('[data-guest-only]').forEach((section) => {
    section.hidden = isLoggedIn;
  });
  document.querySelectorAll('.header-icon-link[aria-label="Account"]').forEach((link) => {
    // Point the account icon to the account page or login page as appropriate.
    link.href = isLoggedIn ? 'account.html' : 'login.html';
    link.setAttribute('aria-expanded', 'false');

    if (link.dataset.accountPromptReady) return;
    link.dataset.accountPromptReady = 'true';
    link.addEventListener('click', (event) => {
      // Let signed-in users follow the account link; guests get the prompt instead.
      if (safeParseJSON(STORAGE_KEYS.user, null)?.email) return;
      event.preventDefault();
      toggleAccountPrompt(link);
    });
  });
  // Hide login and sign-up links from users who are already signed in.
  document.querySelectorAll('.main-nav a[href="signup.html"], .main-nav a[href="login.html"]').forEach((link) => {
    link.hidden = isLoggedIn;
    link.style.display = isLoggedIn ? 'none' : '';
  });

  if (!document.documentElement.dataset.accountPromptReady) {
    document.documentElement.dataset.accountPromptReady = 'true';
    document.addEventListener('pointerdown', (event) => {
      const prompt = document.querySelector('.account-prompt');
      const trigger = document.querySelector('.header-icon-link[aria-label="Account"]');
      // Close the prompt when a pointer press happens outside it and its trigger.
      if (prompt && !prompt.hidden && !prompt.contains(event.target) && !trigger?.contains(event.target)) {
        closeAccountPrompt(trigger, prompt);
      }
    });
    document.addEventListener('keydown', (event) => {
      // Escape closes the prompt even when focus is elsewhere on the page.
      if (event.key !== 'Escape') return;
      closeAccountPrompt(document.querySelector('.header-icon-link[aria-label="Account"]'), document.querySelector('.account-prompt'));
    });
  }

  const accountPage = document.querySelector('.account-page');
  // Other pages need no account-page login check.
  if (!accountPage) return true;
  // Guests trying to view account content are redirected to the login page.
  if (!isLoggedIn) {
    window.location.replace('login.html');
    return false;
  }
  accountPage.hidden = false;
  return true;
}

function toggleAccountPrompt(trigger) {
  const prompt = document.querySelector('.account-prompt');
  // Clicking the trigger again closes a prompt that is already open.
  if (prompt && !prompt.hidden) {
    closeAccountPrompt(trigger, prompt);
    return;
  }

  openAccountPrompt(trigger);
}

function openAccountPrompt(trigger, existingPrompt) {
  if (!trigger || isUserLoggedIn()) return;
  let prompt = existingPrompt || document.querySelector('.account-prompt');
  // Create the same account prompt used by the header icon if it does not exist yet.
  if (!prompt) {
    prompt = document.createElement('div');
    prompt.className = 'account-prompt';
    prompt.setAttribute('role', 'dialog');
    prompt.setAttribute('aria-label', 'My Account');
    prompt.innerHTML = '<strong>MY ACCOUNT</strong><p>Please log in to your account first.</p><p>Don\'t have an account yet? Create one to continue.</p><div class="account-prompt-actions"><a href="login.html">LOGIN</a><a href="signup.html">SIGN UP</a></div>';
    document.body.appendChild(prompt);
  }

  // Show the prompt and position it beside the account icon.
  prompt.hidden = false;
  const rect = trigger.getBoundingClientRect();
  const promptRect = prompt.getBoundingClientRect();
  prompt.style.left = `${Math.max(12, Math.min(rect.right - promptRect.width, window.innerWidth - promptRect.width - 12))}px`;
  prompt.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - promptRect.height - 12)}px`;
  trigger.setAttribute('aria-expanded', 'true');
}

function closeAccountPrompt(trigger, prompt) {
  // Hide the prompt and reset the trigger state when it closes.
  if (prompt) prompt.hidden = true;
  trigger?.setAttribute('aria-expanded', 'false');
}

function setupAccountPage() {
  if (!document.querySelector('.account-page') || !safeParseJSON(STORAGE_KEYS.user, null)?.email) return;
  renderAccountPage();
  document.querySelector('[data-account-edit]')?.addEventListener('click', () => {
    const nameField = document.querySelector('#profile-form input[name="name"]');
    nameField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nameField?.focus({ preventScroll: true });
  });
  document.getElementById('profile-form')?.addEventListener('submit', (event) => { event.preventDefault(); const form = event.currentTarget; saveProfile({ ...getProfile(), name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value.trim(), address: form.elements.address.value.trim() }); renderAccountPage(); showAccountMessage('Profile saved.'); });
  document.querySelector('[data-account-logout]')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(accountStorageKey(STORAGE_KEYS.cart));
    localStorage.removeItem(accountStorageKey(STORAGE_KEYS.wishlist));
    setupAccountAccess();
    updateCounts();
    renderCartPage();
    renderWishlistPage();
    syncWishlistButtons();
    renderMiniCart();
    renderAccountPage();
    window.location.href = 'index.html';
  });
  const passwordForm = document.getElementById('change-password-form');
  document.querySelector('[data-change-password]')?.addEventListener('click', () => {
    if (!passwordForm) return;
    resetPasswordForm(passwordForm);
    passwordForm.hidden = false;
    passwordForm.elements['current-password'].focus();
  });
  passwordForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    updateAccountPassword(passwordForm);
  });
  passwordForm?.querySelectorAll('.password-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const input = toggle.closest('.password-field')?.querySelector('input');
      if (!input) return;
      const visible = input.type === 'password';
      input.type = visible ? 'text' : 'password';
      toggle.textContent = visible ? 'Hide' : 'Show';
      toggle.setAttribute('aria-label', `${visible ? 'Hide' : 'Show'} ${input.name.replaceAll('-', ' ')}`);
      toggle.setAttribute('aria-pressed', String(visible));
    });
  });
  passwordForm?.querySelector('[data-cancel-password]')?.addEventListener('click', closePasswordForm);
  document.querySelector('[data-address-add]')?.addEventListener('click', () => { const form = document.getElementById('address-form'); if (form) { form.hidden = false; form.reset(); form.elements.id.value = ''; } });
  document.querySelector('[data-address-cancel]')?.addEventListener('click', () => { document.getElementById('address-form').hidden = true; });
  document.getElementById('address-form')?.addEventListener('submit', (event) => { event.preventDefault(); const form = event.currentTarget; const id = form.elements.id.value || `addr-${Date.now()}`; let addresses = getAddresses().filter((item) => item.id !== id); const address = { id, fullName: form.elements.fullName.value, phone: form.elements.phone.value, address: form.elements.address.value, city: form.elements.city.value, province: form.elements.province.value, postalCode: form.elements.postalCode.value, default: form.elements.default.checked }; if (address.default) addresses = addresses.map((item) => ({ ...item, default: false })); addresses.push(address); saveAddresses(addresses); form.hidden = true; renderAccountPage(); });
  document.addEventListener('click', (event) => { const target = event.target.closest('[data-view-order],[data-close-order],[data-address-delete],[data-address-default],[data-address-edit],[data-notification-read],[data-notifications-read]'); if (!target) return; if (target.dataset.viewOrder) showOrderDetails(target.dataset.viewOrder); if (target.dataset.closeOrder !== undefined) document.getElementById('order-detail-panel')?.remove(); if (target.dataset.addressDelete) { saveAddresses(getAddresses().filter((item) => item.id !== target.dataset.addressDelete)); renderAccountPage(); } if (target.dataset.addressDefault) { saveAddresses(getAddresses().map((item) => ({ ...item, default: item.id === target.dataset.addressDefault }))); renderAccountPage(); } if (target.dataset.addressEdit) { const address = getAddresses().find((item) => item.id === target.dataset.addressEdit); const form = document.getElementById('address-form'); if (address && form) { Object.keys(address).forEach((key) => { if (form.elements[key]) form.elements[key].value = address[key]; }); form.elements.default.checked = !!address.default; form.hidden = false; } } if (target.dataset.notificationRead) { const next = safeParseJSON(accountStorageKey(STORAGE_KEYS.notifications), []).map((item) => item.id === target.dataset.notificationRead ? { ...item, read: true } : item); safeSetJSON(accountStorageKey(STORAGE_KEYS.notifications), next); renderAccountNotifications(); } if (target.dataset.notificationsRead) { safeSetJSON(accountStorageKey(STORAGE_KEYS.notifications), safeParseJSON(accountStorageKey(STORAGE_KEYS.notifications), []).map((item) => ({ ...item, read: true }))); renderAccountNotifications(); } });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') document.getElementById('order-detail-panel')?.remove();
  });
}

function setupDiscoveryEnhancements() {
  if (!document.querySelector('#acoustic')) return;
  const recent = getRecentlyViewed(); if (recent.length && !document.querySelector('.recent-products')) { const section = document.createElement('section'); section.className = 'recent-products'; section.innerHTML = `<p class="section-tag">Recently Viewed</p><div class="product-list">${recent.map((item) => `<article class="product-card"><img src="${item.image}" alt="${item.name}"><h3>${item.name}</h3><p>${item.description}</p><div class="card-actions"><a class="main-button" href="${item.productPage}">View Product</a></div></article>`).join('')}</div><button type="button" class="filter-button clear-filter" data-clear-recent>Clear History</button>`; document.querySelector('.feature-panel .container')?.appendChild(section); section.querySelector('[data-clear-recent]')?.addEventListener('click', () => { safeSetJSON(STORAGE_KEYS.recent, []); section.remove(); }); }
}

function setupFAQSearch() { if (!window.location.pathname.endsWith('faq.html')) return; const container = document.querySelector('.feature-panel .container'); if (!container || document.getElementById('faq-search')) return; const input = document.createElement('input'); input.id = 'faq-search'; input.className = 'product-search'; input.placeholder = 'Search questions and answers'; container.prepend(input); input.addEventListener('input', () => { const q = input.value.toLowerCase(); container.querySelectorAll('.feature-item, details').forEach((item) => { item.hidden = !!q && !item.textContent.toLowerCase().includes(q); }); }); }

function setupReviewForm() { if (!window.location.pathname.endsWith('reviews.html')) return; const panel = document.querySelector('.info-panel'); if (!panel || document.getElementById('review-form')) return; const box = document.createElement('div'); box.className = 'content-box'; box.innerHTML = '<p class="section-tag">Demo review</p><h2>Share your experience</h2><form id="review-form" class="account-form"><label>Name<input name="name" required></label><label>Rating<select name="rating"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label><label>Review<textarea name="text" required></textarea></label><button class="main-button" type="submit">Save Demo Review</button></form>'; panel.querySelector('.container')?.appendChild(box); box.querySelector('form').addEventListener('submit', (event) => { event.preventDefault(); const form = event.currentTarget; const reviews = safeParseJSON(STORAGE_KEYS.reviews, []); reviews.unshift({ name: form.elements.name.value, rating: form.elements.rating.value, text: form.elements.text.value, date: new Date().toISOString() }); safeSetJSON(STORAGE_KEYS.reviews, reviews.slice(0, 20)); showInlineMessage(form, 'Demo review saved locally.', 'success'); form.reset(); }); }

function setupNewsletterForms() { document.querySelectorAll('input[name="newsletter-email"]').forEach((input) => { const form = input.closest('form'); if (!form || form.dataset.ready) return; form.dataset.ready = 'true'; form.addEventListener('submit', (event) => { event.preventDefault(); const email = input.value.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showInlineMessage(form, 'Please enter a valid email address.', 'error'); return; } safeSetJSON(STORAGE_KEYS.newsletter, { email, date: new Date().toISOString() }); showInlineMessage(form, 'Demo subscription saved locally.', 'success'); form.reset(); }); }); }

// Set up the shared page features and render content when the page is ready.
function initApp() {
  if (!setupAccountAccess()) return;

  if (!document.documentElement.dataset.accountStorageReady) {
    document.documentElement.dataset.accountStorageReady = 'true';
    window.addEventListener('storage', (event) => {
      if (event.key !== STORAGE_KEYS.user) return;
      if (!setupAccountAccess()) return;
      updateCounts();
      renderCartPage();
      renderWishlistPage();
      syncWishlistButtons();
      renderMiniCart();
      if (document.querySelector('.account-page')) renderAccountPage();
    });
  }

  if (!document.documentElement.dataset.protectedPageReady) {
    document.documentElement.dataset.protectedPageReady = 'true';
    window.addEventListener('pageshow', () => {
      const pagePath = window.location.pathname;
      if (pagePath.endsWith('cart.html')) {
        setupAccountAccess();
        renderCartPage();
      } else if (pagePath.endsWith('wishlist.html')) {
        setupAccountAccess();
        renderWishlistPage();
      }
    });
  }

  if (!document.getElementById('cart-confirmation')) {
    const toast = document.createElement('div');
    toast.id = 'cart-confirmation';
    toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
  }

  addAnnouncementBar();
  ensureHeaderCartLinks();
  setupContinuousStrip();
  setupPremiumMotion();
  applyGalleryFade();
  updateCounts();
  renderMiniCart();
  renderWishlistPage();
  renderCartPage();
  renderCheckoutPage();
  addProductFilters();
  bindGlobalActions();
  addWishlistButtons();
  setupDiscoveryEnhancements();
  setupCheckoutButton();
  setupCheckoutAddresses();
  setupContactForm();
  setupSignupForm();
  setupLoginForm();
  setupAccountPage();
  setupFAQSearch();
  setupReviewForm();
  setupNewsletterForms();
  setupFallbackImages();
  ensureLightboxMarkup();

  const product = getCurrentProduct();
  if (product) {
    recordRecentlyViewed(product);
    createGallery(product);
    renderVerifiedProductDetails(product);
    const priceNode = document.querySelector('.product-info .price');
    const numericPrice = getProductPrice(product);
    if (priceNode && numericPrice !== null) {
      priceNode.textContent = currency(numericPrice);
    }
    const titleNode = document.querySelector('.product-info h1');
    if (titleNode) {
      titleNode.textContent = product.name.toUpperCase();
    }
    const shortDesc = document.querySelector('.short-desc');
    if (shortDesc) {
      shortDesc.textContent = product.description;
    }
  }
  if (document.querySelector('#related .product-list')) {
    renderRelatedProducts(product);
  }

  const cartBackdrop = document.createElement('div');
  cartBackdrop.id = 'mini-cart-backdrop';
  cartBackdrop.className = 'mini-cart-backdrop';
  document.body.appendChild(cartBackdrop);

  const cartPanel = document.createElement('aside');
  cartPanel.id = 'mini-cart-panel';
  cartPanel.className = 'mini-cart-panel';
  document.body.appendChild(cartPanel);

  const closeButton = cartPanel.querySelector('.close-mini-cart');
  if (closeButton) {
    closeButton.addEventListener('click', closeSideCart);
  }

  cartBackdrop.addEventListener('click', closeSideCart);

  renderMiniCart();

  const hideCartIfEmbedded = window.location.pathname.endsWith('cart.html') || window.location.pathname.endsWith('checkout.html');
  if (hideCartIfEmbedded) {
    closeSideCart();
  }
}

document.addEventListener('DOMContentLoaded', initApp);
