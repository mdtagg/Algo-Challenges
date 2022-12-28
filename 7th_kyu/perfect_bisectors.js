
/*
Given n, find the number of perfect bisecting lines (number of crosses)
*/

// MY SOLUTION


function maxBisectors(n) {
    if(n === 0 || n === 1) {
      return 0
    } else {
      
      let numLines = 0
      let increment = 1
      let oddIncrement = 1
      let oddNumLines = 0
      let counter = 2
      
      while(counter <= n) {
        if(counter % 2 === 0) {
          numLines += increment 
          increment += 2
        }else {
          oddNumLines = numLines
          oddNumLines += oddIncrement
          oddIncrement++
        }
        counter++
      }
      if(n % 2 === 0) {
        console.log('evenNumLines: ',numLines)
        return numLines
      }else {
        console.log('oddNumLines: ',oddNumLines)
        return oddNumlines
      }
    }
  }
  
  
  maxBisectors(51)


  //BEST SOLUTION FOUND 

  function maxBisectors(n) {
    return Math.floor(n ** 2 / 4)
  }

  /* WHAT I LEARNED 

  This challenge was just tricky, not too much to learn in hard skills context.
  Finding the pattern of the incrementing number of bisectors was the trick. 
  At first i thought lines 1 through 3 were unique the pattern didnt emerge until
  4 and beyond but after solving 4 and beyond I just had to change where numLines
  started and where the incrementing variables started. The trick was to seperate
  the return values into even (numLines) and odd(oddNumLines) each with their
  own incrementer. At the end depending on wether n is even or odd i returned 
  numLines or oddNumLines. The best solution i found was a one liner but had 
  a different pattern for finding the value, which was squaring the n value 
  that the loop is on and then dividing by 4 and flooring it. Honestly this 
  approach is too tricky to be practical, i understand how it works but 
  only works in this specific context. 

 */
