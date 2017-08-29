var MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  if (this.stack.length > 0) {
    if (x < this.getMin()) {
      this.stack.push({ val: x, min: x })
    } else {
      this.stack.push({ val: x, min: this.getMin() })
    }
  } else {
    this.stack.push({ val:x, min: x })
  }
};

MinStack.prototype.pop = function() {
  this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].val;
};

MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};


var obj = Object.create(MinStack).createNew()
obj.push(x)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
