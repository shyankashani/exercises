// I: unsorted array
// O: unsorted array, but in reverse
// C: none for now
// E:

var reverseOrder = function(array) {
  // create a new array
  var newArray = [];

  // iterate through the array with a for loop
    for (var i = 0; i < array.length; i++) { // n
      newArray.unshift(array[i]); // n
    }

  return newArray;
};


var reverseOrderinPlace = function(array) {
  // create pointer i and set it equal to 0
  var i = 0;

  // create pointer j and set it equal to length - 1
  var j = array.length - 1;

  // as long as i and j are not equal to each other
  while (i !== j) {
    // swap what is at each respective index
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    // increment i
    i++;
    // decrement j
    j--;
  }

  // return the input array
  return array;
};

// [1,2,3]
console.log(reverseOrderinPlace([1,2,3,4,5,6,7,8])); // [5,3,1,6,5,8,2,5,7]

// 0.5 N
//
// log 8  = 3
