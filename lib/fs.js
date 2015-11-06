'use strict';

var fs = require('fs');
var path = require('path');

var pfs = {};

function cb (resolve, reject, callback) {
  return function (err, data) {
    if(callback) {
      callback(err, data);
    } else if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  }
}

pfs.rename = function (oldPath, newPath, callback) {
  return new Promise(function (resolve, reject) {
    fs.rename(oldPath, newPath, cb(resolve, reject, callback));
  });
};

pfs.renameSync = fs.renameSync;

pfs.ftruncate = function (fd, len, callback) {
  return new Promise(function (resolve, reject) {
    fs.ftruncate(fd, len, cb(resolve, reject, callback));
  });
};

pfs.ftruncateSync = fs.ftruncateSync;

pfs.truncate = function (path, len, callback) {
  return new Promise(function (resolve, reject) {
    fs.truncate(path, len, cb(resolve, reject, callback));
  });
}

pfs.truncateSync = fs.truncateSync;

pfs.readdir = function (path, callback) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, cb(resolve, reject, callback));
  });
};

pfs.readdirSync = fs.readdirSync;

pfs.stat = function (path, callback) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, cb(resolve, reject, callback));
  });
};

pfs.statSync = fs.statSync;

module.exports = pfs;
