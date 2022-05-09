const assertEqual = require('./assertEqual');

const eqArrays = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;