const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Counts how many times each letter appers in a array
const countLetters = function(elem) {
  let result = {};
  for (let item of elem) {
    if (item !== ' ') {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;

console.log(countLetters('This is sparta'));