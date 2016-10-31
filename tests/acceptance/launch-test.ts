import * as chai from 'chai';
import {expect} from 'chai';
import * as childProcess from 'child_process';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);

// Testing features from user perspective

describe('Launching the application', () => {

  it('app should run', (done) => {

    childProcess.execFile('node', ['lib/main.js'], (error, stdout, sterr) => {
      expect(stdout).to.be.eq("Hello from TypeScript\nHello, I\'m Roby. Great to meet you!\n");
      done();
    });

    // const mainApp = childProcess.execFileSync('../../lib/main.js');
    //
    // mainApp.stdout.on('data', (data) => {
    //   expect(data).is.equal('Hello');
    // });

    // done();
    // debugger;

    // childProcess.spawn('../../lib/main.js', (err, stdout, stderr) => {
    //   expect(stdout).to.be.eq('something');
    //   done();
    // });
  });
});
