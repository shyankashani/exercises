// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

// I: array of objects
// O: array of objects
// C: none
// E: end of one interval is same as beginning of another interval
//    two identical intervals
//    one interval encompasses another interval on one side
//    one interval encompasses anotehr interval on both sides

var Interval = (start, end) => {
  this.start = start;
  this.end = end;
}

var merge = function(intervals) {
  // if there are no intervals return intervals
  if (intervals.length <= 1) { return intervals; }

  // sort the intervals first by start and then by end
  intervals.sort((a, b) => {
    if (a.start < b.start) {
      return -1;
    }
    if (a.start > b.start) {
      return 1;
    }
    if (a.end < b.end) {
      return -1;
    }
    if (a.end > b.end) {
      return 1;
    }
    return 0;
  })

  // create a current interval and set it equal to the zeroeth interval in the array
  var currentInterval = intervals[0];

  // create a results array
  var results = [];

  // iterate through the intervals starting at the oneth interval
  for (var i = 1; i < intervals.length; i++) {
    // set the iterated item equal to next interval variable
    var nextInterval = intervals[i];
    // if the end of the current interval is greater than or equal to the beginning of the next interval
    if (currentInterval.end >= nextInterval.start) {
      // set the current interval equal a new interval with the beginning being the start of the current interval
      // and the end being the math max of the current interval's end and the next interval's end
      currentInterval = new Interval(currentInterval.start, Math.max(currentInterval.end, nextInterval.end));
      // if we are at the last interval in the array
      if (i === intervals.length - 1) {
        // push the current interval into the results array
        results.push(currentInterval);
      }
      // otherwise
    } else {
      // push the current interval into the results array
      results.push(currentInterval);
      // set the next interval equal to the current interval
      currentInterval = nextInterval;
      if (i === intervals.length - 1) {
          results.push(nextInterval);
      }
    }
  }


  // return the results array
  return results;
}
