'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('../config/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapRoutes = function mapRoutes(app) {
  _routes2.default.map(function (route) {
    return app[route.method](route.path, route.callback);
  });
};

exports.default = mapRoutes;