/**
 * Formats the original response from Gamepedia to a slug format.
 *
 * @param string str Announcer name to be formatted
 * @return string
 */
function toURIFormat(str) {
  // Ancient Apparition responses -> Ancient_Apparition_responses
  return str.replace(/\s/g, '_');
}

module.exports = toURIFormat;