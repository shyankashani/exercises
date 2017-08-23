var MedianStream = function () {
  this.content = [];
};

MedianStream.prototype = {
  insert: function (number) {
    this.content.push(number);
    this.bubbleUp(this.content.length - 1);
    console.log(this);
  },

  size: function () {
    return this.content.length;
  },

  bubbleUp: function(index) {
    var number = this.content[index];

    while (index > 0) {
      var parentIndex = Math.floor((index + 1) / 2) - 1;
      var parent = this.content[parentIndex];

      if (number >= parent) {
        break;
      } else {
        this.content[parentIndex] = number;
        this.content[index] = parent;
        index = parentIndex;
        console.log('bubble up', this.content);
      }
    }

  },

  peekMedian: function() {
    var ordered = [];

    // Create a recursive function that accepts an index as an argument
    var recurse = index => {
      // If the length of the ordered array is equal to half the length of the original array plus one
      if (ordered.length === this.content.length + 1) {
        // If the size is even
        if (this.content.length % 2 === 0) {
          // Return the average of the last two items in the ordered array
          return ((ordered[ordered.length - 1] + ordered[ordered.length - 2]) / 2);
          // If the size is odd
        } else {
          // Return the last item in the ordered array
          return ordered[ordered.length - 1];
        }
      }

      // Push the number at that index into the ordered array
      ordered.push(this.content[index]);

        // Find the smaller of the two children
        if ( this.content[index*2] < this.content[(index*2) + 1]) {
          // Perform the recursive function on that child
          recurse(this.content[index*2]);
          recurse(this.content[(index*2) + 1]);
          // Perform the recrusive function on the other child
        } else {
          recurse(this.content[(index*2) + 1]);
          recurse(this.content[index*2]);
        }

    };

    recurse(0);


  }
};

var mStream = new MedianStream();
// mStream.insert(3);
// mStream.insert(8);
// mStream.insert(7);
// mStream.insert(4);
// mStream.insert(2);
// mStream.insert(5);
// mStream.insert(6);
mStream.insert(3);
mStream.insert(4);
mStream.insert(6);
mStream.insert(8);
mStream.insert(7);
mStream.insert(2);
mStream.insert(5);
mStream.peekMedian();
// => 2
// mStream.insert(5);
// mStream.insert(4);
// mStream.peekMedian();
// => 3
