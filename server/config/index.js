'use strict';

var path;
var rootPath;
var config;

path = require('path');
rootPath = path.normalize(path.join(__dirname, '..', '..'));

config = {
  host: process.env.API_HOST || '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 5000,
  hapi: {
    options: {
      routes: {
        payload: {
          parse: true,
          allow: 'application/json'
        },
        cors: true
      }
    }
  },
  env: (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development',
  app: {
    userType: process.env.USER_TYPE || 'Advisor'
  },
  debug: false
};

if ('development' === config.env) {
  config.debug = true;
}

module.exports = config;
