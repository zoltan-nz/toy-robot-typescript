import { IPosition } from './table-top';

export const enum Directions {
  'NORTH',
  'EAST',
  'SOUTH',
  'WEST',
}

export interface IRobotOptions {
  position: IPosition;
  direction: Directions;
}

export default class Robot {

  public name: string;
  public direction: Directions;
  private position: IPosition;

  constructor(options: IRobotOptions) {
    this.position = options.position;
    this.direction = options.direction;
  }

  public turnLeft(): Directions {
    const newDirection: Directions = this.direction === Directions.NORTH ? Directions.WEST : this.direction - 1;
    return this.direction = newDirection;
  }

  public turnRight(): Directions {
    const newDirection: Directions = this.direction === Directions.WEST ? Directions.NORTH : this.direction + 1;
    return this.direction = newDirection;
  }

  public move(): boolean {
    switch (this.direction) {
      case Directions.NORTH:
        --this.position.y;
        break;
      case Directions.EAST:
        ++this.position.x;
        break;
      case Directions.SOUTH:
        ++this.position.y;
        break;
      case Directions.WEST:
        --this.position.x;
        break;
      default:
    }
    return true;
  }

  public toString() {
    return `${this.position.x}, ${this.position.y}, ${this.direction}`;
  }
}
