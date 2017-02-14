'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../http/controllers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/user/:userId',
  method: 'get',
  callback: _user2.default.get
}, {
  path: '/user',
  method: 'post',
  callback: _user2.default.post
}];

exports.default = routes;