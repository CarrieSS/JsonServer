'use strict';

var handlers;
var helpers;
var fs;

fs = require('fs');

helpers = {
  saveFile: function(code, objEn, objFr) {
    var message = '';
    var checkEn = 0;
    var checkFr = 0;

    try {
      fs.writeFile('./server/json/' + code + '-en.i18n.json', JSON.stringify(objEn), 'utf8', function(err){
        if (err) throw (err);
      });
    } catch (err) {
      console.log('Unable to save English version: ', err);
    } finally {
      checkEn = 1;
    }

    try {
      fs.writeFile('./server/json/' + code + '-fr.i18n.json', JSON.stringify(objFr), 'utf8', function(err){
        if (err) throw (err);
      });
    } catch (err) {
      console.log('Unable to save French version: ', err);
    } finally {
      checkFr = 1;
    }

    if (checkEn === 1 && checkFr === 1) {
      message = 'Changes have been saved.';
    }

    return message;

  }
};

handlers = {
  post: function (request, reply) {
    const companyCode = request.params.CompCode;
    const jsonObjectEn = request.payload.JsonObjectEn;
    const jsonObjectFr = request.payload.JsonObjectFr;

    const files = helpers.saveFile(
                  companyCode,
                  jsonObjectEn,
                  jsonObjectFr
                );
    reply(files);
  }
};

module.exports.handlers = handlers;
module.exports.helpers = helpers;
