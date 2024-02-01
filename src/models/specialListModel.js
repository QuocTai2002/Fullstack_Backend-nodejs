const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const AutoIncrementFactory = require("mongoose-sequence");
const connection = require("../config/database");
const AutoIncrement = AutoIncrementFactory(connection);

const specialListModel = Scheme({
    _id:{type:Number},
    nameSpecialList:{type:String,require:true}

},{
    _id: false
})

//  add plugin
specialListModel.plugin(AutoIncrement,{
    id:'specialList_counter',
})

module.exports = connection.model('specialList',specialListModel)
