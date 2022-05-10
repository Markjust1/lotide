const head = require('./head.js');
const tail = require('./tail.js');
const middle = require('./middle.js');
const map = require('./map.js');
const without = require('./without.js');
const takeUntil = require('./takeUntil.js');
const letterPositions = require('./letterPositions.js');
const flatten = require('./flatten.js');
const findKeyByValue = require('./findKeyByValue.js');
const findKey = require('./findKey.js');
const eqObjects = require('./eqObjects.js');
const eqArrays = require('./eqArrays.js');
const countOnly = require('./countOnly.js');
const countLetters = require('./countLetters.js');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  map: map,
  without: without,
  takeUntil: takeUntil,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters
};