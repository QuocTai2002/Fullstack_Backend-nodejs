const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const connection =  require('../../config/database')
const branch = new Scheme ({
    NameCN: {type: String }, 
    SDT: {type:String,default:'0901.315.315'},
    LinkMaps: {type:String},
    Address: {type:String, maxLength:255},
},{
    timestamps: true
})



module.exports = connection.model('demo_datas', branch)