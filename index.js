class BoardMember {
  // `name`, `homeState`, and `training`.
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  // Add following methods to the class:
  // - `veto` — returns `No, I must disagree`
  veto() {
    return `No, I must disagree`;
  }

  // - `approve` — returns `You can do that!`
  approve() {
    return `You can do that!`;
  }

  // - `doCharity` — returns `I like to help people.`
  doCharity() {
    return `I like to help people.`;
  }

  // - `releasePressStatement` — returns `You will see great things from Scuber.`
  releasePressStatement() {
    return `You will see great things from Scuber.`;
  }

  // - `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`
  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }
}
