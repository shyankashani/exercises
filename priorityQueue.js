var PriorityQueue = function() {
  this.queue = [];
}

PriorityQueue.prototype.enqueue = function(tuple) {
  // if the queue is empty
  if (this.queue.length === 0) {
    // stick the tuple in the queue
    this.queue.unshift(tuple);
    // return the queue
    return this.queue;
  // otherwise
  } else {
    // iterate backward through the items in the queue
    for (var i = this.queue.length - 1; i > -1; i--) {
      // if the priority of the tuple is greater than or equal to the priority of the item
      if (tuple[1] >= this.queue[i][1]) {
        // insert the tuple right then and there
        this.queue.splice(i + 1, 0, tuple);
        // return the queue
        return this.queue;
      }
    }
  }
  // unshift the item to the back of the queue
  this.queue.unshift(tuple);
  // return the queue
  return this.queue;
}

PriorityQueue.prototype.dequeue = function() {
  // pop off the last item in the queue
  this.queue.pop();
  // return the queue
  return this.queue;
}

PriorityQueue.prototype.show = function() {
  console.log(this.queue);
}

var pQ = new PriorityQueue();


pQ.enqueue(['low',2])
pQ.enqueue(['min',1])
pQ.enqueue(['hig',4])
pQ.enqueue(['med',3])
pQ.enqueue(['max',5])
pQ.enqueue(['med',3])
pQ.enqueue(['max',5])
pQ.enqueue(['low',2])
pQ.enqueue(['min',1])
pQ.enqueue(['hig',4])


pQ.show();
