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
});
