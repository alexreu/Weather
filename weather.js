var express = require('express');
var request = require('request');

exports.weather = function (cb){
    request.get("http://api.openweathermap.org/data/2.5/group?id=935317,2988507,2995469,524901&units=metric&APPID=d5110412a7ec4283032b497e941db621", function(err, res, body){
        var json = JSON.parse(body);
        console.log(json);
        return cb(json);
    });
};