var trimBST = (root, L, R) => {
  // if the root is null
  if (!root) {
    // kick out
    return null;
  }

  // if the root's value is greater than the R
  if (root.val > R) {
    // return the performance of trimBST on the left
    return trimBST(root.left, L, R);
  }

  // if the root's value is less than the L
  if (root.val < L) {
    // return the performance of trimBST on the right
    return trimBST(root.right, L, R);
  }

  // otherwise, it falls within range, meaning we can keep it as the root of the tree

  // set the left equal to the performance of trim tree on the left
  root.left = trimBST(root.left, L, R);

  // set the right equal to the performance of trim tree on the right
  root.right = trimBST(root.right, L, R);

  // return the root
  return root;
}
