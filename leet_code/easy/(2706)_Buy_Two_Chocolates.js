

const buyChoco = (prices,money) => {

    prices = prices.sort((a,b) => a - b)

    for(let i = 0;i < prices.length;i++) {
        let price = prices[i] + prices[i + 1]
        if(money - price >= 0) return money - price
        if(money - price < 0) return money
    }
    return money
}

buyChoco([3,2,3],3)