const {getAllUser} = require('../service/CRUDService')

let getAllUserAPI = async (req, res) => {
const results = await getAllUser();
 return res.status(200).json({
    message:'ok',
    data: results
 })
}
module.exports = {
    getAllUserAPI
}