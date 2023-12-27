

const minCost = (colors,neededTime) => {

    let left = 0
    let right = 1
    let result = 0

    while(right < colors.length) {

        let tempArr = [neededTime[left]]
        let total = tempArr[0]
        let max = tempArr[0]
       
        while(colors[left] === colors[right]) {
            max = Math.max(max,neededTime[right])
            total += neededTime[right]
            tempArr.push(neededTime[right]);
            right++;
        }
        if(tempArr.length > 1) {
            result += total - max
        }
        left = right
        right = left + 1
    }
    return result
}

console.log(minCost("aaabbbabbbb",[3,5,10,7,5,3,5,5,4,8,1]))

/*
ORIGINAL SOLUTION

const minCost = (colors,neededTime) => {

    let left = 0
    let right = 1
    let result = 0

    while(right < colors.length) {

        let tempArr = [neededTime[left]]
        let total = tempArr[0]
        let max = tempArr[0]
       
        while(colors[left] === colors[right]) {
            max = Math.max(max,neededTime[right])
            total += neededTime[right]
            tempArr.push(neededTime[right]);
            right++;
        }
        if(tempArr.length > 1) {
            result += total - max
        }
        left = right
        right = left + 1
    }
    return result
}


const minCost = (colors,neededTime) => {

    let count = 0
    let time = 0
    let arr = Array.from(colors)

    for(let i = 0;i < arr.length;i++) {
        if(arr[i] === arr[i + 1]) { 
            arr.splice(i,1)
            time += Math.min(neededTime[i + count],neededTime[i + 1 + count])
            count++
            i--
        }
    }
    return time
}
*/