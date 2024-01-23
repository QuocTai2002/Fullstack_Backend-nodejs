const express = require("express");
const router = express.Router();
const {fetchAllBranch, createBranch, updateBranch, deleteBranch} = require('../controllers/branchController');
const {registerUser,loginUser} = require('../controllers/userControllers')
// khai báo route
 
const initAPIRoute = (app) =>{
    //######## branch ###############
    router.get('/getBranch', fetchAllBranch); // method GET -> READ
    router.post('/createBranch', createBranch) // method [POST] -> create new branch
    router.put('/updateBranch', updateBranch) // method [PUT]  -> edit
    router.delete('/deleteBranch', deleteBranch) // method [DELETE] -> delete branch
    //############## USER ############
    router.post('/createUser', registerUser)
    router.get('/loginUser', loginUser)
    
    return app.use('/api/v1', router)
}

module.exports = initAPIRoute



