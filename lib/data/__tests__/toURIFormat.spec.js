const {expect} = require('chai');
const toURIFormat = require('../toURIFormat');

describe('toAnnouncerNameFormat', () => {
  it('should replace all space occurence with `_`', () => {
    expect(toURIFormat('Ancient Apparition responses')).to.equal('Ancient_Apparition_responses');
  });
});