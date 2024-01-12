require('dotenv').config();
const express = require('express')
const app = express()
const webRouter = require('./routes/web')
const initAPIRoute = require('./routes/api')
const configViewEngine = require('./config/ViewEngine')
const port = process.env.PORT || 8080 // port => hard code
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config template engine
configViewEngine(app)
 // khai bao route
 app.use('/',webRouter);

 // route API
 initAPIRoute(app)
 // test connection

// simple query
 app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});