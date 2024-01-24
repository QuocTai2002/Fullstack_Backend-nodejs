const userModel = require('../models/userModel')

export const loginUserService = async ({username, password}) =>{
    try{

    } catch (err) {
        console.log(err);
    }
}

export const registerUserService = async ({username, password}) =>{
    try{
        const user = await userModel.find({username:username})
        if(user){
            return {

            }
        }
    } catch (err){
        console.log(err);
    }
}
