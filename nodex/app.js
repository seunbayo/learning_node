var express = require("express");
var app = express();

// "/" => "Hi there and welcome"
app.get("/", function(req, res){
    res.send("Hi there and welcome");
});

// "/bye" => "Goodbye and see you"
app.get("/bye", function(req, res) {
    res.send("Goodbye and take care");
});

// "/dogs" => "Roar!" 
app.get("/dogs", function(req, res) {
    res.send("dogs are barking");
});

//for unique sub like reddit
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("welcome to the  "   +    subreddit.toUpperCase() +  " SUBREDDIT PAGE");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("welcome to the comments page!!!");
});

//For every other invalid link
app.get("*", function(req, res){
    res.send("page not found");
});


app.listen(3000, function() {
    console.log("server is running");
});
