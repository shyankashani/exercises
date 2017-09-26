var lengthOfLastWord = function(s) {

  if (s.length === 0) { return 0; }

  // let i point at the last letter in the string
  let i = s.length - 1;

  // let a counter equal 0
  let counter = 0;

  // as long as the ith letter in the string is not equal to a space
  while (s[i] !== ' ') {
    if (i < 0) { return counter; }
    // increment the counter
    counter++;
    // decrement i
    i--;
  }

  // return the counter
  return counter;
};
