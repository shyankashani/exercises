var plusOne = function(digits) {
  // create a for loop that moves backward through the digits array
  for (var i = digits.length - 1; i > -1; i--) {
    // add one to the digit
    digits[i]++;
    // if the digit is ten
    if (digits[i] === 10) {
      // turn the digit into zero
      digits[i] = 0;
      // continue
      continue;
    // otherwise
  } else {
    // return the digits array
    break;
    }
  }
  return digits;
}
