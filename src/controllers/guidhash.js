////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

var config = require('../config');
var express = require('express');
var Router = express.Router;
const { v4: uuidv4 } = require('uuid');
var crypto = require('crypto');
var os = require("os");
let configInstance = new config();

module.exports = ({inconfig}) => {
    let api = Router();
    
    // general
    api.get('/', (req, res) => {
            var uuidstring = uuidv4();
            var epoctime = Date.now();
            var currentplatform = os.platform();
            var currenthostname = os.hostname();
            var currentarchitecture = os.arch();

            var hash = crypto.createHash(configInstance.hashalgorithm).update(uuidstring).digest("hex");
            res.json({UserID: uuidstring, HashedUserID: hash, EPOC: epoctime, Platform: currentplatform, Architecture: currentarchitecture, Hostname: currenthostname}).status(200);
            
    });

    // general with inbound userid
    api.get('/:userid', (req, res) => {

        if((req.params.userid != null) || (req.params.userid != 'undefined')){
            var epoctime = Date.now();
            var currentplatform = os.platform();
            var currenthostname = os.hostname();
            var currentarchitecture = os.arch();

            var hash = crypto.createHash(configInstance.hashalgorithm).update(req.params.userid).digest("hex");
            res.json({UserID: req.params.userid, HashedUserID: hash, EPOC: epoctime, Platform: currentplatform, Architecture: currentarchitecture, Hostname: currenthostname}).status(200);
        }
    });
    
    return api;
}