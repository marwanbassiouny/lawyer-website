const express = require("express");
const app=express();
const Path = require("path");
var bodyParser = require('body-parser');
const nodemailer =require('nodemailer');


app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());

app.use(express.static("public"));

/***********************************/
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

 app.post("/contactusAR", urlencodedParser ,function(req , res){
 console.log(req.body);
 res.sendFile(__dirname+"/contactusAR.html")
   });

app.get("/servicesAR",function(req , res){
res.sendFile(__dirname+"/servicesAR.html")
});

/*****************************************************************/
app.post("/contactus", urlencodedParser, function (req, res) {

    let email=req.body.email;
    let name = req.body.name;
    let phone = req.body.phone;
    let mail_subject = req.body.Subject;
    let message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kmarwan918@gmail.com',
      pass: 'marwanis87'
    }
  });


  var mailOptions = {
    from: 'kmarwan918@gmail.com',
    to: 'marwanbassiouny7@gmail.com',
    subject: 'mail_subject' ,
    html :"<h2>welcome</h2>"+
          "<h3>name: "+ name +"</h3>"+ 
          "<h3>phone: " + phone + "</h3>"+
          "<h3>email: "+ email + "</h3>" + 
          "<h3>subject: " + mail_subject + "</h3>"+
          "<h3>Message: " + message + "</h3>",  
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  
});


app.listen(3000,function(){
console.log("server is running");
});