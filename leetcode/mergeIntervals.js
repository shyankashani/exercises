// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

var merge = function(intervals) {

  // set the letiables i and j equal to 0
  let i = 0;
  let j = 0;

  // set a letiable length equal to the length of the intervals array
  let length = intervals.length;

  // iterate over the second item in each tuple
  while (i < length) {
    // iterate over the first item in each tuple
    while (j < length) {
      // if the second item in a tuple is greater than the first item in a different tuple
      if (i !== j && intervals[j].start <= intervals[i].end) {
        // replace the value of the second item in the first tuple with the second item in the different tuple
        intervals[i].end = intervals[j].end;
        // splice out the second tuple
        intervals.splice(j, 1);
        // decrement the length letiable
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

    // return the intervals array
    return intervals;
};
