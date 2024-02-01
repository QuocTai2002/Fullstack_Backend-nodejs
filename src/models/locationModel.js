const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const AutoIncrementFactory = require("mongoose-sequence");
const connection = require("../config/database");
const AutoIncrement = AutoIncrementFactory(connection);

const locationModel = new Scheme({
  _id: { type: Number },
  speciaList: { type: String, default: "Nhi đồng 315" },
  location: [
    {
      localId: { type: String, require:true },
      city: { type: String, default: "" },
    },
  ],
},{
    _id: false
}
);
//  add plugin
locationModel.plugin(AutoIncrement,{
    id:'branch_local_counter',
})

module.exports = connection.model('branch_local', locationModel)

