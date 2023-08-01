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

    let left = 0
    let right = 0
    let maxProfit = 0

    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit,profit)
        }else {
            left = right
        }
        right++
    }
    return maxProfit
};

console.log(maxProfit([3,2,6,5,0,3]))

//




















/*
REDOS: 2

PERFORMANCE SOLUTION

let left = 0; 
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; 

        max_profit = Math.max(max_profit, profit);
        } else {
        left = right;
        }
        right++;
    }
    return max_profit;

INITIAL SOLUTION

var maxProfit = function(prices) {

    let profit = 0

    for(let i = 0;i < prices.length;i++) {
        let left = i 
        let right = i + 1

        while(prices[left] < prices[right]) {
            profit = Math.max(profit,prices[right] - prices[left])
            right++
        }
    }
    return profit
};

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