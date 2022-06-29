var express = require('express');
var path=require('path')
var router = express.Router();
var mysql=require('../database/db');
/* GET home page. */

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/home.html"))

});
router.get('/login', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/login.html"))

});
router.get('/signup', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/signup.html"))

});
router.get('/contact', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/contact.html"))

});
router.post('/login', function(req, res, next) {
  var output = "username:"+req.body.n1+"<br>"+req.body.n2
  res.send(output)

});
router.get('/signup', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/signup.html"))

});
router.get('/contact', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/contact.html"))

});
router.get('/reg_form', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 style=color:blue align=center>Hello This is express developed by Reshma</h2>");
    res.sendFile(path.resolve("public/reg_form.html"))

});
router.post('/reg_form', function(req, res, next) {
  var output="<table border=2px><tr><td>Reg_no:"+req.body.regno+"</td></tr>"+
                    "<tr><td>Name:"+req.body.name+"</td></tr>"+
                    "<tr><td>F_NAme:"+req.body.fname+"</td></tr>"+
                    "<tr><td>Gender:"+req.body.Gender+"</td></tr>"+
                    "<tr><td>DOB:"+req.body.day+"</td></tr>"+
                    "<tr><td>LAnguages:"+req.body.l1+"</td></tr>"+
                    "<tr><td>Branch:"+req.body.s1+"</td></tr></table>"
  res.send(output)

});
router.get('/ejscode', function(req, res, next) {
  res.render("index1",{title:"Embeddded Java Script Code",name:"Reshma"})
});
router.get('/jsoncode', function(req, res, next) {
  var posts=[
    {title:"HBD",message:"Happy Birthday to you"},
    {title:"Casual",message:"Hello everyone,How are you??"},
    {title:"Announcement",message:"Bahubali movie is releasing on"},
    {title:"Greetings",message:"Greetings of the day"},
    {title:"Events",message:"Half Saree Event"}
  ];
  res.render("index",{title:"Facebook Posts",posts:posts});
});
router.get('/selectqry1', function(req, res, next) {
      mysql.getConnection((err, connection) => {
       if(err) throw err;
          connection.query("select * from student1", (err, rows) => {
          connection.release(); 
          if(err) throw err;
          res.render("datadisplay",{rows:rows, title:"Student Details"});
          //res.send(rows);
      });
  });

});
router.post('/selectqry', function(req, res, next) {
  var regno1=req.body.rollno;
      mysql.getConnection((err, connection) => {
       if(err) throw err;
          connection.query("select * from student1 where regno='"+regno1+"'", (err, rows) => {
          connection.release(); 
          if(err) throw err;
          res.render("datadisplay",{rows:rows, title:"Student Details"});
          //res.send(rows);
      });
  });

});
router.get('/S_form', function(req, res, next) {
  res.sendFile(path.resolve("public/form1.html"));
});
module.exports = router;
