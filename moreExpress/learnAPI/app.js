var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res){
    request("http://api.nytimes.com/svc/movies/v2/reviews/search.json", function(error, response, body){
        if(!error && response.statusCode == 200) {
            res.send(body);
        }
    })
});










app.listen(3000, function() {
    console.log("movie App has started");
});
