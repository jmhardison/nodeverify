////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

var http = require('http');
var express = require('express');
var config = require('./config');
var routes = require('./routes');

// consts //
let app = express();
let configInstance = new config();

app.server = http.createServer(app);

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + '\n');
});

//routes
app.use('/', routes);

// listen and binding setup //
app.server.listen(configInstance.port);
console.log(`Started API Service on port: ${app.server.address().port}`);

module.exports = app;