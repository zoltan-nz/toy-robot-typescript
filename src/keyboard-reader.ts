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

  private static exitWhenCtrlC(key: IKeys) {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  }

  public promise: Thenable<string>;
  private keyPressed: PressedKeysStream;

  constructor() {
    if (KeyboardReader.instance) {
      throw new Error('Error - use KeyReader.getInstance()');
    }

    readline.emitKeypressEvents(stdin);

    if (stdin.isTTY) {
      console.log('yes it is stdin.TTY');
      process.stdin.setRawMode(true);
    } else {
      console.log('NO TTY support');
    }

    this.keyPressed = new PressedKeysStream();

    this.promise = new Promise((resolve, reject) => {
      resolve('yey');
      reject('no');
    });

    this.startWatching();
  }

  private startWatching(): void {

    process.stdin.on('data', (data) => console.log('data', data));

    stdin.on('keypress', (data: string, key: IKeys) => {
      process.stdout.write(`keypresssed ${key}`);
      KeyboardReader.exitWhenCtrlC(key);
    });

    stdin.on('readable', () => {
      console.log('readable');
      this.keyPressed.push(stdin.read());
      Promise.resolve(this.promise);
    });
  }
}
