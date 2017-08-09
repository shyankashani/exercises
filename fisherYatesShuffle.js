const shuffle = deck => {
  let shuffleDeck = [];
  let n = deck.length;

  for (let i = 0; i < n; i++) {
    shuffleDeck.concat(deck.splice(randomNumber(0, deck.length), 1));
  }
};

const randomNumber = (x, y) => {
  return x + Math.floor(Math.random() * Math.abs(x - y));
};
