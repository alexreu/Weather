var express = require('express');
var app = express();
var port = 3012;
var request = require('request');
var weather = require('./weather.js');

app.use(express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})

app.get('/test', function (req, res) {
    weather.weather(function(data){
        res.send(data);
    })
});


app.listen(port, function(){
    console.log('Server ON / Port:'+ '  ' +port)
});