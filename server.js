var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});