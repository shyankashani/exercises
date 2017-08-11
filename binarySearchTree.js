const breadthFirstSearch = (tree, callback) => {
  // Create a queue variable that is an array
  let queue = [];
  // Create a variable n and set it equal to 1
  let n = 1;

  // Loop through the length of n
  while (n) {
    // Push the tree into the queue
    queue.push(tree);
    // If the zeroeth tree in the queue has left, push that into the queue
    if (queue[0].left) { queue.push(queue[0].left) }
    // If the zeroeth tree in the queue has right, push that into the queue
    if (queue[0].right) { queue.push(queue[0].right) }
    // Call the callback on that tree
    callback(queue[0]);
    // Unshift the first item from the queue and set n equal to the length of the queue
    n = queue.unshift()
  }
}

const depthFirstSearch = (tree, callback) => {
    const recurse = tree => {

    };
}
