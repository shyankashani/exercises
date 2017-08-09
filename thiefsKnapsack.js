// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

var Knapsack = function(limit) {
  this.limit = limit;
}

Knapsack.prototype.steal = function(goods) {

  // Create an array fits
  var plunder;

  // Create a recursive function that accepts weightSoFar, goodsSoFar, goodsRemaining
  var recurse = (weightSoFar, goodsSoFar, goodsRemaining) => {

    // Create a variable that is number of recursions and set it equal to zero
    var numberOfRecursions = 0;

    // Loop through the goodsRemaining array
    for (var i = 0; i < goodsRemaining.length; i++) {
      var newWeight = goodsRemaining[i].weight + weightSoFar;
      // If adding the weight of the good to weightSoFar is less than the Knapsack's limit
      if (newWeight < this.limit) {
        // Call the recursive function on
          // the addition of the weight of the good and weightSoFar
          // the goodsSoFar array with the new good pushed into it
          // and the goodsRemaining array with the good sliced out of it
        numberOfRecursions++;
        recurse(newWeight, goodsSoFar.concat([goodsRemaining[i]]), goodsRemaining.slice(0, i).concat(goodsRemaining.slice(i + 1)));
      // Else
    } else {
        // Continue
        continue;
      }
    }

    // If number of recursions is equal to zero
    if (numberOfRecursions === 0) {

      var plunderWorth = plunder.reduce((a, b) => { return a.worth + b.worth });
      var goodsSoFarWorth = goodsSoFar.reduce((c, d) => { return c.worth + d.worth });

      if (plunderWorth < goodsSoFarWorth) {
        plunder = goodsSoFar;
      }
    }
  }

  // Call the recursive function on zero, an empty array, and the goods array
  recurse(0, [], goods);

  // Return the reduction of the fits array
  return plunder;
}

var Good = function(name, weight, worth) {
  this.name = name;
  this.worth = worth;
  this.weight = weight;
}

var goods = [];

var pearl = new Good('pearl', 1, 3000);
var ruby  = new Good('ruby', 10, 2000);
var jewel = new Good('jewel', 5, 1500);
var lapis = new Good('lapis', 20, 1750);
var jade  = new Good('jade', 15, 750);
var stone = new Good('stone', 25, 1250);
var gold  = new Good('gold', 35, 2750);

goods.push(pearl);
goods.push(ruby);
goods.push(jewel);
goods.push(lapis);
goods.push(jade);
goods.push(stone);
goods.push(gold);


var thiefsack = new Knapsack(60);

thiefsack.steal([{name: '', worth: 4, weight: 4}, {name: '', worth: 4, weight: 3}, {name: '', worth: 10, weight: 1}, {name: '', worth: 3, weight: 7}]);
