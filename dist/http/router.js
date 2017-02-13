'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapRoutes = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapRoutes = exports.mapRoutes = _ramda2.default.curry(function (app, routes) {
  routes.map(function (route) {
    app[route.method](route.path, route.callback);
  });
});