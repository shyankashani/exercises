var isValid = function(s) {
  // create a variable called stack and set it equal to an array
  var stack = [];

  // iterate through the string
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    var top = stack[stack.length - 1];
    // if (
    if (char === '(') {
      // push paren
      stack.push('(');
    }
    // if {
    if (char === '{') {
      // push brace
      stack.push('{');
    }
    // if [
    if (char === '[') {
      // push brack
      stack.push('[');
    }
    // if )
    if (char === ')') {
      // if top equals paren
      if (top === '(') {
        // pop it off
        stack.pop();
      // otherwise
      } else {
        // return false
        return false;
      }
    }
    // if }
    if (char === '}') {
      // if top equals brace
      if (top === '{') {
        // pop it off
        stack.pop();
        // otherwise
      } else {
        // return false
        return false;
      }
    }
    // if ]
    if (char === ']') {
      // if top equals brack
      if (top === '[') {
        // pop it off
        stack.pop();
      // otherwise
      } else {
        //return false
        return false;
      }
    }
  }

    // if stack length zero
    if (stack.length === 0) {
      // return true
      return true;
    }

    // return false
    return false;
};
