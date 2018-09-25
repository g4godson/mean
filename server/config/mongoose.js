
var path = require("path");
var fs = require("fs");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, "./../models");
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf(".js") >= 0){
        require(models_path + "/" + file);
    }
})

mongoose.connect("mongodb://localhost/Movies")