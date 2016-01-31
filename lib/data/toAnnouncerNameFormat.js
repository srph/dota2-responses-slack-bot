function format(str) {
  // Undo `formatUnitName`, then remove `X Packs` and `X responses`;
  return str.replace(/_/g, ' ').replace(/(\sPacks|\sresponses)/, '');
}

module.exports = format;