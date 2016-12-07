import Command from "command";
import Robot from './robot';
import TableTop from './table-top';

export interface IController {
  table: TableTop;
  robot: Robot;
}

export default class Controller {

  public static getInstance(models: IController): Controller {
    Controller.instance = Controller.instance || new Controller(models);
    return Controller.instance;
  }

  private static instance: Controller;

  constructor(models: IController) {
    if (Controller.instance) {
      throw new Error('Error - use ScreenWriterController..getInstance()');
    }
  }

  public execute(command: Command) {

  }
}
