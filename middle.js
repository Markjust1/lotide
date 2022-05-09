const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let valueHolder = [];
  let output = 0;
  // Check if array length is smaller than 2;
  if (array.length <= 2) {
    return valueHolder;
  // Check if array.length is bigger than 2;
  } else if (array.length > 2) {
    // Checking if array length is odd or even;
    if (array.length % 2 !== 0) {
      // Odd case
      output = parseInt(array.length / 2) + 1;
      valueHolder.push(output);
      return valueHolder;
    } else if (array.length % 2 === 0) {
      // Even case
      output = parseInt(array.length / 2);
      valueHolder.push(output);
      valueHolder.push(output + 1);
      return valueHolder;
    }
  }
};

module.exports = middle;