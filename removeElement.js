var removeElement = function(nums, val) {
    // declare a counter i
    var i = 0;

    // while i is less than the length of the nums array
    while (i < nums.length) {
        // if the item is equal to the value
        if (nums[i] === val) {
            // splice it out
            nums.splice(i, 1);
        // else
        } else {
            // increment i
            i++;
        }
    }
    // return the length of the nums array
    return nums.length;
};
