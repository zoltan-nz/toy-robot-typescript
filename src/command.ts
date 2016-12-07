// PLACE X,Y,F
// PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
//   The origin (0,0) can be considered to be the SOUTH WEST most corner.
//   The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued,
// in any order, including another PLACE command. The application should discard all commands in the sequence until
// a valid PLACE command has been executed.
//   MOVE
// MOVE will move the toy robot one unit forward in the direction it is currently facing.
//   LEFT, RIGHT
// LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing
// the position of the robot.
//   REPORT
// REPORT w
import { includes } from 'lodash';

const COMMANDS = [
  'PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT',
];

export default class Command {

  constructor(public commandLine: string) {
  }

  public isValid(): boolean {
    return includes(COMMANDS, this.commandLine);
  }
}
