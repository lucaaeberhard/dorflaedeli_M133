// Sample data
export const products = new Map<string, any>();

products.set('1', {
  id: '1',
  title: 'Appenzeller Classic',
  description: 'Schweizer Halbhartkäse und  vollfett. aus Rohmilch',
  price: 3.45,
  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Appenzeller_%28cheese%29.jpg',
  rating: 5,
  category: '2',
});

products.set('2', {
  id: '2',
  title: 'Eier',
  description: '9 Schweizer Eier aus Frilandhaltung',
  price: 5.40,
  thumbnail: 'https://image.geo.de/30121054/t/vQ/v4/w1440/r0/-/eier-is-547420626-jpg--68255-.jpg',
  rating: 5,
  category: '2',
});

products.set('3', {
  id: '3',
  title: 'Iced Green Tea',
  description: 'AriZona Green Tea - Grünteegrtränk',
  price: 10.80,
  thumbnail: 'https://cdn.competec.ch/images2/2/2/9/188649922/188649922_xxl3.jpg',
  rating: 5,
  category: '1',
});

products.set('4', {
  id: '4',
  title: 'Kalbs-Bratwuerste',
  description: 'Terra Suisse Kalbs-Bratwurst 3x2 Stück',
  price: 16.50,
  thumbnail: 'https://t3.ftcdn.net/jpg/02/75/83/98/360_F_275839832_YJHxCK4yVOHmt0tUM3Kgb1FrvxICIzJh.jpg',
  rating: 5,
  category: '2',
});

products.set('5', {
  id: '5',
  title: 'Krustenkranz',
  description: 'Terra Suisse',
  price: 2.30,
  thumbnail: 'https://www.naturesuisse.ch/fileadmin/user_upload/Panetteria_det_3.jpg',
  rating: 5,
  category: '2',
});

products.set('6', {
  id: '6',
  title: 'Nektarinen gelb',
  description: 'Herkunft: Spanien',
  price: 5.20,
  thumbnail: 'https://lebensmittel-warenkunde.de/assets/images/nektarine.jpg',
  rating: 5,
  category: '2',
});

products.set('7', {
  id: '7',
  title: 'Olivenoel',
  description: 'Bertolli Olivenöl extra vergine originale',
  price: 17.95,
  thumbnail: 'https://www.coop.ch/img/produkte/737_737/RGB/5823140_001.jpg?_=1581300082507',
  rating: 5,
  category: '1',
});

products.set('8', {
  id: '8',
  title: 'Senf',
  description: 'Senf mild',
  price: 3.40,
  thumbnail: 'https://swissmade.direct/wp-content/uploads/2017/05/Thomy-Mild-Mustard-200-g.jpg',
  rating: 5,
  category: '1',
});

products.set('9', {
  id: '9',
  title: 'Rispentomaten',
  description: 'Tomaten verfügen über einen hohen Gehalt an Vitamin C sowie Zucker und Mineralstoffen.',
  price: 3.10,
  thumbnail: 'https://www.pastaweb.de/wp-content/uploads/2016/02/tomaten.jpg',
  rating: 5,
  category: '2',
});

products.set('10', {
  id: '10',
  title: 'Magunm Almond',
  description: 'Vanilleglace und Milchschokolade mit Mandeln',
  price: 9.90,
  thumbnail: 'https://www.lusso-business.ch/shop/media/image/1e/08/48/Magnum_1470x2000px_2021_Mandel_600x441@2x.jpg',
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
