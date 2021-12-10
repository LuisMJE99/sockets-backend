var express = require('express');
var app = express();
var server = require('http').Server(app);


var io = require('http');
app.get('/', function(req, res){
 res.status(200).send("Hola Mundo");
});

io.on('conection', function(socket){
    console.log("se a conectdo con socket")
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en el puerto 3002")
});