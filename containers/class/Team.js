export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(item) {
    this.members.add(item);
  }

  addAll(...items) {
    items.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
