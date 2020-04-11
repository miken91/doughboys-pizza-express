var express = require('express');
var cors = require('cors');
var port = process.env.PORT || 8080;
var app = express();
app.use(cors())
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
 console.log('Example app listening on port !');
});