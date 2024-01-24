const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence');
const connection = require("../config/database");
const AutoIncrement = AutoIncrementFactory(connection);
const userModel = new Scheme(
  {
    _id: Number,
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    Name: { type: String, default:"" },
    chucVu: { type: String, default: "IT" },
    admin: { type: Boolean, default: false },
  },
  {
    _id: false ,
    timestamps: true,
  }
);
// add plugin
userModel.plugin(AutoIncrement,{
  id: 'user_counter',
})
module.exports = connection.model("user", userModel);
