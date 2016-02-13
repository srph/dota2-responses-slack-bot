/**
 * Formats an underscore-separated string.
 * (This is because the string was turned into a slug format)
 * @see toURIFormat
 *
 * @param string str Announcer name to be formatted
 * @return string
 */
function toAnnouncerNameFormat(str) {
  // Undo `formatUnitName`, then remove `X Packs` and `X responses`;
  return str.replace(/(\sPacks|\sresponses)/, '');
}

module.exports = toAnnouncerNameFormat;