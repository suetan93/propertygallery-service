/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// eslint-disable-next-line prefer-arrow-callback
db.once('open', () => {
  console.log('Connected to airbnb database');
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
      verified: Boolean,
    },
  ],
});

const Property = mongoose.model('Properties', propertySchema);

module.exports = {
  load(listings, callback) {
    Property.insertMany(listings, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  getListing(id, callback) {
    Property.findById(id, (err, property) => {
      if (err) {
        callback(err);
      } else {
        callback(null, property);
      }
    });
  },

};
