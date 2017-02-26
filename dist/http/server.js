'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGODB_HOST = process.env.MONGODB_HOST || 'mongo';
var MONGODB_PORT = process.env.MONGODB_PORT || 27017;
var MONGODB_USER = process.env.MONGODB_USER || 'chess';
var MONGODB_PASS = process.env.MONGODB_PASS || 'chess';

var server = (0, _express2.default)();

server.use(_bodyParser2.default.json());
server.use(_bodyParser2.default.urlencoded({ extended: true }));
server.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allol-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Authorization,Pragma');
  next();
});

var listen = function listen(port) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var uri = 'mongodb://' + MONGODB_USER + ':' + MONGODB_PASS + '@' + MONGODB_HOST + ':' + MONGODB_PORT + '/chess';
  var options = { promiseLibrary: _bluebird2.default };

  _mongoose2.default.createConnection(uri, options);

  _mongoose2.default.connection.on('open', function () {
    (0, _router2.default)(server);
    server.listen(port, callback);
  });
};

exports.default = {
  listen: listen
};