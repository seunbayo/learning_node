var express = require("express")
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    var friends = ["Tony","john","sam","lexxy"];
    res.render("friends", {friends: friends});
});

app.listen(3000, function(){
    console.log("server don start");
});