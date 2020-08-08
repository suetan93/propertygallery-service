const faker = require('faker');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to airbnb database')
});

const propertySchema = new mongoose.Schema({
  _id: Number,
  name: String,
  rating: Number,
  totalratings: Number,
  superhost: Boolean,
  location: String,
  saved: Boolean,
  photos: [
    {
      _id: Number,
      url: String,
      caption: String,
      verified: Boolean
    },
  ]
});

//drop collection
db.dropCollection('properties', (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Collections dropped')
  }
})

let Property = mongoose.model('Properties', propertySchema);

module.exports = {
  load: function(images, callback) {

    for (var i = 0; i < 100; i++) {
      var city = faker.address.city();
      var state = faker.address.state();
      var country = faker.address.country();

      var listing = new Property({

        _id: i,
        name: faker.commerce.productName(),
        rating: faker.random.number({'min': 1, 'max': 5}),
        totalratings: faker.random.number({'min': 1, 'max': 800}),
        superhost: faker.random.boolean(),
        location: `${city}, ${state}, ${country}`,
        saved: faker.random.boolean(),
        photos: images

      })

      listing.save((err) => {
        if (err) {
          callback(err)
        }
      })
    }
    callback(null, 'Collections Saved')
  },

  getListing: function(id, callback) {
    Property.findById(id, (err, property) => {
      if (err) {
        callback(err)
      } else {
        callback(null, property)
      }
    })
  }


}