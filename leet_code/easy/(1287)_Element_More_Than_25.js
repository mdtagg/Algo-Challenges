

const findSpecialInteger = (arr) => {

    let counter = 0
    let currNum = arr[0]

    for(let i = 0;i < arr.length;i++) {
        if(currNum !== arr[i]) {
            counter = 0
            currNum = arr[i]
        }
        counter++
        if(counter / arr.length > .25) return currNum
    }
}

findSpecialInteger([1,2,3,3])

/*
ORIGINAL SOLUTION 

const findSpecialInteger = (arr) => {

    const numMap = new Map()

    for(let i = 0;i < arr.length;i++) {
        numMap.set(arr[i],(numMap.get(arr[i]) || 0) + 1)
        if(numMap.get(arr[i]) / arr.length > .25) return arr[i]
    }
}
*/