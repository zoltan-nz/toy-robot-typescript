import * as readline from 'readline';

export default class ScreenWriter {

  public static getInstance(): ScreenWriter {
    ScreenWriter.instance = ScreenWriter.instance || new ScreenWriter();
    return ScreenWriter.instance;
  }

  private static instance: ScreenWriter;

  constructor() {
    if (ScreenWriter.instance) {
      throw new Error('Error - use ScreenWriter.getInstance()');
    }
  }

  public write(str: string) {
    return process.stdout.write(str);
  }

  public clear(): void {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  }
}
