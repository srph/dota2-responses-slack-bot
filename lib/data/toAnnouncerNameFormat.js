/**
 * Removes `Packs` and `responses` from the title
 *
 * @param string str Announcer name to be formatted
 * @return string
 */
function toAnnouncerNameFormat(str) {
  // Undo `formatUnitName`, then remove `X Packs` and `X responses`;
  return str.replace(/(\sPacks|\sresponses)/, '');
}

module.exports = toAnnouncerNameFormat;