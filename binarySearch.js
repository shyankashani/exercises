// I: array, target
// O: boolean

// TIME: O(log n) // SPACE: O(n)
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

// TIME: O(log n) // SPACE: O(n)
const binarySearchRecursiveSlice = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  if (target === array[midPoint]) {
    return true;
  }
  if (array.length < 2) {
    return false;
  }
  if (target < array[midPoint]) {
    return binarySearch(array.slice(0, midPoint), target);
  }
  if (target > array[midPoint]) { // 4 > 3
    return binarySearch(array.slice(midPoint + 1), target);
  }
}

// TIME: O(log n) // SPACE: O(n)
const binarySearchRecursive = (array, target, left = 0, right = array.length - 1) => {
  let middle = Math.floor((left + right) / 2);
  if (target === array[middle]) {
    return true;
  }
  if (left >= right) {
    return false;
  }
  if (target < array[middle]) {
    return binarySearch2(array, target, left, middle - 1);
  }
  if (target > array[middle]) {
    return binarySearch2(array, target, middle + 1, right);
  }
};

// TIME: O(log n) // SPACE: O(1)
const binarySearchIterative = (array, target) => {
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
