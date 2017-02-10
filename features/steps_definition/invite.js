import { defineSupportCode } from 'cucumber';
import assert from 'assert';
import { buildPlayer } from '../../src/models/player';
import { buildInvite } from '../../src/models/invite';

defineSupportCode(function({Given, When, Then}) {
  let from
    , to
    , invite;

  Given('a player named {from}', function(name) {
    playerOne = buildPlayer(1, name);
  });

  Given('another player named {name}', function(name) {
    playerTwo = buildPlayer(2, name);
  });

  When('{nameOne} invite {nameTwo}', function(fromName, toName) {
    invite = buildInvite(from, to);
  });

  Then('{playerTwo} must receive the invite', function(playerTwo) {
  });
});
