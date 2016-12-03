import * as process from 'process';
import * as readline from 'readline';
import { Readable } from 'stream';
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
const stdout = <tty.WriteStream> process.stdout;

// Missing type declaration in readline package
declare module 'readline' {
  export function emitKeypressEvents(stream: NodeJS.ReadableStream, interface?: ReadLine): void;
}

class PressedKeysStream extends Readable {
  constructor(options?) {
    super(options);
  }

  protected _read(size: number) {
    this.push('', 'utf8');
  }
}

export default class KeyboardReader {

  public static getInstance(): KeyboardReader {
    KeyboardReader.instance = KeyboardReader.instance || new KeyboardReader();
    return KeyboardReader.instance;
  }

  private static instance: KeyboardReader;

  private static isCtrlC(key: IKeys): boolean {
    return key.ctrl && key.name === 'c';
  }

  private isTTY: boolean;

  constructor() {
    if (KeyboardReader.instance) {
      throw new Error('Error - use KeyReader.getInstance()');
    }

    readline.emitKeypressEvents(stdin);

    // not TTY environment keypresses sent after hitting enter
    this.isTTY = stdin.isTTY;

    if (this.isTTY) {
      stdin.setRawMode(true);
    }
  }

  public readNextKey(): Promise<string> {

    return new Promise((resolve, reject) => {
      stdin.on('keypress', (data: string, key: IKeys) => {
        console.log('key pressed', key);
        if (KeyboardReader.isCtrlC(key)) reject(process.exit(0));
        resolve(key.sequence);
      });
    });
  }
}
