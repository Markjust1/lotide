const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(arr) {
  let output = [];
  for (item of arr) {
     if (item !== arr[0]) {
       output.push(item);
     }
  }
  return output;
};

const result = tail(["House", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(words.length, 3);