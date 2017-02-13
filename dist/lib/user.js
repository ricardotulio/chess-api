'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUser = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildUser = exports.buildUser = _ramda2.default.curry(function (username, password) {
  return {
    type: 'User',
    username: username,
    password: password
  };
});