// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

var merge = function(intervals) {
  // create a polarity variable and set it equal to true
  var polarity = true;

  // set the variables i and j equal to 0
  var i = 0;
  var j = 0;

  // set a variable length equal to the length of the intervals array
  var length = intervals.length;

  // while true
  while (polarity) {
    // iterate over the second item in each tuple
    while (i < length) {
      // iterate over the first item in each tuple
      while (j < length) {
        // if the second item in a tuple is greater than the first item in a different tuple
        if (i !== j && intervals[j][0] <= intervals[i][1]) {
          // replace the value of the second item in the first tuple with the second item in the different tuple
          intervals[i][1] = intervals[j][1];
          // splice out the second tuple
          intervals.splice(j, 1);
          // decrement the length variable
          length--;
        }
        // increment j
        j++;
        // continue
        continue;
      }
      // increment i
      i++;
      // continue
      continue;
    }
    // set the polarity variable to false
    polarity = false;
  }

    // return the intervals array
    return intervals;
};
