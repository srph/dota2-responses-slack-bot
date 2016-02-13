const {expect} = require('chai');
const toAnnouncerNameFormat = require('../toAnnouncerNameFormat');

describe('toAnnouncerNameFormat', () => {
  it('should remove `Packs` keyword', () => {
    expect(toAnnouncerNameFormat('Ancient Apparition Packs')).not.to.contain('Packs');
    expect(toAnnouncerNameFormat('Ancient Apparition Pack')).to.contain('Pack');
  });

  it('should remove `responses` keyword', () => {
    expect(toAnnouncerNameFormat('Ancient Apparition responses')).not.to.contain('responses');
    expect(toAnnouncerNameFormat('Ancient Apparition response')).to.contain('response');
  });
});