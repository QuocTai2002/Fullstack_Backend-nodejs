const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
const branch = new Scheme ({
    NameCN: {type: String },
    Date: { type: Date, default: Date.now },
    SDT: {type:String,default:'0901.315.315'},
    Address: {type:String, maxLength:255},
    LinkMaps: {type:String}
})



module.exports = mongoose.model('demo_datas', branch)