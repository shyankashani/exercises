var isPowerOfTwo = function(n) {
  if (Number.isInteger(Math.log2(n))) {
    return true;
  }
  return false;
};
