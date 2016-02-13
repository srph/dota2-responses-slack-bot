const {expect} = require('chai');
const toAnnouncerNameFormat = require('../toAnnouncerNameFormat');

describe('toAnnouncerNameFormat', () => {
  it('should replace all `_` occurence with space', () => {
    expect(toAnnouncerNameFormat('Ancient_Apparition')).not.to.contain('_');
  });

  it('should remove `Packs` keyword', () => {
    expect(toAnnouncerNameFormat('Ancient_Apparition_Packs')).not.to.contain('Packs');
    expect(toAnnouncerNameFormat('Ancient_Apparition_Pack')).to.contain('Pack');
  });

  it('should remove `responses` keyword', () => {
    expect(toAnnouncerNameFormat('Ancient_Apparition_responses')).not.to.contain('responses');
    expect(toAnnouncerNameFormat('Ancient_Apparition_response')).to.contain('response');
  });
});