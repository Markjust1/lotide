const middle = require('../middle');
const assert = require('chai').assert;

describe('#Middle' , () => {
  it('returns [9, 10] for [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]', () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]) , [9, 10]);
  });
  it('returns [7] for [9, 8, 7, 6, 5]', () => {
    assert.deepEqual(middle([9, 8, 7, 6, 5]) , [7]);
  });
  it('returns [8] for [2, 4, 8, 5, 1]', () => {
    assert.deepEqual(middle([2, 4, 8, 5, 1]) , [8]);
  });
  it('returns [123, 7378] for [456, 94, 123, 7378, 1, 6]', () => {
    assert.deepEqual(middle([456, 94, 123, 7378, 1, 6]) , [123, 7378]);
  });
  it('returns ["grapefruit"] for ["apple", "orange", "grapefruit", "lemon", "papaya"]])', () => {
    assert.deepEqual(middle(["apple", "orange", "grapefruit", "lemon", "papaya"]) , ["grapefruit"]);
  });
});