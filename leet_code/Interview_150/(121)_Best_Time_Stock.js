var maxProfit = function(prices) {
  let maxDiff = 0
  let min = Infinity
  
  for (let i = 0; i < prices.length; i++) {
     const diff = prices[i] - min
     if (diff > maxDiff) maxDiff = diff
     if (prices[i] < min) min = prices[i]
  }
  return maxDiff
};

maxProfit([7,6,4,3,1])

/*
var maxProfit = function(prices) {
  let lowest = Infinity
  let maxProfit = -Infinity

  for(let price of prices) {
      lowest = Math.min(lowest,price)
      maxProfit = Math.max(maxProfit,price - lowest)
  }

  return maxProfit
};
*/