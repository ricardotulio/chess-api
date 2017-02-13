'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./http/router');

var _routes = require('./config/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _router.mapRoutes)(app, _routes.routes);

app.listen(80);