var minimumCost = function(cost) {
    cost = cost.sort((a,b) => b - a);
    let n = cost.length
    let total = 0;
    let count = 0;
    for(let i = 0;i < n;i++) {
        if(count === 2) {
            count = 0;
            continue;
        }
        total += cost[i];
        count++;
    }
    return total;
};