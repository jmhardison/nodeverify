////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var Router = express.Router;


module.exports = ({config}) => {
    let api = Router();
    
    // general
    api.get('/', (req, res) => {
        res.json({status: "running"}).status(200);
    });
    
    return api;
}