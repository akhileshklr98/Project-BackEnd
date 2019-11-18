const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MilmaDb');

const schema = mongoose.Schema;

var userSchema = new schema ({
    socityName: String,
    place: String,
    district: String,
    email: String,
    phoneNumber: Number,
    userName : String,
    passWord : String,
    isAdmin : Number
});
var userData = mongoose.model('user', userSchema);

var salesSchema = new schema ({
    socityName: String,
    Date: String,
    todayPrice: Number,
    totalQty: Number,
    totalAmount: Number
});

var saleData = mongoose.model('sale', salesSchema);

var farmerSchema = new schema ({
    socityName: String,
    Date: String,
    farmerName: String,
    todayPrice: Number,
    totalQty: Number,
    totalAmount: Number
});

var farmerData = mongoose.model('farmer', farmerSchema);

module.exports.socity = userData;
module.exports.sale = saleData;
module.exports.farmer = farmerData;