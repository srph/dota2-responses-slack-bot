function format(str) {
  // Ancient Apparition responses -> Ancient_Apparition_responses
  return str.replace(/\s/g, '_');
}

module.exports = format;