const locationModel = require("../models/locationModel");
// GET LOCATION WITH BY SPECIALIST
const getLocation = async (req, res, next) => {
  try {
    const results = await locationModel.find({});
    res.status(200).json({
      status: 200,
      message: "Xử lí Thành công",
      data: results,
      date: Date(),
    });
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

// CREATE LOCATION
const createLocation = async (req, res, next) => {
  try {
    const location = await locationModel.findOne({
      speciaList: req.body.speciaList,
    });
    if (location) {
      const results = await locationModel.updateOne(
        { speciaList: location.speciaList },
        { location: [req.body.location[0], ...location.location] }
      );
      res.status(200).json({
        status: 200,
        message: "Xử lí thành công ",
        date: Date(),
      });
    } else {
      const locationNew = await new locationModel(req.body);
      const results = await locationNew.save();
      res.status(200).json({
        status: 200,
        message: "Xử lí thành công ",
        date: Date(),
      });
    }
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};
// UPDATE LOCATION
const updateLocation = async (req, res, next) => {
  // >>> speciaList
  // >> localId
  //>>>>>>>> city
  try {
    const local = await locationModel.findById(req.query.id);
    const data = local.location;
    for (const i in data) {
      if (req.body.localId == data[i].localId) {
        let value = { localId: req.body.localId, city: req.body.city };
        data.fill(value,i,i+1)
        const result = await locationModel.findByIdAndUpdate(req.query.id,{location:data})
        res.status(200).json({
          status:200,
          message:"Xử lí thành công !",
          date:Date()
        })
        return
      }
    }
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};
module.exports = {
  getLocation,
  createLocation,
  updateLocation,
};
