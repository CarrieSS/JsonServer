'use strict';

var handlers;
var helpers;
var path; 

path = require('path');

helpers = {
  searchFileByCode: function(code) {
    var fileEn;
    var fileFr;

    try {
      var cachePath1 = path.normalize(path.join(__dirname, '..', '..')) + '\\server\\json\\' + code + '-en.i18n.json';
      console.log("Cache:    " + cachePath1);
      delete require.cache[cachePath1];
      fileEn = require('../json/' + code + '-en.i18n.json');
    }
    catch (error) {
      fileEn = require('../json/default-en.i18n.json');
    }

    try {
      var cachePath2 = path.normalize(path.join(__dirname, '..', '..')) + '\\server\\json\\' + code + '-fr.i18n.json';
      console.log("Cache:    " + cachePath2);
      delete require.cache[cachePath2];
      fileFr = require('../json/' + code + '-fr.i18n.json');
    }
    catch (error) {
      fileFr = require('../json/default-fr.i18n.json');
    }

    var files = {
      FileEn: JSON.parse(JSON.stringify(fileEn)),
      FileFr: JSON.parse(JSON.stringify(fileFr))
    };

    return files;
  }
};

handlers = {
  get: function (request, reply) {
    var files = helpers.searchFileByCode(request.query.comCode);
    reply(files);
  }
};

module.exports.handlers = handlers;
module.exports.helpers = helpers;
