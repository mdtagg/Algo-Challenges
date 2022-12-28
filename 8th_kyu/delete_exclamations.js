//delete all the ! from the string

function removeExclamationMarks(s) {
    let newString = s.split('')
    for(let i = 0;i < newString.length;i++) {
      if(newString[i] === '!') {
        newString.splice(i,1)
        i--
      }
    }
    newString = newString.join('')
    return newString
  }
  
  removeExclamationMarks('Hello World!!!')

  //BEST SOLUTION FOUND

  return s.replace(/!/gi, '');

  /*

  WHAT I LEARNED

  -.join returns a new array which makes console.log give the correct answer but
  the return statement a different one. 

  - .replace can be used to simplify the code down 
  
  */