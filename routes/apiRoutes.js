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

app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < db.length; i++) {
        if (id === db[i].id) {
            db.splice(i);
        }
    };
    res.json(db);
});

module.exports = app;