export const enum Directions {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

export interface IRobotOptions {
  direction?: Directions;
  name?: string;
}

export default class Robot {

  public name: string;
  public direction: Directions;

  constructor(options: IRobotOptions = {}) {
    const mergedOptions = { direction: options.direction || Directions.NORTH, name: options.name || 'Robot' };
    this.name = mergedOptions.name;
    this.direction = mergedOptions.direction;
  }
}
