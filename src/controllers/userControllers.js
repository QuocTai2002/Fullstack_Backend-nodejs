
const userModel= require('../models/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config();
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
    } if(user && user.password){
    const access_Token =  jwt.sign({
        id:user._id,
        username:user.username,
        admin:user.admin
      },
      process.env.JWT_ACCESS_KEY,
      {expiresIn: '30d'}
      ) 
      const {password,...others} = user._doc;
      res.status(200).json({
        status:200,
        message:'Đăng nhập thành công !',
        date:Date(),
        data:others,
        access_Token

    })
    }
    
  } catch (err){
    res.status(500).json(err)
  }
}

//  DELETE USER
 const deleteUser = async (req,res,next) =>{
  try{
    const {id} = req.query
    await userModel.deleteOne({_id:id})
    res.status(200).json({
      status:200,
      message:'Delete success !',
      date:Date()
    })
  } catch (err) {
    res.status(500).json(err)
  }
 }

 //GET ALL USER 
 const getAllUser = async (req, res, next) =>{
  try{
    const user = await userModel.find({})
    res.status(200).json(user)
  }catch(err){
    res.status(500).json(err)
  }
 }
module.exports = {
    registerUser,
    loginUser,
    deleteUser,
    getAllUser
}