const eqArrays = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } 
  return false;
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1) === eqArrays(arr2)) {
    return true;
  } 
  return false;
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (item of array) {
    results.push(callback(item))
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(eqArrays(results1, words));

