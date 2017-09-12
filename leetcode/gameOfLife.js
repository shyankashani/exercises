var gameOfLife = function(board) {

  var queue = [];

  // iterate through each row
  for (var row = 0; row < board.length; row++) {
    // iterate through each column
    for (var col = 0; col < board[row].length; col++) {
      // if the item is a 0
      if (board[row][col] === 0) {
        // if the sum of all the neighbors equals three
        if (neighbors(board, row, col).reduce((x,y) => { return x + y }, 0) === 3) {
          // live the item
          queue.push([(e, f, g) => { live(e, f, g) }, [board, row, col]] );
        }
      }
      // if the item is a 1
      if (board[row][col] === 1) {
        // if the sum of all the neighbors is less than 2 or greater than 3
        if (neighbors(board, row, col).reduce((x,y) => { return x + y }, 0) < 2 || neighbors(board, row, col).reduce((x,y) => { return x + y }, 0) > 3) {
          // kill the item
          queue.push([(e, f, g) => { kill(e, f, g) }, [board, row, col]] );
        }
      }
    }
  }

  dequeue(queue);

}

var kill = function(b, m, n) {
  b[m][n] = 0;
}

var live = function(b, m, n) {
  b[m][n] = 1;
}

var neighbors = function(b, m, n) {

  if (b.length === 0) { return [0]; }
  if (b[m].length === 0) { return [0]; }

  var results = [];

  if (m !== 0) {
    var above = b[m - 1][n];
    results.push(above);
  }

  if (m !== b.length - 1) {
    var below = b[m + 1][n];
    results.push(below);
  }

  if (n !== 0) {
    var left = b[m][n - 1];
    results.push(left);
  }

  if (n !== b[m].length - 1) {
    var right = b[m][n + 1];
    results.push(right);
  }

  if (m !== 0 && n !== 0) {
    var aboveLeft = b[m - 1][n - 1];
    results.push(aboveLeft);
  }

  if (m !== b.length - 1 && n !== b[m].length - 1) {
    var belowRight = b[m + 1][n + 1];
    results.push(belowRight);
  }

  if (m !== 0 && n !== b[m].length - 1) {
    var aboveRight = b[m - 1][n + 1];
    results.push(aboveRight);
  }

  if (m !== b.length - 1 && n !== 0) {
    var belowLeft = b[m + 1][n - 1];
    results.push(belowLeft);
  }

  return results;
}

var dequeue = function(q) {
  for (var i = 0; i < q.length; i++) {
    q[i][0](q[i][1][0], q[i][1][1], q[i][1][2]);
  }
}
