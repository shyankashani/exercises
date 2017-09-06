var removeDuplicates = function(nums) {
  // iterate through the nums array
  for (var i = 1; i <= nums.length; i++) {
    // if the next number is equal to the current number
    if (nums[i - 1] === nums[i]) {
      // remove the next number
      nums.splice(i, 1);
      removeDuplicates(nums);
    }
    // continue
    continue;
  }

  // return the length of the array
  return nums.length;
}
