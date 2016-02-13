const {expect} = require('chai');
const SlackBot = require('SlackBot');

describe('server', () => {
  it('should log after being ran');
  it('should noop when socket type is not a message');
  it('should noop if message is blacklisted');
  it('should noop is the message is non-existent');
  it('should format the message');
  it('should post the channel');
  it('should log after the message is sent to the channel');
});