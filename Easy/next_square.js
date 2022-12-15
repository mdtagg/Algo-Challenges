/* 
Find the next integral perfect square given a number. 
*/


function findNextSquare(sq) {
    let currentSqr = Math.sqrt(sq)
    if(currentSqr % 1 !== 0) {
      console.log(-1)
      return -1;
    }else {
      console.log((currentSqr + 1) ** 2)
      return (currentSqr + 1) ** 2
    }
  }
  
  findNextSquare(114)

  /*
  WHAT I LEARNED

  - finding the modulus (remainder) of a number and seeing if it does or does
  not equal 1 will tell you if its a decimal or an integer. Similar to modulus 
  2 to see if its even or odd. 
  */