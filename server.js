'use strict';

var Hapi;
var server;
var config;
var plugins;
var routes;
var fs

fs = require('fs');

config = require('./server/config');
plugins = require('./server/config/plugins');
Hapi = require('hapi');
server = new Hapi.Server();
routes = require('./server/routes');

// Setup server connection
server.connection({
  host: config.host,
  port: config.port,
  routes: config.hapi.options.routes
});

// Register plugins, routes, etc.
server
  .register(plugins, function(err) {
    if (err) {
      throw err;
    }

    server.start(function() {
      // Load routes
      server.route(require('./server/routes')(server));

      console.log('Hapi server started @ ' + server.info.uri.replace('0.0.0.0', 'localhost'));
    });
  });
