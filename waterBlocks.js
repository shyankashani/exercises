var waterBlocks = function (blocks) {
  var water = 0;

  var recurse = function (towers) {
    if (!checkWater(towers)) {
      return water;
    } else if (towers.contains(0)) {
      var waterSoFar = 0;
      for (var i = 0; i < towers.length; i++) {
        if (towers[i] === 0) {
          waterSoFar++;
        } else {
          water = water + waterSoFar;
          waterSoFar = 0;
        }
      }
    } else {
      normalize(towers);
      recurse(towers);
    }
  };

  recurse(blocks);

};



var normalize = function (blocks) {
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] > 0) { blocks[i] = blocks[i] - 1 }
  }
};

var checkWater = function (blocks) {
  return blocks.reduce((a,b) => {
    return a + b;
  })
}
