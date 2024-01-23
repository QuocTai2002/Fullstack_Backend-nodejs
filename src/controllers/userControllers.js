const {getAllUser} = require('../service/CRUDService')
const userModel= require('../models/userModel')
let getAllUserAPI = async (req, res) => {
const results = await getAllUser();
 return res.status(200).json({
    message:'ok',
    data: results
 })
}
//SIGN UP
const registerUser = async (req,res,next) =>{
    try{
      const newUser = await userModel(req.body)
        //save DB
     const user = await newUser.save()
      res.status(200).json({
        status:200,
        message:'Xử lý thành công',
        data: user
      })
    } catch (err) {
      console.log('error');
        res.status(500).json(err)
    }
}
// LOGIN
const loginUser = async (req, res, next) =>{
  try{
    const user = await userModel.findOne({username: req.body.username})
    if(!user){
      return res.status(401).json({
        status:401,
        message:'sai username',
        date:Date(),
      })
    } if (user.password !== req.body.password){
      return res.status(401).json({
        status:401,
        message:'sai password',
        date:Date()
      })
    } 
    res.status(200).json({
        status:200,
        message:'Đăng nhập thành công !',
        date:Date(),
        data: user
    })
  } catch (err){
    res.status(500).json(err)
  }
}
module.exports = {
    getAllUserAPI,
    registerUser,
    loginUser,
}