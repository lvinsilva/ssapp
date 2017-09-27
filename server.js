var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
   console.log('SSAPP');
   console.log('Server port: ' + app.get('port'));
});