import * as process from 'process';
import * as readline from 'readline';
import * as tty from 'tty';

declare interface IKeys {
  sequence: string;
  name: string;
  ctrl: boolean;
  meta: boolean;
  shift: boolean;
}

// Missing type declaration in process.stdin
const stdin = <tty.ReadStream> process.stdin;

// Missing type declaration in readline package
declare module 'readline' {
  export function emitKeypressEvents(stream: NodeJS.ReadableStream, interface?: ReadLine): void;
}

export default class KeyReader {

  public static getInstance(): KeyReader {
    KeyReader.instance = KeyReader.instance || new KeyReader();
    return KeyReader.instance;
  }

  private static instance: KeyReader;

  constructor() {
    if (KeyReader.instance) {
      throw new Error('Error - use KeyReader.getInstance()');
    }

    readline.emitKeypressEvents(stdin);

    if (stdin.isTTY) {
      stdin.setRawMode(true);
    }

    this.watchKeypress();
  }

  private watchKeypress() {
    stdin.on('keypress', (data: string, key: IKeys) => {
      this.exitWhenCtrlC(key);
    });
  }

  private exitWhenCtrlC(key: IKeys) {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  }
}
