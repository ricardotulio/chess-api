'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapRoutes = undefined;

var _routes = require('./routes');

var mapRoutes = exports.mapRoutes = function mapRoutes(app) {
  _routes.routes.map(function (route) {
    app[route.method](route.path, route.callback);
  });
};