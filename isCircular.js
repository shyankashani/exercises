// A linked array (index i gives the next index to explore) is perfectly circular if we can access every number in the array exactly once. Is a given list perfectly circular?

// Example:
let a = [1,2,3,0]; true
let b = [3,2,0,1]; true
let c = [1,2,9,7]; false

// I: Array
// O: Boolean (true or false)
// C: None
// E: Empty array, one item, all items the same

var isCircular = (array, i = 0) => {

  // if the array's length is 1 and the first value equals 0
  if (array.length === 1 && array[0] === 0) {
    // return true
    return true;
  }

  // if the array's length is less than 2
  if (array.length < 2) {
    // return false
    return false;
  }

  // if the ith value is equal to 'first'
  if (array[i] === 'first') {
    // return true
    return true;
  }

  // if the ith value is equal to 'subsequent'
  if (array[i] === 'subsequent') {
    // return false
    return false;
  }

  // if the ith value is undefined
  if (array[i] === undefined) {
    // return false
    return false;
  }

  // if i equals zero
  if (i === 0) {
    // replace the ith value with 'first'
    var nextI = array[i];
    array[i] = 'first';
  // otherwise
  } else {
    // replace the ith value with 'subsequent'
    var nextI = array[i];
    array[i] = 'subsequent';
  }

  // return the recursion of this function passing in the array and the ith value
  return isCircular(array, nextI);

}

console.log(isCircular(a))
console.log(isCircular(b))
console.log(isCircular(c))
