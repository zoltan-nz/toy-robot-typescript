import ScreenWriter from '../../src/screen-writer';
import { expect } from 'chai';
import { MockWritable, stdio } from 'stdio-mock';

describe('ScreenWriter', () => {

  afterEach(() => {
    ScreenWriter.reset();
  });

  describe('#new', () => {
    it('should be a singleton', () => {
      const instanceOne = ScreenWriter.getInstance();
      const instanceTwo = ScreenWriter.getInstance();

      expect(instanceOne).to.eq(instanceTwo);

    });
  });

  describe('#write', () => {
    it('should write string on the screen', (done) => {
      const writerMock = new MockWritable();
      const message = 'hello world';

      writerMock.on('data', data => {
        expect(data).to.eq(message);
        done();
      });

      const screenWriter = ScreenWriter.getInstance(writerMock);
      screenWriter.write(message);
    });
  });

  describe('#clear', () => {
    it('should clear the whole screen', (done) => {
      const writerMock = new MockWritable();
      const expected = '\u001b[1;1H'; // Clear screen escape chars

      writerMock.on('data', data => {
        expect(data).to.eq(expected);
        done();
      });

      const screenWriter = ScreenWriter.getInstance(writerMock);
      screenWriter.clear();
    });
  });
});
