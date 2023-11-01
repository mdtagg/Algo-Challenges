

function findArray(pref) {
    const result = [pref[0]]
    for(let i = 0;i < pref.length - 1;i++) {
        const arr = [pref[i],pref[i + 1]].map(number => number.toString(2).split(''))
        console.log(arr)

    }
    // while(pref.length > 1) {
    //     const arr = [pref.shift(), pref[0]].map(number => number.toString(2))
    //     const largest = Math.max(...[arr[0].length,arr[1].length])
    //     console.log(arr)
        // let test = []
        // for(let i = largest - 1;i >= 0;i--) {
        //     const first = !arr[0][i] ? "0" : arr[0][i]
        //     const second = !arr[1][i] ? "0" : arr[1][i]
        //     first !== second ? test.push('1') : test.push('0')
        // }
        // const number = parseInt(test.join(''),2)
        // result.push(number)
    // }
    // return result
}

console.log(findArray([5,2,0,3,1]))

/*
XOR (exclusive or) is a comparison between two integers represented in bits 

If the two bits are both 0 or both 1 then the corresponding output is 0 else its 1

Take the first two numbers in our array [5,2,0,3,1]. Five is 101 and two is 10 (or 010)

101
010
---
111

The output being 7


The problem wants use to move through each number in the array and find the next XOR value



function findArray(pref) {
    const result = [pref[0]]
    while(pref.length > 1) {
        const arr = [pref.shift(), pref[0]].map(number => number.toString(2).split('').reverse().join(''))
        const largest = Math.max(...[arr[0].length,arr[1].length])
        console.log(arr)
        let test = []
        for(let i = largest - 1;i >= 0;i--) {
            const first = !arr[0][i] ? "0" : arr[0][i]
            const second = !arr[1][i] ? "0" : arr[1][i]
            first !== second ? test.push('1') : test.push('0')
        }
        const number = parseInt(test.join(''),2)
        result.push(number)
    }
    return result
}

*/