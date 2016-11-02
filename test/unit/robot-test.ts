import Robot from '../../src/robot';
import { expect } from 'chai';

describe('Robot', () => {
  describe('#sayHello', () => {
    it('should introduce himself', () => {
      const robot = new Robot('Test');

      expect(robot.name).to.equal('Test');
    });
  });
});
