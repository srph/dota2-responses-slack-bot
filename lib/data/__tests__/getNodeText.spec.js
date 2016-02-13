const {expect} = require('chai');
const cheerio = require('cheerio');
const getNodeText = require('../getNodeText');

describe('getNodeText', () => {
  it('should get all text nodes', () => {
    const $ = cheerio.load(`<li><a href="#">I'm a link</a>I'm not</li>`);
    const $el = $('li');
    expect(getNodeText($el)).to.equal(`I'm not`);
  });

  it('should trim the text', () => {
    const $ = cheerio.load(`<li><a href="#">I'm a link</a>  I'm not  </li>`);
    const $el = $('li');
    expect(getNodeText($el)).to.equal(`I'm not`);
  });
});