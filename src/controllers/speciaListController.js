const specialListModel = require("../models/specialListModel");

// GET ALL SPECIALIST
const getAllSpeciaList = async (req, res, next) => {
  //fetch all speciaList
  try {
    const result = await specialListModel.find({});
    res.status(200).json({
      status: 200,
      message: "Xử lý thành công !",
      data: result,
      date: Date(),
    });
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

// CREATE SPECIALIST
const AddNewSpeciaList = async (req, res, next) => {
  // create new specialList
  try {
    const newSpeciaList = new specialListModel(req.body);
    const speciaList = await specialListModel.findOne({
      nameSpecialList: req.body.nameSpecialList,
    });
    if (speciaList) {
      return res.status(404).json({
        status: 404,
        message: "Tên đã tồn tại !",
        date: Date(),
      });
    } else {
      const result = await newSpeciaList.save();
      return res.status(200).json({
        status: 200,
        message: "Xử lí thành công !",
        data: result,
        date: Date(),
      });
    }
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

// EDIT SPECIALIST
const updateSpecialist = async (req, res, next) => {
  //post specialist data
  try {
    const { id } = req.query;
    await specialListModel.updateOne({ _id: id }, req.body);
    return res.status(200).json({
      status: 200,
      message: "Xử lí thành công",
      date: Date(),
    });
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

// DELETE SPECIALIST
const deleteSpecialist = async (req, res, next) => {
  try {
    const { id } = req.query;
    await specialListModel.deleteOne({ _id: id });
    res.status(200).json({
      status: 200,
      message: "Xử lí thành công",
      Date: Date(),
    });
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};
module.exports = {
  getAllSpeciaList,
  AddNewSpeciaList,
  updateSpecialist,
  deleteSpecialist,
};
