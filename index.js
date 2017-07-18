#!/usr/bin/env node

var stylint = require('stylint');
var config = require('./config.json');
if (process.argv.length > 2) {
  stylint().create({}, config, process.argv.slice(2));
} else {
  stylint(process.cwd(), config).create();
}
