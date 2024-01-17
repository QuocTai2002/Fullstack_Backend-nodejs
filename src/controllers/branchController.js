const { CRUDBranch } = require("../service/CRUDService");

const fetchAllBranch = async (req, res, next) => {
  try {
    const data = await CRUDBranch.getBranch();
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

module.exports = {
  fetchAllBranch,
};
