
function countBits(n) {
    let bitChanges = []
    let ones = []
    let start = 1
    let count = 1
    
    while(start <= n) {
      bitChanges.push(start)
      start *= 2
    }
    
    while(n > 0) {
      if(n - bitChanges[bitChanges.length - count] >= 0) {
        n -= bitChanges[bitChanges.length - count]
        ones.push(1)
      }
      count++
    }
    console.log(ones.length)
    return ones.length
  }

  //CODE GRAVEYARD

// var countBits = function(n) {
//   let binaryArray = [1,0,0]
//   let startArray = [1,0,0]
//   let start = 5
//   let countOne = 1
//   let countTwo = 2
  
//   while(start <= n) {
//     console.log('Before: ',binaryArray)
//     if(binaryArray.every(entry => entry === 1)) {
//       countOne = 1
//       countTwo = 2
//       startArray.push(0)
//       binaryArray = startArray
//       console.log(binaryArray)
//       return
//     }else if(binaryArray[countOne] === 1 &&
//              binaryArray[countTwo] === 1) {
//       countTwo++
//       binaryArray[binaryArray.length - countTwo] = 1
//     }
//     else if(binaryArray[binaryArray.length - countOne] === 0) {
//       binaryArray[binaryArray.length - countOne] = 1
//     }else if(binaryArray[binaryArray.length - countOne] === 1) {
//       binaryArray[binaryArray.length - countTwo] = 1
//       binaryArray[binaryArray.length - countOne] = 0
//     }
    
//     console.log('After: ',binaryArray)
//     start++
//   }
// }