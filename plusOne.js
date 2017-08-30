var plusOne = function(digits) {
  for (var i = digits.length - 1; i > -1; i--) {
    digits[i]++;
    if (digits[i] === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1)
        break;
      } else {
        continue;
      }
    } else {
      break;
    }
  }
  return digits;
}
