//Given a sentence (x) find out what the highest scoring word is. 
//Each letter is given a score a = 1 and so on 

function high(x){
    let xStr = x.split(' ')
    let highest = []
    
    for(let i = 0;i < xStr.length;i++) {
      let value = 0
      for(let j = 0;j < xStr[i].length;j++) {
        value += xStr[i][j].charCodeAt() - 96
      }
      highest.push(value)
    }
    let max = Math.max(...highest)
    let highestIndex = highest.indexOf(max)
    return xStr[highestIndex]
  }

//BEST SOLUTION

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
  }

/*
This solution is doing a lot of chaining. The reduce function could have 
simplified my for loops in the middle. All in all this code is very similar
to mine except with the reduce function and more chaining. 
*/

/*
WHAT I LEARNED

- the crux here was at the end when i didnt subtract 96 from the charcode values
I thought that even though the charcodes start at 97, they each increase by one
so even though the values were higher they should have still been accurate as 
far as what the highest scoring word was. This was not the case i think it might
have had something to do with the indexing. char code for a is 97 but z is 122
which subtracts to 25. Because a is essentially zero indexed here it think it 
was giving me incorrect counts. 
*/

//CODE GRAVEYARD

// function high(x){
//     let xStr = x.split(' ')
//     let highest = []
//     console.log(xStr)
//     for(let i = 0;i < xStr.length;i++) {
//       let value = 0
//       for(let j = 0;j < xStr[i].length;j++) {
//         value += xStr[i][j].charCodeAt()
//       }
//       highest.push(value)
//     }
//     console.log(highest)
//     let max = Math.max(...highest)
//     let heighestIndex = highest.indexOf(max)
//     console.log(xStr[heighestIndex])
//     return xStr[heighestIndex]
//   }