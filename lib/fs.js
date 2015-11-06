'use strict';

var fs = require('fs');

var pfs = {};

pfs.rename = function(oldPath, newPath, callback) {
  return new Promise(function (resolve, reject) {
    fs.rename(oldPath, newPath, function (err) {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

pfs.renameSync = fs.renameSync;

module.exports = pfs;
