var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    api = require('./api'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../src')));

app.get('/recipes', api.getAll);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});