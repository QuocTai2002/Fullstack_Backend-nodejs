const express = require('express')
require('dotenv').config();
const app = express()
const configViewEngine = require('./config/ViewEngine')
const port = process.env.PORT || 8080 // port => hard code
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)
// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
  res.render('sample.ejs')
})
app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)  
})