var waterBlocks = function(blocks) {
  var water = 0;

  var recurse = function(blocks) {
    // Declare a waterSoFar variable and set it equal to zero
    var waterSoFar = 0;

    // Declare a towerBehind variable and set it equal to false
    var towerBehind = false;

    // If the sum of all the numbers in the array of blocks is equal to 0
    if (blocks.reduce((a,b) => { return a + b }, 0) === 0) {
      // Return
      return;
      // Else
    } else {
      // Loop through the blocks
      for (var i = 0; i < blocks.length; i++) {
        // If the block is greater than 0
        if (blocks[i] > 0 && towerBehind === true) {
          // Add waterSoFar to water
          water = water + waterSoFar;
          // Set waterSoFar to zero
          waterSoFar = 0;
          // If the block is equal to 0
        } else if (blocks[i] > 0 && towerBehind === false) {
          towerBehind = true;
        } else if (blocks[i] === 0 && towerBehind === true) {
          // Add 1 to waterSoFar
          waterSoFar++;
        }
      }

      // Loop through the blocks
      for (var j = 0; j < blocks.length; j++) {
        // If the block is greater than 0
        if (blocks[j] > 0) {
          // Subtract one from the block
          blocks[j] = blocks[j] - 1;
        }
      }
      // Perform the recursive function on the newly normalize array of blocks
      recurse(blocks);
    }

  };

  recurse(blocks);

  return water;
}
