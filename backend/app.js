const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

mongoose.connect("mongodb://localhost/nemoneKar-1") ;

const Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  family: String,
  password: String,
  password2: String,
  email: String,
  tell: Number,
  titel: String

});
var InputModel = mongoose.model("User" , userSchema ) ;

app.use(morgan('common')) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	cookie: { maxAge: 60000 },
    secret : "secret",
    resave : false,
    saveUninitialized : true
})) ;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/singin", (req, res, next) => {
  var formData = req.body;
  var name = formData.name;
  var family = formData.family;
  var password = formData.password;
  var password2 = formData.password2;
  var email = formData.email;
  var tell = formData.tell;
  var titel = formData.titel;

 if(
    name.length &&
    family.length &&
    password.length &&
    password2.length &&
    email.length //&&
   // tell.length &&
  //  titel.length
    ) {
     if(password === password2){
        InputModel.find({email}, function (err, docs) {
          if (err) {throw err}
          else if(docs.length){
              res.json({msg:"ایمیل قبلا وارد شده"});
          }else{
            var newUser = new InputModel({
              name: formData.name,
              family: formData.family,
              password: formData.password,
              password2: formData.password2,
              email: formData.email,
              tell : formData.tell,
              titel : formData.titel,
            });
            newUser.save() ;
            console.log(newUser);
            console.log('sabte name ba mofaghiat anjam shod');
            res.json({msg2:"ثبت نام با موفقیت انجام شد"});
          }
       });
      }else{
        res.json({msg:"پسورد مطابقت ندارد"});
      }
  }else{
    res.json({msg:"لطفا همه موارد را کامل کنید"});
  }
});

app.post("/api/singup", (req, res, next) => {
  console.log(req.body);
});

module.exports = app;
