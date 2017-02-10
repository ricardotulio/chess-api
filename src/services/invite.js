import Player from '../models/player';
import Invite from '../models/invite';

export default class InviteService {
  static create(invite) {
  }

  static find(params) {
    const playerOne = new Player()
      .withID(1)
      .withName('John');

    const playerTwo = new Player()
      .withID(2)
      .withName('Jennifer');

    const invite = new Invite();
    invite.from(playerOne);
    invite.to(playerTwo);

    return invite;
  }
}
