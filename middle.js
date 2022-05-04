const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
};

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
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));