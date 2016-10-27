import * as chai from 'chai';
import {expect} from 'chai';
import * as childProcess from 'child_process';
import * as sinonChai from 'sinon-chai';
import * as sinon from 'sinon';

chai.use(sinonChai);

describe('Main', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore(console.log);
  });

  it('should be ok', () => {
    expect(1).to.be.ok;
  });

  it('should log to console', (done) => {
    childProcess.execFile('../lib/main.js', (err, stdout, stderr) => {
      expect(stdout).to.be.eq('something');
      done();
    });
  });
});
