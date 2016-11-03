import Table from '../../src/table';
import { expect } from 'chai';
import { flattenDeep, sum } from 'lodash';

describe('Table', () => {

  describe('#new without param', () => {

    const table = new Table();

    it('should create a 5x5 matrix', () => {
      expect(table.content).to.be.an('Array');
      expect(table.width).to.be.eq(5);
      expect(table.height).to.be.eq(5);
      expect(table.content.length).to.be.equal(5);
      expect(table.content[0].length).to.be.equal(5);
    });

    it('should contain only 0-s', () => {
      const flattened = flattenDeep(table.content);
      const summarized = sum(flattened);

      expect(summarized).to.be.eq(0);
    });
  });

  describe('#new with one param - new Table(9)', () => {
    it('should create an 9x9 size matrix', () => {
      const table = new Table(9);

      expect(table.width).to.be.eq(9);
      expect(table.height).to.be.eq(9);
      expect(table.content.length).to.be.equal(9);
      expect(table.content[0].length).to.be.equal(9);
    });
  });

  describe('#new with two params - new Table(8x3)', () => {
    it('should create an 8x3 size matrix', () => {
      const table = new Table(8, 3);

      expect(table.width).to.be.eq(3);
      expect(table.height).to.be.eq(8);
      expect(table.content.length).to.be.equal(8);
      expect(table.content[0].length).to.be.equal(3);
    });
  });

  describe('#isBorder(y, x)', () => {
    it("should be false when not a border's coordinates", () => {
      const table = new Table();

      expect(table.isBorder(3, 3)).to.be.false;
    });

    it("should be true when a border's coordinates", () => {
      const table = new Table();

      expect(table.isBorder(0, 0)).to.be.true;
      expect(table.isBorder(0, 3)).to.be.true;
      expect(table.isBorder(3, 0)).to.be.true;
      expect(table.isBorder(4, 2)).to.be.true;
      expect(table.isBorder(2, 4)).to.be.true;
    });
  });
});
