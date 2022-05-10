const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

// Removes any sub-arrays in the array
function flatten(elem) {
  let output = [];
  for (item of elem) {
    if (Array.isArray(item) !== true) {
      output.push(item);
    } else {
      for (elem of item) {
        output.push(elem);
      }
    }
  }
  return output;
}

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));