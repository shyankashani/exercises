// Given an array, output the values that are a power of 2.

// I: An array of numbers.
// O: An array of numbers.
// C: None, for now.
// E: Empty array, all values are power of two, no values are power of two.

var powerFilter = array => {
  // create a results array
  var results = [1];

  // iterate through the array
  for (var i = 0; i < array.length; i++) {
    var original = array[i];
    var modified = array[i];

    // create a loop variable and set it equal to true
    // var loop = true;
    // as long as the loop variable is true
    while (true) {
      // if dividing the number by two yields a remainder
      if (modified % 2 !== 0) {
        // set the loop variable to false
        // loop = false;
        break;
      // otherwise if dividing the number by two yields two
      } else if (modified / 2 === 2 || modified / 2 === 1) {
        // push the number into the results array
        results.push(original);
        // set the loop variable to false
        // loop = false;
        break;
      // otherwise divide the number by two
      } else {
        modified = modified / 2;
      }
    }
  }

  // return the results array
  return results;
};


var a = [1,2,3,4,5,6,7,8,9,10]; // -> [1,2,4,8]


console.log(powerFilter(a));
