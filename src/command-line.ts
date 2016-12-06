import * as process from 'process';
import { ReadLine, ReadLineOptions } from 'readline';
import { Readable } from 'stream';
import * as tty from 'tty';

// Missing type declaration in process.stdin
const stdin = <tty.ReadStream> process.stdin;
const stdout = <tty.WriteStream> process.stdout;


export default class CommandLine {

  private rl: ReadLine;

  constructor() {
    const options: ReadLineOptions = {
      input: stdin,
      output: stdout,
      terminal: false,
    };

    this.rl = require('readline').createInterface(options);
  }

  public nextCommand(): Promise<string> {
    this.rl.prompt(true);

    return new Promise((resolve, reject) => {
      this.rl.on('line', (line) => {
        resolve(line);
      });
      this.rl.on('error', (error) => reject(error));
    });
  }
}
