

const minOperations = (str) => {
    let result1 = 0
    let result2 = 1
    let arr1 = str.split('')
    let arr2 = str.split('')
    arr2[0] = arr2[0] == "1" ? "0" : "1"

    for(let i = 0;i < str.length - 1;i++) {
        if(arr1[i + 1] == arr1[i]) {
            ++result1
            arr1[i + 1] = arr1[i] == 1 ? 0 : 1
        }
        if(arr2[i + 1] == arr2[i]) {
            ++result2   
            arr2[i + 1] = arr2[i] == 1 ? 0 : 1
        }
    }
    return Math.min(result1,result2)
}

minOperations("111000")

/*

const minOperations = (str) => {
    let result1 = 0
    let result2 = 1
    let arr1 = str.split('')
    let arr2 = str.split('')
    arr2[0] = arr2[0] == "1" ? "0" : "1"

    for(let i = 0;i < str.length - 1;i++) {
        result1 = checkStr(arr1,i,result1)
        result2 = checkStr(arr2,i,result2)
    }
    return result1 > result2 ? result2 : result1
}

function checkStr(arr,i,result) {
    if(arr[i + 1] == arr[i]) {
        if(arr[i] == 1) {
            arr[i + 1] = 0
        }else {
            arr[i + 1] = 1
        }
        return ++result
    }
    return result
}
*/