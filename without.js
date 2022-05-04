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
  } else {
    return false;
  }
}

function without(source, itemsToRemove) {
  const array = [];
  for (let y = 0; y < source.length; y++) {
    let removeThisSource = false;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[y] === itemsToRemove[i]) {
        removeThisSource = true;
      } 
    }
    if (removeThisSource === false) {
      array.push(source[y]);
    }
  }
  return array;
}
console.log(without([1, 2, 3], [1, 2]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); 