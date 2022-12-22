function moveZeros(arr) {
    console.log(arr)
    let count = 0
    for(let i = 0;i < arr.length;i++) {
        count++
        if(count > arr.length) {
            break
        }
        else if(arr[i] === 0) {
            arr.splice(i,1)
            arr.push(0)
            i -= 1
        }
    }
    console.log(arr)
  }

moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ])