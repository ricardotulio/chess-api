'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../http/controllers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [];

var addRoute = function addRoute(path, method, callback) {
  routes.push({
    type: 'Route',
    path: path,
    method: method,
    callback: callback
  });
};

addRoute('/user', 'get', _user2.default.getList);
addRoute('/user/:userId', 'get', _user2.default.get);
addRoute('/user', 'post', _user2.default.post);

exports.default = routes;