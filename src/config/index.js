////////////////////////////////////////
// nodeverify
// Copyright (c) 2019 Jonathan Hardison
////////////////////////////////////////

'use strict'; 
class Config{

 constructor(){
    this.port = process.env.PORT || 3005;
    this.hashsecret = process.env.HASHSECRET || "hashme";
    this.hashalgorithm = process.env.HASHALGORITHM || "sha256";
 }

}
module.exports = Config;