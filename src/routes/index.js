////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

var express = require('express');
var config = require('../config');

//import initializeDB from '../db';
var statusController = require('../controllers/status');
var guidHashController = require('../controllers/guidhash');

let router = express();

//middleware

// v1 //
var v1Base = "/v1";

router.use(`${v1Base}/status`, statusController({config}));
router.use(`${v1Base}/guidhash`, guidHashController({config}));

module.exports = router;