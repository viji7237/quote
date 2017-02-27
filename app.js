var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server started in port ', port);
})

