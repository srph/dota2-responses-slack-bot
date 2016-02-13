/**
 * Extracts the non-element text in an element.
 * @see http://stackoverflow.com/questions/20832910/get-text-in-parent-without-children-using-cheerio
 * @param Cheerio $node
 * @return string
 */
function getNodeText($node) {
  return $node.contents().filter(function() {
    return this.type === 'text';
  }).text();
}

module.exports = getNodeText;