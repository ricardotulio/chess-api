'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../models/player');

var _player2 = _interopRequireDefault(_player);

var _invite = require('../models/invite');

var _invite2 = _interopRequireDefault(_invite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InviteService = function () {
  function InviteService() {
    _classCallCheck(this, InviteService);
  }

  _createClass(InviteService, null, [{
    key: 'create',
    value: function create(invite) {}
  }, {
    key: 'find',
    value: function find(params) {
      var playerOne = new _player2.default().withID(1).withName('John');

      var playerTwo = new _player2.default().withID(2).withName('Jennifer');

      var invite = new _invite2.default();
      invite.from(playerOne);
      invite.to(playerTwo);

      return invite;
    }
  }]);

  return InviteService;
}();

exports.default = InviteService;