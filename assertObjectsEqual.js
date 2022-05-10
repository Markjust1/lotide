// Found bug in the position of the elements in the object/array while using JSON.stringify() method, needs addtional if statement.

const eqObjects = function(object1, object2) {
  let objKeys1 = JSON.stringify(Object.keys(object1));
  let objValues1 = JSON.stringify(Object.values(object1));
  let objKeys2 = JSON.stringify(Object.keys(object2));
  let objValues2 = JSON.stringify(Object.values(object2));
 
  if (objKeys1 === objKeys2 && objValues1 === objValues2) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: '1', b: '2'};
const ba = { a: '1', b: '2'};
const abc = { a: '1', b: '2', c: '3'};
const abn = { a: 'a', b: [1,2,3], c:{ r: "123"}};
const abm = { a: 'a', c:{ r: "123"}, b: [1,2,3]};

console.log(assertObjectsEqual(eqObjects(abn, abm), true));