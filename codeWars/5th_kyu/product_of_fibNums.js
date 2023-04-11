
//Given a number (prod), find out if a set of two consecutive fibonacci numbers
//multiplied together is equal to it. If so return an array with the fib numbers
//and true. If not return the next set of fib numbers and false.

//MY SOLUTION 

function productFib(prod){
    let fibNumbers = [0,1]
    let testCase = []
    
    while(fibNumbers[fibNumbers.length - 1] + 
          fibNumbers[fibNumbers.length - 2] < prod) {
      
      let prevNum = fibNumbers[fibNumbers.length - 2]
      let endNum = fibNumbers[fibNumbers.length - 1]
      let nextNum = prevNum + endNum
      fibNumbers.push(nextNum)
    }
    console.log(fibNumbers)
    for(let i = 0;i < fibNumbers.length;i++) {
      if(fibNumbers[i] * fibNumbers[i + 1] === prod) {
        testCase.push(fibNumbers[i])
        testCase.push(fibNumbers[i + 1])
        testCase.push(true)
        break
      }
      else if(fibNumbers[i] * fibNumbers[i + 1] > prod) {
        testCase.push(fibNumbers[i])
        testCase.push(fibNumbers[i + 1])
        testCase.push(false)
        break
      }
    }
    console.log(testCase)
    return testCase
  }

  //BEST SOLUTION

  function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
  }

  /*
  WHAT I LEARNED

  This one was tricky, i think after doing algos all day the crux of this one was
  in part fatigue but still the best solution didnt have to define all the fib
  numbers up to the product. The crux of it was the logic to change the first
  and next number. In the best solution they used subraction to set the first 
  number. 
   */
  

