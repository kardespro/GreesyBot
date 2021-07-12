const rpassw = require("randompasswordjs");
var db = require("quick.db");
var api = require("express").Router()

var pass = rpassw.olustur(20);
console.log(pass);
api.get("/api/v1/generate", (req,res) =>{
  var user_token =rpassw.olustur(20);
  
  });
