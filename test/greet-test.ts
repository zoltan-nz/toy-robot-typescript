import { sayHello } from '../src/greet';
import { expect } from 'chai';

describe('Greet', () => {
  // beforeEach(() => {

  // });

  // afterEach(() => {

  // });

  describe('#sayHello', () => {
    it('should say hello', () => {
      expect(sayHello('Test')).to.equal('Hello from Test');
    });
  });
});
