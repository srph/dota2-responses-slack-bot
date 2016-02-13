// Capture http://yolo.com/some/path/to/some.mp3
// We're listing only the possible extensions here
// so we don't pollute the regex.
const AUDIO_REGEX = /http:\/\/(.+)\.(mp3|mp4|wav)/;

/**
 * @param {object} cheerio $node node element
 * @return {string} audio url
 */
function getAudioURL($node) {
  // #TODO: Confirm if we can use `first` instead
  // for optimization, I guess?
  const $btn = $node.children('.sm2_button').first();
  const audio = $btn.attr('href');
  return AUDIO_REGEX.exec(audio)[0];
}

module.exports = getAudioURL;