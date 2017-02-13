'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var get = function get(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ "id": 1, "username": "john.snow", "password": "123456", "createdAt": "14/06/1991", "updatedAt": "14/06/1991" }));
};

var post = function post(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ "id": 1, "username": "john.snow", "password": "123456", "createdAt": "14/06/1991", "updatedAt": "14/06/1991" }));
};

exports.default = {
  get: get,
  post: post
};