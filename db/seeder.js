const db = require('./index');
const images = require('./imagedata');
const faker = require('faker');

let adj = ['Beautiful', 'Oceanview', 'Nice', 'Charming', 'Private', 'Comfy', 'Cozy', 'Affordable', 'Elegant', 'Quiet']

let type = ['Apartment', 'Studio', 'Loft', 'Flat', 'Condo', 'House', 'Cabin', 'Unit', 'Suite', 'Cottage']

let locations = ['London, England, United Kingdom', 'Kensington, England, United States', 'Honolulu, Hawaii, United States', 'Hilo, Hawaii, United States','Oakland, California, United States', 'San Francisco, California, United States', 'New York, United States', 'Ibiza, Balearic Islands, Spain', 'Ocho Rios, Jamaica', 'Miami, Florida, United States']


let listings = []


for (let i = 0; i < 100; i++) {
  let propName = adj[Math.floor(Math.random() * 10)] + ' ' + type[Math.floor(Math.random() * 10)];

  var obj = {
    _id: i,
    name: propName,
    rating: faker.finance.amount(3,5,2),
    totalratings: faker.random.number({'min': 1, 'max': 800}),
    superhost: faker.random.boolean(),
    location: locations[Math.floor(Math.random() * 10)],
    saved: faker.random.boolean(),
    photos: images[Math.floor(Math.random() * 4)]
  }

  listings.push(obj)
}

db.load(listings, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Saved')
  }
})