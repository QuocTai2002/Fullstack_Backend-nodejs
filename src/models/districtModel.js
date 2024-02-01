const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const AutoIncrementFactory = require("mongoose-sequence");
const connection = require("../config/database");
const AutoIncrement = AutoIncrementFactory(connection);

const districtModel = Scheme({
    _id:{type:Number},
    localId:{type:String, require: true},
    nameDistrict:{type:String, require:true}
},{
    _id: false
})

//  add plugin
districtModel.plugin(AutoIncrement,{
    id:'district_counter',
})

module.exports = connection.model('district',districtModel)
