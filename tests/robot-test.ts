import Robot from '../src/robot';
import { expect } from 'chai';

describe('Robot', () => {
  // beforeEach(() => {

  // });

  // afterEach(() => {

  // });

  describe('#sayHello', () => {
    it('should introduce himself', () => {
      const robot = new Robot('Test');

      expect(robot.introduceYourself()).to.equal("Hello, I'm Test. Great to meet you!");
    });
  });
});


