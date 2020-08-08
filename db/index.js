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


let Property = mongoose.model('Properties', propertySchema);

module.exports = {
  load: function(listings, callback) {
    Property.insertMany(listings, (err, listings) => {
      if (err) {
        callback(err)
      } else {
        callback(null, 'Listings Saved')
      }
    })
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