var express = require('express');
var bodyparser = require('body-parser');

var route = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

route(app);

var server = app.listen(3000, function() {
    console.log('Server listening on port ' + server.address().port);
})
