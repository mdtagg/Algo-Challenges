/*
You are given an array prices where prices[i] 
is the price of a given stock on the ith day.

You want to maximize your profit by choosing 
a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve 
from this transaction. If you cannot achieve 
any profit, return 0.
*/

var maxProfit = function(prices) {

    let profit = 0

    for(let i = 0;i < prices.length;i++) {
        let left = i 
        let right = i + 1

        while(prices[right] - prices[left] > profit) {
            profit = Math.max(profit,prices[right] - prices[left])
            right++
        }
    }
    console.log(profit)

};

console.log(maxProfit([3,2,6,5,0,3]))

/*

let low = Infinity
    let high = -Infinity
    let left = 0
    let test = 0

    while(left < prices.length - 1) {
        let right = left + 1
        if(prices[left] < low) {
            low = prices[left];
            high = -Infinity
        }
        if(prices[right] > high && prices[right] > prices[left]) high = prices[right];
        left++;
    }
    console.log(low,high)
    let profit = high - low
    return profit > 0 ? profit : 0
*/