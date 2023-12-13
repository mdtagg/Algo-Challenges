

const map = (arr,fn) => {
    let newArr = []
    for(let i = 0;i < arr.length;i++) {
        newArr[i] = fn(arr[i])
    }
}

map([1,2,3],function plusOne(n) {return n + 1})