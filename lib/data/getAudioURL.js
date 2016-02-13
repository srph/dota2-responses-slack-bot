/**
 * Extracts the 
 * @param {object} cheerio $node node element
 * @return {string} audio url
 */
function getAudioURL($node) {
  // #TODO: Confirm if we can use `first` instead
  // for optimization, I guess?
  const $btn = $node.children('.sm2_button').first();
  return $btn.attr('href');
}

module.exports = getAudioURL;