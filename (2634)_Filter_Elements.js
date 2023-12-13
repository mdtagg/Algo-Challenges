

const filter = (arr,fn) => {

    const newArr = []
    let filteredIndex = 0

    for(let i = 0;i < arr.length;i++) {
        if(fn(arr[i],i)) {
            newArr[filteredIndex] = arr[i];
            filteredIndex++
        };
    }
    return newArr
}

function greaterThan10(num) {
    if(num > 10) return true
    return false
}

let arr = [0,10,20,30]

filter(arr,greaterThan10)