

const getWinner = (arr,k) => {
    let maxVal = arr[0];
    let count = 0;
    for (let i = 1; i < arr.length && count < k; ++i) {
        if (maxVal < arr[i]) {
            maxVal = arr[i];
            count = 0;
        }
        ++count;
    }
    return maxVal;
}

getWinner([99999,1,3,5,4,6,7],20)

/*

OG SOLUTION

const getWinner = (arr,k) => {
    const winners = new Map().set(arr[0],0)
    let len = arr.length
    while(winners.get(arr[0]) < k) {
        if(len === 0 || arr[0] === Math.max(...arr)) return arr[0];
        if(arr[0] < arr[1]) {
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
            len = arr.length
        }
        len--
        winners.set(arr[0],(winners.get(arr[0]) || 0) + 1)
        arr.push(...arr.splice(1,1))
    }
    return arr[0]
}
*/