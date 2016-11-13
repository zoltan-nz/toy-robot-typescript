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
}
