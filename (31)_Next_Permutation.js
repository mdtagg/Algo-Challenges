

const nextPermutation = (arr) => {

    let min = parseInt(arr.join(''))
    let maxArray = Array.from(arr).sort((a,b) => b - a)
    let max = parseInt(maxArray.join('')) + 1
    console.log(maxArray)
    let i = 0
    while(i < arr.length) {
        let num = arr.pop()
        arr.unshift(num)
        if(parseInt(arr.join('')) < max && parseInt(arr.join('')) > min) {

        }
    }


    // let max = parseInt(maxArray.join(''))

    // for(let i = 0;i < arr.length - 1;i++) {
    //     for(let j = i + 1;j < arr.length;j++) {
    //       const test = Array.from(maxArray)
          
    //     }
    // }
}
//3,2,1

console.log(nextPermutation([1,3,2]))

/*
test[i] = arr[j]
          test[j] = arr[i]
            // function switchNums(arr,i,j) {
            //     let temp = arr[i]
            //     arr[i] = arr[j]
            //     arr[j] = temp
            // }
            // switchNums(arr,i,j)
            
            const num = parseInt(test.join(''))

            if(num <= max && num > min) {
                // let temp = arr[i]
                // arr[i] = arr[j]
                // arr[j] = temp
                arr = test
                max = num 
                i = 0
                
            }

 let min = parseInt(arr.join(''))
    let max = parseInt(Array.from(arr).sort((a,b) => b - a).join('')) + 1
    if(min === max - 1) {
        arr.reverse()
        return
    }

    function switchNums(arr,j,i) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }
   
    for(let i = arr.length - 1;i >= 1;i--) {
      for(let j = i - 1;j >= 0;j--) {
        switchNums(arr,j,i)
        const num = parseInt(arr.join(''))
        if(num < max && num > min) {
          max = num
          i = j = arr.length - 1
        }else {
          switchNums(arr,j,i)
        }
      }
    }

*/