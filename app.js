const express = require('express');
const MilmaData = require('./src/model/milmaData');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log(req.body);
    var username = req.body.user.name;
    var password = req.body.user.pass;
    MilmaData.socity.findOne({$and:[{userName:username},{passWord:password}]})
                .then(function(user){
                    res.send(user);
                });
});

app.post('/addSocity',function(req,res){
    console.log('insert')
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var user = {
        socityName: req.body.socity.socityName,
        place: req.body.socity.place,
        district: req.body.socity.district,
        email: req.body.socity.email,
        phoneNumber: req.body.socity.phoneNumber,
        userName: req.body.socity.userName,
        passWord: req.body.socity.passWord,
        isAdmin: 0
    }
    var socity = new MilmaData.socity(user);
    socity.save().then( (result)=>{
        console.log(result);
        res.send(result);
    })
});

app.post('/addSale', (req,res)=>{
    console.log('sale');
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var sale = {
        socityName: req.body.sale.socityName,
        Date: req.body.sale.Date,
        todayPrice: req.body.sale.todayPrice,
        totalQty: req.body.sale.totalQty,
        totalAmount: req.body.sale.totalAmount
    }
    var sale = new MilmaData.sale(sale);
    sale.save().then( (result=>{
        res.send(result);
    }));
});

app.post('/addFarmerDetails', (req,res)=>{
    console.log('Farmer');
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var farmer = {
        socityName: req.body.farmer.socityName,
        Date: req.body.farmer.Date,
        farmerName: req.body.farmer.farmerName,
        todayPrice: req.body.farmer.todayPrice,
        totalQty: req.body.farmer.totalQty,
        totalAmount: req.body.farmer.totalAmount
    }
    var milma = new MilmaData.farmer(farmer);
    milma.save().then( (result=>{
        res.send(result);
    }));
})

app.listen(3000, function(){
    console.log('Listening to Port 3000');
});