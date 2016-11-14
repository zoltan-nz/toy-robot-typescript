import Robot from './robot';
import * as fill from 'lodash/fill';

export default class Table {

  public content: Robot[][];

  constructor(public width: number = 5, public height: number = width) {
    this.content = fill(Array(height), fill(Array(width), null));
  }

  public isBorder(x: number, y: number): boolean {
    return (x === 0)
      || (x === this.width - 1)
      || (y === 0)
      || (y === this.height - 1);
  }

  public set(x: number, y: number, robot?: Robot): Robot | null {
    return this.content[y][x] = robot || null;
  }

  public get(x: number, y: number): Robot | null {
    return this.content[y][x];
  }
}
