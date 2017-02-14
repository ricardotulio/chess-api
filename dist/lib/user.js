'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buildUser = function buildUser(username, password) {
  return {
    type: 'User',
    username: username,
    password: password
  };
};

exports.default = buildUser;