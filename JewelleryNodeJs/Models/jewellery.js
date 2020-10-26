const mongoose = require('mongoose');

var Jewellery = mongoose.model('jewellery',{
    name : {type :String},
    type : {type :Number},
    size :{type: String},
    color : {type : String},
    price :{type: Number},
    


});
module.exports = { Jewellery };