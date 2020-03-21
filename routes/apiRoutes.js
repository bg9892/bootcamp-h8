var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");
var express = require("express");
var db = require("../db/db.json");

var app = express();


app.get("/api/notes", function (req, res) {
    console.log(res);
    return res.json(db);
})   

app.post("/api/notes", function (req, res) {
    console.log(res);
    db.push(req.body);
    res.send(db);
})

module.exports = app;