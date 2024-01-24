const { CRUDBranch } = require("../service/CRUDService");
const branchModel = require("../models/branchModel");
const fetchAllBranch = async (req, res, next) => {
  try {
    const { keyWord } = req.query;
    let objWhere = {};
    if (keyWord !== '') {
      objWhere.nameCN = new RegExp(keyWord, "i");
    } //check có keyWord hay không
    const data = await branchModel.find(objWhere);
    return res.status(200).json({
      status: 200,
      message: "Xử lí thành công",
      date: Date(),
      content: data,
    });
  } catch (err) {
    next(err);
  }
};

const createBranch = async (req, res, next) => {
  try {
    await CRUDBranch.postBranch(req.body);
    return res.status(200).json({
      status: 200,
      message: "xử lí thành công",
      data: Date(),
    });
  } catch (err) {
    next(err);
  }
};

const updateBranch = async (req, res, next) => {
  try {
    const { id } = req.query;
    await CRUDBranch.putBranch(id, req.body);
    return res.status(200).json({
      status: 200,
      message: "xử lí thành công",
      data: Date(),
    });
  } catch (err) {
    next(err);
  }
};

const deleteBranch = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({
        status: 400,
        message: "Cú pháp không hợp lệ",
        data: Date(),
      });
    }
    await CRUDBranch.deleteById(id);
    return res.status(200).json({
      status: 200,
      message: "xử lí thành công",
      data: Date(),
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  fetchAllBranch,
  createBranch,
  updateBranch,
  deleteBranch,
};
