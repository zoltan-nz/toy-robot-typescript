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

  public write(str: string): void {
    process.stdout.write(str);
  }

  public clear(): void {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  }

  //   readline.cursorTo(process.stdout, 0, 0);
  //   readline.clearScreenDown(process.stdout);

  //   readline.emitKeypressEvents(process.stdin);

  //   console.log(table.toString());

  //   if(process.stdin.isTTY)
  //   process.stdin.setRawMode(true);

  // console.log(`${process.stdout.columns}x${process.stdout.rows}`);

  // process.stdout.on('resize', () => {
  //   readline.cursorTo(process.stdout, 0, 0);
  //   readline.clearScreenDown(process.stdout);
  //   console.log('screen size has changed!');
  //   console.log(`${process.stdout.columns}x${process.stdout.rows}`);
  // });
}
