const districtModel = require("../models/districtModel");
const locationModel = require("../models/locationModel");

// GET ADD DISTRICT WITH LOCAL
const getDistrict = async (req, res, next) => {
  try {
    const { localID } = req.query;
    let objWhere = {};
    if (localID !== "") { // check có keyWord hay không
      objWhere.localId = localID;
    }
    const results = await districtModel.find(objWhere);
    const data = []
    for (const items of results){
      const {localId, ...others} = items._doc // tách dữ liệu localId trả về client
      data.push(others);
    }
    res.status(200).json({
      status: 200,
      message: "Xử lí thành công !",
      data: data,
      date: Date(),
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
    next(err);
  }
};

// ADD NEW DISTRICT
const createDistrict = async (req, res, next) => {
  try {
    const district = await districtModel(req.body);
    const result = await district.save();
    res.status(200).json({
      status: 200,
      message: "Xử lí thành công !",
      data: result,
      date: Date(),
    });
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

// DELETE DISTRICT
const deleteDistrictById = async (req, res, next) => {
  try{
    const {id} = req.query
    await districtModel.deleteOne({_id:id})
    res.status(200).json({
      status:200,
      message:"Xử lí thành công !",
      date:Date()
    })
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
}
  // UPDATE DISTRICT
const editDistrict = async (req, res, next) => {
  try {
    const {IdDistrict,nameDistrict} = req.body
console.log();
    const result = await districtModel.updateOne({_id:IdDistrict},{nameDistrict:nameDistrict})
    res.status(200).json({
      status:200,
      message:'Xử lí thành công !',
      date:Date()
    })
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
}
module.exports = {
  getDistrict,
  createDistrict,
  deleteDistrictById,
  editDistrict
};
