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

module.exports = userData;