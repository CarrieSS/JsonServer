'use strict';

var controller = require('../controllers/jsongenerator');

module.exports = [
  {
    method: 'POST',
	path: '/saveClientChanges/{CompCode}',
    handler: controller.handlers.post
  }
];