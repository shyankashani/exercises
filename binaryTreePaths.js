var binaryTreePaths = function(root) {

  if (!root) { return []; }

  // create a results array
  var results = [];

  // create a recursive function that accepts a tree and a path so far
  var recurse = function(tree, pathSoFar) {
    // concat the tree to the path so far string
    pathSoFar = pathSoFar.concat(`${tree.val}->`);
    // if the tree has a left
    if (tree.left) {
      // call the recursive function, passing in left and the path so far string
      recurse(tree.left, pathSoFar);
    }
    // if the tree has a right
    if (tree.right) {
      // call the recursive function, passing in right and the path so far string
      recurse(tree.right, pathSoFar);
    }
    // if the tree has neither a left nor right
    if (!tree.left && !tree.right) {
      // push path so far into the results array
      results.push(pathSoFar.slice(0, pathSoFar.length - 2));
    }
  }

  // perform the recursive, passing in the root and the root's value in a string form
  recurse(root, ``);

  return results;
};
