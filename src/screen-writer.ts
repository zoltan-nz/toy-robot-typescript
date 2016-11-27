import { stdout } from 'process';
import * as readline from 'readline';
import WritableStream = NodeJS.WritableStream;

export default class ScreenWriter {

  public static getInstance(output: WritableStream = stdout): ScreenWriter {
    ScreenWriter.instance = ScreenWriter.instance || new ScreenWriter(output);
    return ScreenWriter.instance;
  }

  public static reset(): void {
    ScreenWriter.instance = null;
  }

  private static instance: ScreenWriter;

  constructor(public output: WritableStream) {
    if (ScreenWriter.instance) {
      throw new Error('Error - use ScreenWriter.getInstance()');
    }
  }

  public write(str: string) {
    return this.output.write(str);
  }

  public clear(): void {
    readline.cursorTo(this.output, 0, 0);
    readline.clearScreenDown(this.output);
  }
}
