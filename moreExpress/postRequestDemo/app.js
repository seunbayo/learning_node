var express = require("express")
var app = express();
var bodyparser = require("body-parser");

// To use body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.set("view engine", "ejs");

// create a route for the home page
app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    console.log('req.body');
    
    res.send("you have reach the post route!!");
})

// Create a friend route
app.get("/friends", function(req, res){
    var friends = ["Tony","john","sam","lexxy"];
    res.render("friends", {friends: friends});
});



app.listen(3000, function(){
    console.log("server don start");
});