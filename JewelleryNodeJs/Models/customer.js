const mongoose = require('mongoose');


var Customer = mongoose.model('Customer',{
    name : {type :String},
    date : {type :String},
    contact :{type: String},
    phoneNumber : {type : Number},
    address :{type: String},
    total_price : {type: Number},


});
module.exports = { Customer };