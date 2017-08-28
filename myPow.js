var myPow = function(x, n) {
  var result = 1;

  if (n === 0) { return 1 };

  for (var i = 1; i < Math.abs(n) + 1; i++) {
    if (n > 0) {
      result = result * x;
    } else {
      result = result / x;
    }
  }

  return result;
};

myPow(2,-4)
