import { fill } from 'lodash';

export default class Table {

  public content: number[][];

  public width: number;
  public height: number;

  constructor(height: number = 5, width: number = 5) {
    this.content = fill(Array(height), fill(Array(width), 0));

    this.width = width;
    this.height = height;
  }
}
