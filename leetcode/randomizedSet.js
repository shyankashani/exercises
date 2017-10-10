/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.numbers = [];
  this.indices = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.indices.hasOwnProperty(val)) {
    return false;
  } else {
    this.numbers.push(val);
    this.indices[val] = this.numbers.length - 1;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  // if the value exists in the randomized set
  if (this.indices.hasOwnProperty(val)) {
    // let index equal to the index of that value in the array
    let index = this.indices[val];
    // let final equal to the final value in the array
    let final = this.numbers[this.numbers.length - 1];
    // overwrite the value that's about to be removed with the final value
    this.numbers[index] = final;
    // create a new index in the indices object corresponding to the index
    this.indices[final] = index;
    // pop off
    this.numbers.pop();
    // delete
    delete this.indices[val];
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.numbers[Math.floor(Math.random() * this.numbers.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
