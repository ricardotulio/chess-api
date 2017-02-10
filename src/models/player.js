export default class Player {
  getID() {
    return this.id;
  }

  withID(id) {
    this.id = id;
    return this;
  }

  getName() {
    return this.name;
  }

  withName(name) {
    this.name = name;
    return this;
  }
}
