// Create a blackjack object
var blackjack = {};

// Create a deck object property on that blackjack object
blackjack.deck = [['A', 'A'], ['J', 10], ['Q', 10], ['K', 10], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]

// Create a player object property on the blackjack object
blackjack.players = {};

// Create a participate method on the blackjack object that accepts a player name
blackjack.participate = function(name) {
  // Adds a player to the player object with a value of two random cards
  blackjack.players[name] = [blackjack.random(), blackjack.random()];
  // Logs the two random cards for the player to see
  console.log('Here is your hand: ', blackjack.players[name]);
}

// Create a random method on the blackjack object
blackjack.random = function() {
  return blackjack.deck[(Math.random() * 12).floor()]
}

// Create a hit method on the blackjack object that accepts a player name
blackjack.hit = function(name) {
  // Adds a random card to the player's hand
  blackjack.players[name].push(blackjack.random());
  // If the card is an 'A'
  if (blackjack.players[name])
  // If the sum of the
  // Else Check
}


// Create a choose method on the blackjack object that accepts a string and a player name
  // If the string is equal to 'high'
    // Add aHigh to the player's hand
  // If the string is equal to 'low'
    // Add aLow to the player's hand
  // Run the check function

// Create a check method on the blackjack object that accepts a player's name
  // If the sum of the cards values is over 21
      // Delete the player from the players object
      // Log you lose
    // If the sum of the cards values is not over 21
      // Log the new value

// Create a stay method on the blackjack object that accepts a player name
  // Set the player's status to stay
  // Log the current value of the player's hand
  // If all players' statuses are 'stay'
    // Return the name of the player with the highest hand value
