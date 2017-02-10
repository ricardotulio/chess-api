import Player from './player';

export default class Invite {
  from(player = undefined) {
    if(!player instanceof Player)
      return this._from;
    this._from = player;
  }

  to(player = undefined) {
    if(!player instanceof Player)
      return this._to;
    this._to = player;
  }
}
