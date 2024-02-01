require('dotenv').config();
const express = require('express')
const app = express()
const webRouter = require('./src/routes/web')
const initAPIRoute = require('./src/routes/api')
const port = process.env.PORT || 8080 // port => hard code
// const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

 // route API
 initAPIRoute(app)
 // khai bao route
//  app.use('/',webRouter);


// simple query
 app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`);
});