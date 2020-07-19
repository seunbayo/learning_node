var express = require("express")
var app = express();
var bodyParser = require("body-parser");

// To use body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.set("view engine", "ejs");
var friends = ["Tony","john","sam","lexxy"];

// create a route for the home page
app.get("/", function(req, res){
    res.render("home");
});

// setting up a post route
app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

// Create a friend route
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});


app.listen(3000, function(){
    console.log("server don start");
});