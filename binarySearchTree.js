const breadthFirstSearch = (tree, callback) => {
  // Create a queue variable that is an array
  let queue = [tree];
  // Create a variable n and set it equal to 1
  let n = queue.length;
  // Loop through the length of n
  while (n) {
    // If the zeroeth tree in the queue has left, push that into the queue
    if (queue[0].left) { queue.push(queue[0].left) }
    // If the zeroeth tree in the queue has right, push that into the queue
    if (queue[0].right) { queue.push(queue[0].right) }
    // Call the callback on that tree
    callback(queue.shift());
    // Set n equal to the queue's length
    n = queue.length;
  }
}

const depthFirstSearch = (tree, callback) => {
  // Create a stack variable that is an array with the tree inside of it

  // Create a variable n and set it equal to the lenght of the stack

  // While n

  // If the last tree in the stack has a right, push that into the stack

  // If the last tree in the stack has a left, push that into the stack

  // Pop the first
}

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: undefined,
      right: undefined
    },
    right: {
      value: 4,
      left: undefined,
      right: undefined
    }
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: undefined,
      right: undefined
    },
    right: {
      value: 7,
      left: undefined,
      right: undefined
    }
  }
}



breadthFirstSearch(tree, (node) => { console.log(node.value) });
