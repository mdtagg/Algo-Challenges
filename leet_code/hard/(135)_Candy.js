

const candy = (ratings) => {
    let rLen = ratings.length
    let newArr = new Array(rLen).fill(1)
    
    for(let i = 1;i < rLen;i++) {
        if(ratings[i] > ratings[i - 1]) {
            newArr[i] = newArr[i - 1] + 1
        }
    }

    for(let i = rLen - 2;i >= 0;i--) {
        if(ratings[i] > ratings[i + 1]) {
            newArr[i] = Math.max(newArr[i],newArr[i + 1] + 1)
        }
    }
    return newArr.reduce((total,amt) => total + amt)
}

candy([1,0,2,4,5,4,6])

/*
const candy = (ratings) => {
    let newArr = new Array({length:ratings.length}).fill(0)
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
*/