// I: unsorted array
// O: unsorted array, but in reverse

// TIME: O(n^2) // SPACE: O(n)
var reverseOrder = function(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) { // n
    newArray.unshift(array[i]); // n
  }

  return newArray;
};

// TIME: O(log n) // SPACE: O(1)
var reverseOrderinPlace = function(array) {
  var i = 0;
  var j = array.length - 1;

  while (i !== j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }

  return array;
};

reverseOrder([1,2,3,4,5,6,7,8]);
reverseOrderinPlace([1,2,3,4,5,6,7,8]);
