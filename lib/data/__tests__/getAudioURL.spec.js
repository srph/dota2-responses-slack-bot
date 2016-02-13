const {expect} = require('chai');
const cheerio = require('cheerio');
const getAudioURL = require('../getAudioURL');

describe('getAudioURL', () => {
  it('should get the `href` of the `sm2_button` element', () => {
    const $ = cheerio.load(`<li><a href="http://yolo.com/swag.mp3" class="sm2_button">I'm a link</a>I'm not</li>`);
    const $el = $('li');
    expect(getAudioURL($el)).to.equal('http://yolo.com/swag.mp3');
  });
});