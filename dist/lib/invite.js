'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buildInvite = exports.buildInvite = function buildInvite(from, to) {
  return {
    type: 'Invite',
    from: from,
    to: to
  };
};