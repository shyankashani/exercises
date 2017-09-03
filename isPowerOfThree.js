var isPowerOfThree = function(n) {

  if ( n === 1) { return true; }

  // while n does not equal 3
  while (n !== 3) {
    // if n is less than 3
    if (n < 3) {
      // return false
      return false;
    }
    // divide n by 3 and set it equal to n
    n = n / 3;
  }

  // return true
  return true;
}
