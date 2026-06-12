

var maxBottlesDrunk = function(numBottles, numExchange) {
  let drunk = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
      drunk += 1;
      empty -= numExchange - 1; 
      numExchange += 1;
  }

  return drunk;
};

maxBottlesDrunk(10,3)