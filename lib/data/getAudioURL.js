const AUDIO_REGEX = /http:\/\/.+\.mp3/;

/**
 * @param {object} node htmlparser2 node
 * @return {string} audio url
 */
function get(node) {
  const el = node.children.find(node => node.data.match(AUDIO_REGEX)).data;
  return AUDIO_REGEX.exec(el)[0];
}

module.exports = get;