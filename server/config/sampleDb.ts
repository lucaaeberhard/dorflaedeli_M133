// Sample data
export const products = new Map<string, any>();

products.set('1', {
  id: '1',
  title: 'Appenzeller Classic',
  description: 'Schweizer Halbhartkäse und  vollfett. aus Rohmilch',
  price: 3.45,
  thumbnail: './assets/appenzeller.jpg',
  rating: 5,
  category: '2',
});

products.set('2', {
  id: '2',
  title: 'Eier',
  description: '9 Schweizer Eier aus Frilandhaltung',
  price: 5.40,
  thumbnail: './assets/eier.jpg',
  rating: 5,
  category: '2',
});

products.set('3', {
  id: '3',
  title: 'Iced Green Tea',
  description: 'AriZona Green Tea - Grünteegrtränk',
  price: 10.80,
  thumbnail: './assets/icedtea.jpg',
  rating: 5,
  category: '1',
});

products.set('4', {
  id: '4',
  title: 'Kalbs-Bratwuerste',
  description: 'Terra Suisse Kalbs-Bratwurst 3x2 Stück',
  price: 16.50,
  thumbnail: './assets/kalbsbratwuerste.jpg',
  rating: 5,
  category: '2',
});

products.set('5', {
  id: '5',
  title: 'Krustenkranz',
  description: 'Terra Suisse',
  price: 2.30,
  thumbnail: './assets/krustenkranz.jpg',
  rating: 5,
  category: '2',
});

products.set('6', {
  id: '6',
  title: 'Nektarinen gelb',
  description: 'Herkunft: Spanien',
  price: 5.20,
  thumbnail: './assets/nektarinen.jpg',
  rating: 5,
  category: '2',
});

products.set('7', {
  id: '7',
  title: 'Olivenoel',
  description: 'Bertolli Olivenöl extra vergine originale',
  price: 17.95,
  thumbnail: '../assets/olivenoel.jpg',
  rating: 5,
  category: '1',
});

products.set('8', {
  id: '8',
  title: 'Senf',
  description: 'Senf mild',
  price: 3.40,
  thumbnail: './assets/senf.jpg',
  rating: 5,
  category: '1',
});

products.set('9', {
  id: '9',
  title: 'Rispentomaten',
  description: 'Tomaten verfügen über einen hohen Gehalt an Vitamin C sowie Zucker und Mineralstoffen.',
  price: 3.10,
  thumbnail: 'assets/tomaten.jpg',
  rating: 5,
  category: '2',
});

products.set('10', {
  id: '10',
  title: 'Magunm Almond',
  description: 'Vanilleglace und Milchschokolade mit Mandeln',
  price: 9.90,
  thumbnail: './assets/vanille_glace.jpg',
  rating: 5,
  category: '2',
});

export const categories = new Map<string, any>();

categories.set('2', {
  id: '2',
  slug: 'liquids',
  name: 'Flüssigkeiten',
});

categories.set('3', {
  id: '3',
  slug: 'foodables',
  name: 'Nahrungsmittel',
});
