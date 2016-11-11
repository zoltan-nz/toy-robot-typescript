import Robot from '../../src/robot';
import TableTop from '../../src/table-top';
import { expect } from 'chai';

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

    it('should contain only null-s', () => {
      tableTop.content = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ];
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

  describe('#set(x, y, robot?)', () => {
    it('stores the robot on given coordinates', () => {
      const tableTop: TableTop = new TableTop();
      const robot: Robot = new Robot();

      tableTop.set(0, 0, robot);

      const firstRow = tableTop.content[0];
      expect(firstRow).to.deep.equal([robot, null, null, null, null]);
    });

    describe('#get(x, y)', () => {
      it('returns the actual value of a coordinate', () => {
        const tableTop: TableTop = new TableTop();
        const robot: Robot = new Robot();

        expect(tableTop.get(3, 3)).to.be.null;

        tableTop.set(3, 3, robot);
        expect(tableTop.get(3, 3)).to.be.eq(robot);
      });
    });
  });
});
