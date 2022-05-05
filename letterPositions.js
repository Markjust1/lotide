const eqArrays = function(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1) === eqArrays(arr2)) {
    return true;
  } else {
    return false;
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
   if (sentence[i] in results) {
      let arrayOfIndexes = [];
      arrayOfIndexes = results[sentence[i]];
      arrayOfIndexes.push(i);
      results[sentence[i]] = arrayOfIndexes;
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
console.log(letterPositions("hello"));

