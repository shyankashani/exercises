var MedianStream = function() {
  this.left = [];
  this.right = [];
};

MedianStream.prototype = {
  insert: function (number) {
    this.left.push(number);
    this.leftBubble(this.left.length - 1);
    console.log(this);
  },

  size: function () {
    return this.left.length + this.right.length;
  },

  peekMedian: function () {
    if (this.size() % 2 === 0) {
      return ((this.left[0] + this.right[0]) / 2);
    } else {
      return this.left[0];
    }
  },

  leftBubble: function (i) {
    var childNumber = this.left[i];
    while (i > 0) {
      var iP = Math.floor((i + 1) / 2) - 1;
      var parentNumber = this.left[iP];
      if (childNumber <= parentNumber) { break } else {
        this.left[iP] = childNumber;
        this.left[i] = parentNumber;
        i = iP;
      }
    }
    this.compareHeaps();
  },

  rightBubble: function (i) {
    var childNumber = this.right[i];
    while (i > 0) {
      var iP = Math.floor((i + 1) / 2) - 1;
      var parentNumber = this.right[iP];
      if (childNumber >= parentNumber) { break } else {
        this.right[iP] = childNumber;
        this.right[i] = parentNumber;
        i = iP;
      }
    }
  },

  compareHeaps: function() {
    if (Math.abs(this.left.length - this.right.length) > 1) {
      this.right.push(this.left.shift());
      this.leftBubble(this.left.length - 1);
      this.rightBubble(this.right.length - 1);
    }
    if (this.left[0] > this.right[0]) {
      this.right.push(this.left.shift());
      this.leftBubble(this.left.length - 1);
      this.rightBubble(this.right.length - 1);
    }
  }


};

// var mStream = new MedianStream();
// mStream.insert(1);
// mStream.insert(3);
// mStream.insert(2);
// mStream.peekMedian();
// mStream.insert(5);
// mStream.insert(4);
// mStream.peekMedian();

var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(7);
mStream.insert(2);
mStream.insert(6);
mStream.peekMedian();
