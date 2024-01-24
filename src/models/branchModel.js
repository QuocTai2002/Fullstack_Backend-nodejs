const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence');
const connection =  require('../config/database')
const AutoIncrement = AutoIncrementFactory(connection);
const branchModel = new Scheme ({

    _id: Number,
    speciaList:{type:String,default:'Nhi đồng 315'},
    nameCN: {type: String },
    SDT: {type:String,default:'0901.315.315'},
    linkMaps: {type:String},
    address: {type:String, maxLength:255},
    statusOpen:{type:Boolean,default:true},
    fullTime:{type:Boolean,default:true},
    timeWork:{
        AM:{type:String,default:'8:00-11:30'},
        PM:{type:String, default:'13:30-20:30'}
    },
    location:{
        Latitude:{type:Number, default:''},
        Longitude:{type:Number, default:''}
    }

},{
    _id: false ,
    timestamps: true
})

// add plugin
branchModel.plugin(AutoIncrement,{
    id: 'branch_counter',
})

module.exports = connection.model('branch_clinic', branchModel)