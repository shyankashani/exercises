var twoSum = function(nums, target) {
  // Iterate through the nums array
  for (var i = 0; i < nums.length; i++) {
    // Iterate throught the nums array again
    for (var k = 0; k < nums.length; k++) {
      // If the number at the first index plus the number at the second index equals the target
      if (i !== k && nums[i] + nums[k] === target) {
        // Return an array with those two indices
        return [i, k];
      }
    }
  }
  // Return undefined
  return undefined;
}
