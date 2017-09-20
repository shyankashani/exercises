const binarySearchOriginal = (arr, tar) => {
  const recurse = (min, mid, max) => {
    if (tar === arr[min]) { return min; }
    if (tar === arr[mid]) { return mid; }
    if (tar === arr[max]) { return max; }
    if (min === max) { return undefined; }
    if (tar < arr[mid]) { return recurse(min, Math.floor((min + mid) / 2), mid); }
    if (tar > arr[mid]) { return recurse(mid, Math.floor((max + mid) / 2), max); }
  }
  return recurse(0, Math.floor(array.length) - 1, array.length - 1);
}

// [1,2,3,4,5,6,7,8,9] // 3 -> true 12 -> false

// I: array, target
// O: boolean

// [1] // 4

const binarySearch = (array, target) => {
  // [1,2,3,4,5]
  // identify middle value
  let midPoint = Math.floor(array.length / 2); // 2 // 1 // 0

  // if the target is equal to the middle value
  if (target === array[midPoint]) { // 4 === 3 ? // 4 === 5 // 4 === 4
    // return true
    return true;
  }

  // if the length of the array is 1 or 0
  if (array.length < 2) {
    // return false
    return false;
  }

  // if the target is less than the middle value
  if (target < array[midPoint]) { // 4 < 3 // 4 < 5 ?
    // return the performance of binary search on the first half of the array
    return binarySearch(array.slice(0, midPoint), target); // binarySearch([4], 4)
  }

  // if target is greater than middle value
  if (target > array[midPoint]) { // 4 > 3
    // return performance of binary search on second half of the array
    return binarySearch(array.slice(midPoint + 1), target); // binarySearch[[4,5], 4]
  }
}

const binarySearch2 = (array, target, left = 0, right = array.length - 1) => {

  let middle = Math.floor((left + right) / 2); // 2 // 3

  console.log(left, right, middle);

  if (target === array[middle]) { // 2 === 3 ? // 3 === 3 ?
    return true;
  }

  if (left >= right) {
    return false;
  }

  if (target < array[middle]) { // 3 < 2
    return binarySearch2(array, target, left, middle - 1);
  }

  if (target > array[middle]) { // 3 > 2
    return binarySearch2(array, target, middle + 1, right); // binarySearch2(array, 3, 3, 4)
  }
};

// console.log(binarySearch2([0,1,2,3,4],3)) // -> true
// console.log(binarySearch2([0,1,2,3,4],5)) // -> false
// console.log(binarySearch2([0,1,2,3,4],0)) // -> true
// console.log(binarySearch2([0,1,2,3,4],-6)) // -> false

// left = 9, right = 10, middle = 9

// [1,2,3,4,5,6,7,8,9] // 3


const binarySearch3 = (array, target) => {

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (target === array[middle]) {
      return true;
    } else if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;

}

// console.log(binarySearch3([0,1,2,3,4],3)) // -> true
// console.log(binarySearch3([0,1,2,3,4],5)) // -> false
// console.log(binarySearch3([0,1,2,3,4],0)) // -> true
// console.log(binarySearch3([0,1,2,3,4],-6)) // -> false


let set = new Set()
set.add(3)
set.add(5)

{3, 5}

console.log(set.has(20))



{2,5,6}

// [1,2,-2,1,-3]
