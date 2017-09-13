/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.orig = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.orig;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (var i = this.nums.length - 1; i > 0; i--) {
    this.swap(Math.floor(Math.random() * (i + 1)), i);
  }
  return this.nums;
};

Solution.prototype.swap = function(m, n) {
  var temp = this.nums[m];
  this.nums[m] = this.nums[n];
  this.nums[n] = temp;
}

// var obj = new Solution([1,2,3,4,5]);
// console.log(obj.shuffle());
// console.log(obj.reset());

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
