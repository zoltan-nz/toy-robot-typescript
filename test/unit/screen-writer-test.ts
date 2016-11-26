import ScreenWriter from '../../src/screen-writer';
import { expect } from 'chai';

describe('ScreenWriter', () => {
  describe('#new', () => {
    it('should be a singleton', () => {
      const instanceOne = ScreenWriter.getInstance();
      const instanceTwo = ScreenWriter.getInstance();

      expect(instanceOne).to.eq(instanceTwo);
    });
  });

  describe('#write', () => {
    xit('TODO should write string on the screen', (done) => {
    //  I tried more approach, no success yet... any idea?
    });
  });
});
