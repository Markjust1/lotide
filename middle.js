const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let valueHolder = [];
  let output = 0;
  // Check if array length is smaller than 2; => return empty array
  if (array.length <= 2) {
    return valueHolder;
  // Check if array.length is bigger than 2;
  } else if (array.length > 2) {
    // Checking if array length is odd or even;
    if (array.length % 2 !== 0) {
      // Odd case
      output = parseInt(array.length / 2);
      for (let i = 0; i < array.length; i++) {
        if (i === output) {
          let num = array.indexOf(array[i])
          valueHolder.push(array[num]);
        }
      }
      return valueHolder;
    } else if (array.length % 2 === 0) {
      // Even case
      output = parseInt(array.length / 2);
      for (let i = 0; i < array.length; i++) {
        if (i === output) {
          // getting indexes of central items in array
          let num1 = array.indexOf(array[i-1]);
          let num2 = array.indexOf(array[i]);
          // adding actual values to new array
          valueHolder.push(array[num1]);
          valueHolder.push(array[num2]);
        }
      }
      return valueHolder;
    }
  }
};

module.exports = middle;