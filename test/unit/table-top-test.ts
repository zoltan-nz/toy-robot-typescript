import TableTop from '../../src/table-top';
import { expect } from 'chai';
import { flattenDeep, sum } from 'lodash';

describe('TableTop', () => {

  describe('#new without param', () => {

    const tableTop = new TableTop();

    it('should create a 5x5 matrix', () => {
      expect(tableTop.content).to.be.an('Array');
      expect(tableTop.width).to.be.eq(5);
      expect(tableTop.height).to.be.eq(5);
      expect(tableTop.content.length).to.be.equal(5);
      expect(tableTop.content[0].length).to.be.equal(5);
    });

    it('should contain only 0-s', () => {
      const flattened = flattenDeep(tableTop.content);
      const summarized = sum(flattened);

      expect(summarized).to.be.eq(0);
    });
  });

  describe('#new with one param - new TableTop(9)', () => {
    it('should create an 9x9 size matrix', () => {
      const tableTop = new TableTop(9);

      expect(tableTop.width).to.be.eq(9);
      expect(tableTop.height).to.be.eq(9);
      expect(tableTop.content.length).to.be.equal(9);
      expect(tableTop.content[0].length).to.be.equal(9);
    });
  });

  describe('#new with two params - new TableTop(8x3)', () => {
    it('should create an 8x3 size matrix', () => {
      const tableTop = new TableTop(8, 3);

      expect(tableTop.width).to.be.eq(3);
      expect(tableTop.height).to.be.eq(8);
      expect(tableTop.content.length).to.be.equal(8);
      expect(tableTop.content[0].length).to.be.equal(3);
    });
  });

  describe('#isBorder(y, x)', () => {
    it("should be false when not a border's coordinates", () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder(3, 3)).to.be.false;
    });

    it("should be true when a border's coordinates", () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder(0, 0)).to.be.true;
      expect(tableTop.isBorder(0, 3)).to.be.true;
      expect(tableTop.isBorder(3, 0)).to.be.true;
      expect(tableTop.isBorder(4, 2)).to.be.true;
      expect(tableTop.isBorder(2, 4)).to.be.true;
    });
  });
});
