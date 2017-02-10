'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Invite = function () {
  function Invite() {
    _classCallCheck(this, Invite);
  }

  _createClass(Invite, [{
    key: 'from',
    value: function from() {
      var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!player instanceof _player2.default) return this._from;
      this._from = player;
    }
  }, {
    key: 'to',
    value: function to() {
      var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!player instanceof _player2.default) return this._to;
      this._to = player;
    }
  }]);

  return Invite;
}();

exports.default = Invite;