function eqArrays(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1) === eqArrays(arr2)) {
    return true;
  } 
}

console.log(eqArrays([3,1],[3,2]));