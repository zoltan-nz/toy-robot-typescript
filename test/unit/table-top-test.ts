import { expect } from 'chai';
import TableTop from '../../src/table-top';

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

  describe('#new with two params - new TableTop(3x8)', () => {
    it('should create an 3x8 size matrix', () => {
      const tableTop = new TableTop(3, 8);

      expect(tableTop.width).to.be.eq(3);
      expect(tableTop.height).to.be.eq(8);
      expect(tableTop.content.length).to.be.equal(8);
      expect(tableTop.content[0].length).to.be.equal(3);
    });
  });

  describe('#isBorder(x, y)', () => {
    it("should be false when not a border's coordinates", () => {
      const tableTop = new TableTop();
      const pos = {x: 3, y: 3};

      expect(tableTop.isBorder(pos)).to.be.false;
    });

    it("should be true when a border's coordinates", () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder({x: 0, y: 0})).to.be.true;
      expect(tableTop.isBorder({x: 0, y: 3})).to.be.true;
      expect(tableTop.isBorder({x: 3, y: 0})).to.be.true;
      expect(tableTop.isBorder({x: 4, y: 2})).to.be.true;
      expect(tableTop.isBorder({x: 2, y: 4})).to.be.true;
    });

    it('should be false when not border coordinates', () => {
      const tableTop = new TableTop();

      expect(tableTop.isBorder({x: 1, y: 1})).to.be.false;
      expect(tableTop.isBorder({x: 3, y: 3})).to.be.false;
    });
  });
});
