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
