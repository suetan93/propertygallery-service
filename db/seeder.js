const db = require('./index')
const data = require('./imagedata')

// console.log('test/////', data)

db.load(data, (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})