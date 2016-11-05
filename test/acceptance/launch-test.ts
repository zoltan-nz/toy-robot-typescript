import { expect } from 'chai';
import * as childProcess from 'child_process';

// Testing features from user perspective
describe('Launching the application', () => {

  it('should run without error', (done) => {
    childProcess.execFile('node', ['lib/main.js'], (error, stdout, sterr) => {
      expect(error).to.be.null;

      const aRow: string = '│ 0 │ 0 │ 0 │ 0 │ 0 │';
      expect(stdout).to.be.contain(aRow);
      done();
    });
  });
});
