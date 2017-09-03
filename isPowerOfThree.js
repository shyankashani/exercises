var isPowerOfThree = function(n) {

  var log3 = function(x) { return Math.log(x) / Math.log(3) };

  if (Number.isInteger(log3(n))) { return true }

  return false;
}
