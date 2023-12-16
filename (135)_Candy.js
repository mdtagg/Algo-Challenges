

const candy = (ratings) => {
    let test = [1,1,1]
    let result = 0
    let max = 1

    for(let i = 1;i < ratings.length - 1;i++) {
        test.push(1)
        let left = ratings[i - 1]
        let center = ratings[i]
        let right = ratings[i + 1]

        if(left < center && right < center) continue
        if(left > center) test[i - 1]++
        if(right > center) test[i + 1] += test[i]

    }
}

candy([1,0,2,4,5,4,6])