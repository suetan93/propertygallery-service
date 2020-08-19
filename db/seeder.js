const faker = require('faker');
const db = require('./index');
const images = require('./imagedata');

const adj = ['Beautiful', 'Oceanview', 'Nice', 'Charming', 'Private', 'Comfy', 'Cozy', 'Affordable', 'Elegant', 'Quiet'];

const type = ['Apartment', 'Studio', 'Loft', 'Flat', 'Condo', 'House', 'Cabin', 'Unit', 'Suite', 'Cottage'];

const locations = ['London, England, United Kingdom', 'Kensington, England, United States', 'Honolulu, Hawaii, United States', 'Hilo, Hawaii, United States', 'Oakland, California, United States', 'San Francisco, California, United States', 'New York, United States', 'Ibiza, Balearic Islands, Spain', 'Ocho Rios, Jamaica', 'Miami, Florida, United States'];

const listings = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100; i++) {
  const propName = `${adj[Math.floor(Math.random() * (9 - 0 + 1)) + 0]} ${type[Math.floor(Math.random() * (9 - 0 + 1)) + 0]}`;

  const obj = {
    _id: i,
    name: propName,
    rating: faker.finance.amount(3, 5, 2),
    totalratings: faker.random.number({ min: 1, max: 800 }),
    superhost: faker.random.boolean(),
    location: locations[Math.floor(Math.random() * (9 - 0 + 1)) + 0],
    saved: faker.random.boolean(),
    photos: images[Math.floor(Math.random() * (3 - 0 + 1)) + 0],
  };

  listings.push(obj);
}

db.load(listings, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved');
  }
});
