'use strict';

var controller = require('../controllers/jsonreader');

module.exports = [
  {
    method: 'GET',
    path: '/getClientSettings',
    handler: controller.handlers.get
  }
];