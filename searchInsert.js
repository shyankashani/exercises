var searchInsert = function(nums, target) {
  // Iterate through the nums array
  for (var i = 0; i < nums.length; i++) {
    // If the num is equal to the target or if the num is greater than the target
    if (target <= nums[i]) {
      // Return the index of the num
      return i;
    }
    // If the num is the last num in the nums array
    if (i === nums.length - 1) {
      // Return the length of the nums array
      return nums.length;
    }
  }
};
