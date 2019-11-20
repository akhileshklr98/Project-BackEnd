const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MilmaDb');
// mongoose.connect('https://cloud.mongodb.com/v2/5dd424949ccf6484fd972518#metrics/replicaSet/5dd42542a6f23940b5cc4840/explorer/MilmaDb/users');

const schema = mongoose.Schema;

var userSchema = new schema ({
    socityName: String,
    place: String,
    district: String,
    email: String,
    phoneNumber: Number,
    userName : String,
    passWord : String,
    isAdmin : Number,
    sale : Array,
    sponsor : Array
});
var userData = mongoose.model('user', userSchema);

// var salesSchema = new schema ({
//     socityName: String,
//     Date: String,
//     todayPrice: Number,
//     totalQty: Number,
//     totalAmount: Number
// });

// var saleData = mongoose.model('sale', salesSchema);

// var farmerSchema = new schema ({
//     socityName: String,
//     Date: String,
//     farmerName: String,
//     todayPrice: Number,
//     totalQty: Number,
//     totalAmount: Number
// });

// var farmerData = mongoose.model('farmer', farmerSchema);

module.exports = userData;
// module.exports.socity = userData;
// module.exports.sale = saleData;
// module.exports.farmer = farmerData;