var quickSort = array => {

  // if the array has a length of 1 or 0, it's already sorted, so return it
  if (array.length <= 1) return array

  // remove element at swap position
  var pivot = array.pop();

  var left = [];
  var right = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}


// create a quicksort function that accepts an array
var quickSortSwapping = array => {

  if (array.length <= 1) { return array; }

  // set the pivot equal to the popped off element of the array
  var pivot = array.pop();

  // set variable i equal to -1
  var i = -1;

  // iterate through the length of the array using j beginning at 1
  for (var j = 0; j < array.length; j++) {
    // if the item at j is less than the pivot
    if (array[j] < pivot) {
      // increment i
      i++;
      // swap the element at i with the element at j
      console.log(array);
      swap(array, i, j);
      console.log(array);
    }
  }

  // perform quickSort on the array up until and including i, concat the pivot there, and then after the pivot
  return quickSort(array.slice(0, i + 1)).concat([pivot]).concat(quickSort(array.slice(i + 1)));
}

var swap = (array, m, n) => {
  var temp = array[n];
  array[n] = array[m];
  array[m] = temp;
}
