'use strict';

var config;
var path;
var logEvents;
var goodOptions;

config = require('./index');
path = require('path');

logEvents = {
  response: '*',
  log: '*',
  request: '*',
  'request-internal': '*',
  error: '*',
  model: '*'
};

goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [logEvents]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

module.exports = [
  {
    register: require('good'),
    options: goodOptions
  }
];
