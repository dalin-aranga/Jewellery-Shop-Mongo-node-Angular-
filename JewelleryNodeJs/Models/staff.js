const mongoose = require('mongoose');


var Staff = mongoose.model('Staff',{
    name : {type :String},
    position : {type :String},
    age :{type: Number},
    contact : {type : String},
    address :{type: String},
    


});
module.exports = { Staff };