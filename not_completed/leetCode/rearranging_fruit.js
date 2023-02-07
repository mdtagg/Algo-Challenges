var minCost = function(basket1, basket2) {
    let baskets = [basket1,basket2]
    let totals = baskets.map(basket => {
        basket.sort()
        return basket.reduce((total,amt) => {
            return total + amt
        })
    })
    console.log(basket1,basket2)
    let costNeeded = Math.abs(totals[0] - totals[1])
    console.log(totals)
    console.log(costNeeded)
    for(let i = 0;i < baskets[0].length;i++) {
        for(let j = 0;j < baskets[1].length;j++) {
            if(baskets[0][i] - baskets[1][j] === costNeeded) {

            }
        }
    }
};

minCost([4,2,2,2],[1,4,1,2])