var compression = require('compression')
const express = require('express');
const path = require('path');
const db = require('./db/index');

const app = express();
const PORT = 3003;

const dist = path.join(__dirname, '../client/public');

app.use(compression())
app.use(express.static(dist));
app.use(express.json());

app.get('/property/:id', (req, res) => {
  db.getListing(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is listening on port: ', PORT);
  }
});
