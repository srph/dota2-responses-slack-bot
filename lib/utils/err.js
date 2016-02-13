function err(e) {
  console.log('-------');
  console.log(e.stack || e);
  console.log('-------');
}

module.exports = err;