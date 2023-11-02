

function nextPurmutation(arr) {
    let min = parseInt(arr.join(''))
    let max = parseInt(Array.from(arr).sort((a,b) => b - a).join(''))
   
    for(let i = arr.length - 1;i >= 0;i--) {
      for(let j = i - 1;j >= 0;j--) {
        const testArr = Array.from(arr)
        let temp = arr[j]
        testArr[j] = testArr[i]
        testArr[i] = temp

        if(parseInt(testArr.join('')) < max && parseInt(testArr.join('')) > min) {
            max = parseInt(testArr.join(''))
            arr = testArr
            i = j = arr.length - 1
            
        }
      }
    }
}

11852700

nextPurmutation([1,3,2])

/*
 //     for(let j = arr.length - 2;j >= 0;j--) {
    //         if(arr[i] > arr[j]) {
    //             let tempOne = arr[j]
    //             let tempTwo = arr[i]
    //             arr.splice(i,1,tempOne)
    //             arr.splice(j,1,tempTwo)
    //             console.log(arr)
    //             i = 0
    //             j = i + 1
    //         }
    //     }
*/