const branchModel = require('../models/branchModel')
const getHomepage = async (req, res) => {
  try {
    const data = await branchModel.find({})
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const getDemo = async (req, res, next) =>{
  try{
    res.send('oke')
  } catch (err) {
    next(err)
  }
}
//  res.render('home.ejs', {listUser: results})
// query database

module.exports = {
  getHomepage,
  getDemo
};
