// Capture http://yolo.com/some/path/to/some.mp3
// We're listing only the possible extensions here
// so we don't pollute the regex.
const AUDIO_REGEX = /http:\/\/(.+)\.(mp3|mp4|wav)/;

/**
 * @param {object} node htmlparser2 node
 * @return {string} audio url
 */
function get($node, $) {
  // #TODO: Confirm if we can use `first` instead
  // for optimization, I guess?
  const $btn = $node.children('.sm2_button');
  const href = $btn.attr('href');
  return AUDIO_REGEX.exec(href);
}

module.exports = get;