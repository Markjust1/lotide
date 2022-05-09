const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4,5]));

//Bug found when using strings
console.log(assertArraysEqual(middle([['apple', 'orange', 'grapefruit', 'lemon', 'papaya']]), ['grapefruit']));