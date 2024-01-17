const express = require("express");
const router = express.Router();
const {getAllUserAPI} = require('../controllers/userControllers')
const {fetchAllBranch} = require('../controllers/branchController')
// khai báo route
 
const initAPIRoute = (app) =>{
    router.get('/getBranch', fetchAllBranch); // method GET -> READ
    return app.use('/api/v1', router)
}

module.exports = initAPIRoute



