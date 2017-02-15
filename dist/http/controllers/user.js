'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../../database/models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(req, res) {
  _user2.default.findById(req.params.userId).then(function (user) {
    res.send(user);
  });
};

var post = function post(req, res) {
  var user = new _user2.default();
  user.username = req.body.username;
  user.password = req.body.password;

  user.save().then(function () {
    res.send(user);
  });
};

exports.default = {
  get: get,
  post: post
};