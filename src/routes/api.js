const express = require("express");
const router = express.Router();
const {getAllUserAPI} = require('../controllers/userControllers')
// khai báo route
 
const initAPIRoute = (app) =>{
    router.get('/users', getAllUserAPI); // method GET -> READ
    return app.use('/api/v1', router)
}

module.exports = initAPIRoute



