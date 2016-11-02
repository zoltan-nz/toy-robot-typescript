import Table from '../../src/table';
import { expect } from 'chai';

describe('Table', () => {
  describe('#new', () => {
    it('should create a 5x5 array as default', () => {
      const table = new Table();

      expect(table.content).to.be.an('Array');
      expect(table.width).to.be.eq(5);
      expect(table.height).to.be.eq(5);
    });
  });
  describe('#new Table(7,7)', () => {
    it('should create a 7x7 array', () => {
      const table = new Table(7,7);

      expect(table.width).to.be.eq(7);
      expect(table.height).to.be.eq(7);
    });
  });
});
