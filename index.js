var express = require("express");
var path=require("path");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
//  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
router.get("/login",function(req,res){
  res.sendFile(path + "login.html");
});
app.use("/",router);

app.use('/assets', express.static(__dirname + '/assets'));
app.listen(8080);
