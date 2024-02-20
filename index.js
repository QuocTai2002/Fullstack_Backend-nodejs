require('dotenv').config();
const express = require('express')
const app = express()
const webRouter = require('./src/routes/web')
const initAPIRoute = require('./src/routes/api')
const cors = require('cors')
const port = process.env.PORT || 8080 // port => hard code
// const hostname = process.env.HOST_NAME
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
// config req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// access cross
app.use(cors(corsOptions));
 // route API
 initAPIRoute(app)
 // khai bao route
 app.use('/',webRouter);


// simple query
 app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`);
});