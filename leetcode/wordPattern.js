// @param {string} pattern
// @param {string} str
// @return {boolean}

var wordPattern = function(pattern, str) {
  let arr = str.split(' ');

  if (arr.length !== pattern.length) return false;

  let matches = {};
  let patSet = new Set;
  let arrSet = new Set;
  let i = 0;

  while (i < pattern.length) {
    if (matches.hasOwnProperty(pattern[i])) {
      if (matches[pattern[i]] !== arr[i]) {
        return false;
      }
    }
    matches[pattern[i]] = arr[i];
    patSet.add(pattern[i]);
    arrSet.add(arr[i]);
    if (patSet.size !== arrSet.size) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))
