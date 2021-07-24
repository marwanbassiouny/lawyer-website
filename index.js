const express = require("express");
const app=express();
const Path = require("path");
const nodemailer =require('nodemailer');

app.use(express.static("public"));

app.get("/",function(req , res){
res.sendFile(__dirname+"/Home.html")
});

app.get("/Home",function(req , res){
res.sendFile(__dirname+"/Home.html")
});

app.get("/About",function(req , res){
res.sendFile(__dirname+"/About.html")
});

app.get("/services",function(req , res){
res.sendFile(__dirname+"/services.html")
 });

 app.get("/contactus",function(req , res){
 res.sendFile(__dirname+"/contactus.html")
 });

app.get("/HomeAR",function(req , res){
res.sendFile(__dirname+"/HomeAr.html")
});

app.get("/AboutAR",function(req , res){
 res.sendFile(__dirname+"/AboutAr.html")
});

 app.get("/contactusAR",function(req , res){
 res.sendFile(__dirname+"/contactusAR.html")
 });
app.get("/servicesAR",function(req , res){
res.sendFile(__dirname+"/servicesAR.html")
});

app.listen(3000,function(){
console.log("server is running");
});