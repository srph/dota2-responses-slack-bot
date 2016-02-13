// Capture http://yolo.com/some/path/to/some.mp3
// We're listing only the possible extensions here
// so we don't pollute the regex.
const AUDIO_REGEX = /http:\/\/(.+)\.(mp3|mp4|wav)/;

/**
 * @param {object} node htmlparser2 node
 * @return {string} audio url
 */
function get($node, $) {
  const $el = $($node.children().toArray().find(node => $(node).html().match(AUDIO_REGEX)));
  return AUDIO_REGEX.exec($el.html());
}

module.exports = get;