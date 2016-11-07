    var url = require('url');
    var express = require('express');
    var app = express();

    app.get("*", function(req, res) {
        var IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var language = req.headers["accept-language"].split(",")[0];
        var OS = req.headers["user-agent"].match(/\((.*?)\)/)[1];
        
        
        var jsonResponse = JSON.stringify(
            { 
                ipaddress: IP,
                language: language,
                software: OS
                
            });
        res.end(jsonResponse);
    })
    app.listen(process.env.PORT || 8080);