// @param {number[]} nums
// @param {number} target
// @return {number}

// I: Array, number
// O:

var threeSumClosest = function(nums, target) {

  // create a sums array
  var currentSum;

  // iterate through the array i
  for (var i = 0; i < nums.length; i++) {
    // iterate through the array j
    for (var j = 0; j < nums.length; j++) {
      // iterate through the array k
      for (var k = 0; k < nums.length; k++) {
        // if i, j, k are not equal
        if (i !== j && i !== k && j !==k) {
          // create a sum variable
          var sum = nums[i] + nums[j] + nums[k];

          // if the sum of the three indices is equal to the target
          if (sum === target) {
            // return the target
            return sum;
          }

          // if the current sum is not defined
          if (currentSum === undefined) {
            // set the current sum equal to the sum
            currentSum = sum;
          // else if the absolute value of the sum minus the target is less than the absolute value of the current sum minus the target
          } else if (Math.abs(sum - target) < Math.abs(currentSum - target)) {
            // set the current sum equal to this sum
            currentSum = sum;
          }
        }
      }
    }
  }

  // return the current sum
  return currentSum;

};

var testArray = [-1,2,1,-4]
var testTarge = 1

console.log(threeSumClosest(testArray, testTarge)) // 2
