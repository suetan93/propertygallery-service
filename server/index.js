const express = require('express')
const app = express()
const db = require('../db/index.js')
const PORT = 3001

//middleware


//routes


app.listen(PORT, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is listening on port: ', PORT)
  }
})