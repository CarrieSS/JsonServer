'use strict';

module.exports = function () {
  var routers,
    routes;

  routers = [
    './jsonreader',
    './jsongenerator',
  ];

  routes = [];

  routers.forEach(function (route) {
    var tempRoute;
    try {
      tempRoute = require(route);
      routes = routes.concat(tempRoute);
    } catch (e) {
      console.error('Unable to load route:', route, e);
    }
  });

  return routes;
};
