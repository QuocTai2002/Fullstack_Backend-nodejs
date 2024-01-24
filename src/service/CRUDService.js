const branchModel = require("../models/branchModel");

const CRUDBranch = {
  // getBranch: () => {
  //   // [GET]: lấy dữ liệu chi nhánh phòng khám
  //   return branchModel
  //     .find({})
  //     .then(() => {
  //       console.log("ok");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  postBranch: (formData) => {
    // [POST]: Thêm dữ liệu chi nhánh
    const Branch = new branchModel(formData);
    Branch.save()
      .then(() => {
        console.log(" Post success !");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  putBranch: (id, formData) => {
    // [PUT]: edit dữ liệu theo id
    branchModel
      .updateOne({ _id: id }, formData)
      .then(() => {
        console.log(" Update success !");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteById: (id) => {
    // [DELETE] : xóa dữ liệu thoe id
    branchModel
      .deleteOne({ _id: id })
      .then(() => {
        console.log(" Delete success !");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
module.exports = {
  CRUDBranch,
};
