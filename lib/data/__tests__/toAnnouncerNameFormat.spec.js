const {expect} = require('chai');
const toAnnouncerNameFormat = require('../toAnnouncerNameFormat');

describe('toAnnouncerNameFormat', () => {
  it('should remove `Packs` and `responses` keyword', () => {
    expect(toAnnouncerNameFormat('Ancient Apparition responses')).not.to.contain('responses');
    expect(toAnnouncerNameFormat('Ancient Apparition response')).to.contain('response');

    expect(toAnnouncerNameFormat('Ancient Apparition Packs')).not.to.contain('Packs');
    expect(toAnnouncerNameFormat('Ancient Apparition Pack')).to.contain('Pack');
  });

  it('should trim the remaining spaces from the removed keyword', () => {
    expect(toAnnouncerNameFormat('Ancient Apparition responses')).to.equal('Ancient Apparition');
  });
});