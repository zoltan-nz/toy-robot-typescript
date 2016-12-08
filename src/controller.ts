import Robot from './robot';
import { Directions } from './robot';
import Table from './table-top';

export default class Command {

  private robot: Robot;
  private table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  public execute(command: string): void {

    if (this.robot) {
      switch (command) {
        case 'LEFT':
          this.robot.turnLeft();
          break;
        case 'RIGHT':
          this.robot.turnRight();
          break;
        case 'MOVE':
          this.robot.move();
          break;
        case 'REPORT':
          console.log(this.robot.toString());
          break;
        default:
      }
    }

    if (command === 'PLACE' && !this.robot) {
      this.robot = new Robot({position: {x: 3, y: 3}, direction: Directions.EAST});
    }
  }
}
