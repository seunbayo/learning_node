var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof woof woof",
        cat: "I hate you",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase;
    var sound = sounds[animal];
    /* if(animal === "pig") {
        sound = "oink"
    }else if(animal === "cow"){
        sound = "moo";
    } */
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req,res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++){
        result+= message + " ";
    }
    res.send(result); 
});

app.get('*', function(req, res){
    res.send("sorry page not found");
});


app.listen(3000, function(){
    console.log('App is running successfullly');
});