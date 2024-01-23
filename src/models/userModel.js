const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const connection = require("../config/database");

const userModel = new Scheme(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    Name: { type: String, default:"" },
    chucVu: { type: String, default: "IT" },
    admin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = connection.model("user", userModel);
