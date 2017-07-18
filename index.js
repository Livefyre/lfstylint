#!/usr/bin/env node

var stylint = require('stylint');
var config = require('./config.json');
stylint(process.argv.length > 2 ? process.argv.slice(2) : process.cwd(), config).create();
