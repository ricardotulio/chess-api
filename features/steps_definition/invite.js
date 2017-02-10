import { defineSupportCode } from 'cucumber';
import assert from 'assert';
import Player from '../../src/models/player';
import Invite from '../../src/models/invite';
import InviteService from '../../src/services/invite';

defineSupportCode(function({Given, When, Then}) {
  const newInvite = new Invite();
  let playerOne
    , playerTwo;

  Given('a player named {name}', function(name) {
    playerOne = new Player()
      .withID(1)
      .withName(name);

    newInvite.from(playerOne);
  });

  Given('another player named {name}', function(name) {
    playerTwo = new Player()
      .withID(2)
      .withName(name);

    newInvite.to(playerTwo);
    console.log(newInvite);
  });

  When('{playerOne} invite {playerTwo}', function(playerOne, playerTwo) {
    InviteService.create(newInvite);
  });

  Then('{playerTwo} must receive the invite', function(playerTwo) {
    const invite = InviteService.find({to: playerTwo});
    assert.equal(invite.from().getID, 1);
    assert.equal(invite.to().getID, 2);
  });
});
