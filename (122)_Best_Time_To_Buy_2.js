

const maxProfit = (prices) => {

    let profits = 0
    
    for(let i = 1;i < prices.length;i++) {
        if(prices[i] - prices[i - 1] > 0) {
            profits += prices[i] - prices[i - 1]
        }
    }
    return profits
}

maxProfit([1,2,3,4,5])


/*
ORIGINAL SOLUTION

const maxProfit = (prices) => {

    let profits = 0
    
    let left = 0
    let right = 1

    while(left < prices.length - 1) {
        if(prices[right] - prices[left] > 0) {
            while(prices[right] < prices[right + 1]) right++;
            profits += prices[right] - prices[left]
        }
        left = right 
        right++
    }
    return profits
}

*/
