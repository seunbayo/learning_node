var request = require('request');
request('www.google.com', function(error, response, body) {
    if(!error && responsestatusCode == 200){
        console.log(body);
    } 
});