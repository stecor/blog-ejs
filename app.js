const express = require('express')
//const bodyParser = require('body-parser')

const app = express()

//app.set('view engine', 'ejs')

app.use('/', function () {
  console.log('hello')
})

app.listen(3000, function () {
  console.log('Server running port 3000')
})
