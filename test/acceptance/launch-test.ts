import {expect} from 'chai';
import * as childProcess from 'child_process';

// Testing features from user perspective
describe('Launching the application', () => {

  it('should run without error', (done) => {
    childProcess.execFile('node', ['lib/main.js'], (error, stdout, sterr) => {
      expect(error).to.be.null;
      expect(stdout).to.be.eq("Hello from TypeScript\nHello, I\'m Roby. Great to meet you!\n");
      done();
    });
  });
});
