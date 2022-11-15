//jshint esversion:6
const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at angela@gmail.com");
});

app.get("/about",function(req,res){
    res.send("Name: Abhishek Kumar");
    // res.send("Profession: Computer Science Student");
    // res.send("Goal: A good programmer");
});

app.get("/hobbies",function(req,res){
    res.send("Comding");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});