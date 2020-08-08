const express = require('express')
const app = express()
const seeder = require('../db/seeder')
const db = require('../db/index')
const PORT = 3001


app.use(express.static(__dirname + '../client/public'));
app.use(express.json())


app.get('/property', (req, res) => {
  db.getListing(15, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })

})


app.listen(PORT, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is listening on port: ', PORT)
  }
})