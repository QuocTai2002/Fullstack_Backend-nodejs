const express = require("express");
const router = express.Router();
const {fetchAllBranch, createBranch, updateBranch, deleteBranch} = require('../controllers/branchController');
const {registerUser,loginUser,deleteUser,getAllUser} = require('../controllers/userControllers')
const {getAllSpeciaList,AddNewSpeciaList, updateSpecialist, deleteSpecialist} = require('../controllers/speciaListController')
const {getDistrict, createDistrict, deleteDistrictById,editDistrict} = require('../controllers/districtController')
const {createLocation, getLocation, updateLocation} = require('../controllers/locationController')
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
    //############## Specialist #############
    router.get('/getAllSpeciaList',getAllSpeciaList)
    router.post('/createSpeciaList',AddNewSpeciaList )
    router.put('/updateSpeciaList', updateSpecialist)
    router.delete('/deleteSpecialist', deleteSpecialist)
    //###########LOCATION #############################
    router.post('/createLocation',createLocation)
    router.get('/getAllLocation',getLocation)
    router.put('/editLocation',updateLocation)
    //########### DISTRICT#################
    router.get('/getDistrict', getDistrict)
    router.post('/createDistrict', createDistrict)
    router.delete('/deleteDistrictById',deleteDistrictById)
    router.put('/editDistrict',editDistrict)
    return app.use('/api/v1', router)
}

module.exports = initAPIRoute



