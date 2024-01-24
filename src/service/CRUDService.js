const connection = require( "../config/database")
const branch = require('../models/schema/branch')


const CRUDBranch = {
  getBranch: () =>{ // [GET]: lấy dữ liệu chi nhánh phòng khám 
    return branch.find({})
  },
  
}

async function getAllUser() {
  const [results, fields] = await connection.execute('SELECT * FROM  Users')
  return results
}

const postCreateUserAPI = async (email, name, city) => {
    const [ results, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)',
  [email, name, city]);  
}

const getUserID = async (id) => {
  const [results, fields] = await connection.query('SELECT * FROM  Users WHERE id = ?',
  [id]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const postUpdateById = async (infoUser) => {
  const [results, fields] = await connection.query(` 
  UPDATE Users 
  SET email = ?,name=?, city = ?
  WHERE id = ?;`,
  [infoUser.email, infoUser.name, infoUser.city,infoUser.id])
}

const DeleteById = async (UserId) =>{
  const [results, fields] = await connection.query(`DELETE FROM Users  WHERE id = ?;`,
  [UserId])
}

module.exports = {
getAllUser,
postCreateUserAPI,
getUserID,
postUpdateById,
DeleteById,
CRUDBranch
}