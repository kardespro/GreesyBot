const app = require("express").Router();
//404

app.get("", (req,res) => {
  res.json("error");
  });


module.exports = app;