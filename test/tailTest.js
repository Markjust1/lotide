const tail = require('../tail');
const assert = require('chai').assert;

describe('#Tail' , () => {
  it('returns [6, 7, 8, 9, 10, 11, 12, 13, 14] for [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]', () => {
    assert.deepEqual(tail([6, 7, 8, 9, 10, 11, 12, 13, 14]) , [7, 8, 9, 10, 11, 12, 13, 14]);
  });
  it('returns ["Lighthouse", "Labs"] for ["House", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["House", "Lighthouse", "Labs"]) , ["Lighthouse", "Labs"]);
  });
  it('returns ["orange", "grapefruit", "lemon", "papaya"] for ["apple", "orange", "grapefruit", "lemon", "papaya"]])', () => {
    assert.deepEqual(tail(["apple", "orange", "grapefruit", "lemon", "papaya"]) , ["orange", "grapefruit", "lemon", "papaya"]);
  });
});