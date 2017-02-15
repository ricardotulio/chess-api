'use strict';

var _server = require('./http/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTP_PORT = process.env.HTTP_PORT || 8888;

_server2.default.listen(HTTP_PORT);