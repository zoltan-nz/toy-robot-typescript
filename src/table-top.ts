import { fill } from 'lodash';

export default class Table {

  public content: number[][];

  constructor(public height: number = 5, public width: number = height) {
    this.content = fill(Array(height), fill(Array(width), 0));
  }

  public isBorder(y: number, x: number): boolean {
    return (y === 0)
      || (y === this.height - 1)
      || (x === 0)
      || (x === this.width - 1);
  }
}
