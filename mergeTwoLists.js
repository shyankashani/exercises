var mergeTwoLsts = function(l1, l2) {

    // create a variable called the initial node
    var nI;

    // create a recursive function that accepts two nodes and a current node
    var recurse = function(n1, n2, nC) {
      // if the first node and the second node are equal to null
      if (n1 === null && n2 === null) {
        // return
        return;
      }
      // if the value of the first node is less than the value of the second node
      // or if the second node is null
      if (n1.val < n2.val || n2 === null) {
        // make the first node the next of the current node
        nC.next = new ListNode(n1.val);
        // perform the recursive function on the the next of the first node, the second node, and the next of the current node
        recurse(n1.next, n2, nC.next);
      }
      // if the value of the first node is greater than the value of the second node
      // or if the first node is null
      if (n2.val <= n2.val || n1.val === null) {
        // make the second node the next of the current node
        nC.next = new ListNode(n2.val);
        // perform the recursive function on the first node, the next of the second node, and the next of the current node
        recurse(n1, n2.next, nC.next);
      }
    }

    // if the value of the first node is less than the value of the second node
    if (l1.val < l2.val) {
      // set initial node equal to the first node
      nI = new ListNode(n1.val);
      // perform the recursive function on the next of the first node, the second node, and the initial node
      recurse(n1.next, n2, nI);
    // otherwise
    } else {
      // set the initial node equal to the second node
      nI = new ListNode(n2.val);
      // perform the recursive function on the the first node, the next of the second node, and the initial node
      recurse(n1, n2.next, nI);
    }

    // return the initial node
    return nI;

};
