const assertEqual = require('./assertEqual');

let tail = function(arr) {
  let output = [];
  for (item of arr) {
     if (item !== arr[0]) {
       output.push(item);
     }
  }
  return output;
};

module.exports = tail;