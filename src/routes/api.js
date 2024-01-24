const express = require("express");
const router = express.Router();
const {fetchAllBranch, createBranch, updateBranch, deleteBranch} = require('../controllers/branchController');
const {registerUser,loginUser,deleteUser,getAllUser} = require('../controllers/userControllers')
const authMiddleware = require('../middlewares/authMiddleware')
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
    router.delete('/deleteUser',authMiddleware.verifyTokenAndAdminAuth, deleteUser)
    router.get('/getAllUser',authMiddleware.verifyToken, getAllUser)
    
    return app.use('/api/v1', router)
}

module.exports = initAPIRoute



