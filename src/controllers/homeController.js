const connection = require('../config/database')
const Swal = require('sweetalert2')
const {getAllUser, postCreateUserAPI, getUserID, postUpdateById, DeleteById} = require('../service/CRUDService')

const getHomepage = async (req, res) =>{
    // res.send("Hello World !");
  let results = await getAllUser();
   res.render('home.ejs', {listUser: results})
   // query database 
}
const getWebpage =  (req, res) =>{
    res.render("sample.ejs");
}

const getPageCreateUser = (req, res) => {
  res.render("createUser.ejs")
}
const  postCreateUser = async  (req, res) => {
let {email, name, city} = req.body
// with placeholder
 await postCreateUserAPI(email, name, city);
//  res.send('create succeed' )
res.redirect('/')
}

const getUpdateUser = async (req,res) =>{  
  const {userId} = req.params
  const results = await getUserID (userId)
  res.render("edit.ejs",{userEdit: results});
}

const postUpdateUser = async (req, res) => {
  let {email, name, city, id} = req.body
  const infoUser = {email, name, city, id}
  console.log(infoUser);
  await postUpdateById(infoUser)
  // res.send("update succeed")
  res.redirect('/')
}

const postDeleteUser = async (req, res) =>{
  
  let {userId} = req.params
  await DeleteById(userId);
  res.redirect('/');
}
module.exports = {
    getHomepage,                                                                                                                        
    getWebpage,
    postCreateUser,
    getPageCreateUser,
    postUpdateUser,
    getUpdateUser,
    postDeleteUser
}