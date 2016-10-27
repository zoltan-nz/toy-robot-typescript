class Robot {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public introduceYourself() {
    return `Hello, I'm ${this.name}. Great to meet you!`;
  }
}

export default Robot;
