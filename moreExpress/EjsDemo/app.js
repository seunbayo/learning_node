var express = require("express");
var app = express();

//Link to add files in the public folder
app.use(express.static("public"));
//to make our server automatically figure out our ejs files
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");  
});

app.get("/fallinlove/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "susy"},
        {title: "wizkid day", author: "linda"},
        {title: "nddc scam", author: "nass"},
    ];
    res.render("posts", {posts: posts});
})


app.listen(3000, function(){
    console.log('server is running'); 
});