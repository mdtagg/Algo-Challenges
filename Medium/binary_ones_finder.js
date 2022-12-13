
//Find out how many ones a binary representation of a number (n) has

//MY SOLUTION

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

  //BEST SOLUTION

  function countBits(n) {
    n.toString(2).split('0').join('').length
  }

  /*
  n.toString(2) returns 11101, its then split by 0 to remove the 0s. 
  Its joined back into a string and the length is taken for the answer. 
  */

  /*
   WHAT I LEARNED

   -using .toString on a number lets you provide a radix, which is a base the 
   computer uses to represent the number. It defaults as 10 so for example 29
   has 10 in it twice and then 9 ones. 29 in binary (or radix 2) would be 
   11101. In base two you have 1,2,4,8,16 so 29 minus 16 is 13 (1) 13 - 8 is 
   5 (1) 5 - 4 is 1 (1) 1 - 2 is -1 (0) and 1 - 1 is 1 (1) so 11101.

   -if you assign an already existing array to another already existing array
   it will return the length of the array for some reason
   
   -when indexing the last number in an array you need to specify the array 
   length and then subtract it by one, so not bitChanges[-1], 
   bitChanges[bitChanges.length - 1]

   The crux of finding a more traditonal and less tricky solution was finding
   the pattern to binary code. I started off trying to create a function that 
   modified an array for each value of n which, which I got close to but ultimatley
   proved too tricky. After looking at a binary chart i found the pattern 
   of subtracting base binary units from n. 
   */

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