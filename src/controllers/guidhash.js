////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

var config = require('../config');
var express = require('express');
var Router = express.Router;
var uuidv4 = require('uuid/v4');
var crypto = require('crypto');
let configInstance = new config();

module.exports = ({inconfig}) => {
    let api = Router();
    
    // general
    api.get('/', (req, res) => {
            var uuidstring = uuidv4();
            var epoctime = Date.now();
            var platform = process.platform;

            var hash = crypto.createHash(configInstance.hashalgorithm).update(uuidstring).digest("hex");
            res.json({UserID: uuidstring, HashedUserID: hash, EPOC: epoctime, Platform: platform}).status(200);
            
    });

    // general with inbound userid
    api.get('/:userid', (req, res) => {

        if((req.params.userid != null) || (req.params.userid != 'undefined')){
            var epoctime = Date.now();
            var hash = crypto.createHash(configInstance.hashalgorithm).update(req.params.userid).digest("hex");
            res.json({UserID: req.params.userid, HashedUserID: hash, EPOC: epoctime, Platform: platform}).status(200);
        }
    });
    
    return api;
}