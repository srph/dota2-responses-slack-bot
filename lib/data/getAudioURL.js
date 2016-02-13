/**
 * Extracts the 
 * @param {object} cheerio $node node element
 * @return {string} audio url
 */
function getAudioURL($node) {
  const $btn = $node.children('.sm2_button').first();
  return $btn.attr('href');
}

module.exports = getAudioURL;