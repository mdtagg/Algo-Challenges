

var numWaterBottles = function(numBottles, numExchange) {

  let result = numBottles;
  let carry = 0;

  while(numBottles) {
      if(numBottles < numExchange) return result
      carry = numBottles % numExchange
      result += Math.floor(numBottles / numExchange)
      numBottles = carry + Math.floor(numBottles / numExchange)
  }
  return result
};

numWaterBottles(15,4)