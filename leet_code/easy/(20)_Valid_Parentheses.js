
const isValid = (s) => {

  const validParens = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
  }

  const stack = []

  for(let i = 0;i < s.length;i++) {
    if(validParens[s[i]]) {
        if(validParens[s[i]] !== stack.pop()) return false;
    }else {
      stack.push(s[i])
    }
  }
return stack.length ? false : true
}

isValid("{[]}")


/* Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. 

*/

/*

Stack solution

function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        const top = stack.pop();
        if (
          (char === ')' && top !== '(') ||
          (char === '}' && top !== '{') ||
          (char === ']' && top !== '[')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  console.log(isValid("()")); 

*/

/*
Updated solution 7/13/23

const isValid = (s) => {
  s = s.split('')
  const validParens = ['{}','[]','()']
  let index = 0

  while(index < s.length - 1) {
    const parensTest = s[index] + s[index + 1]
    if(validParens.includes(parensTest)) {
      s.splice(index,2)
      index--
    }else {
      index++
    }
  }
  return s.length ? false : true
}

console.log(isValid("{(()[]{})}))"))
*/

/*

MY ANSWER

var isValid = function(s) {

  let stringArray = s.split('')
    
  if(s.length % 2 !== 0) return false

  while(stringArray.length > 0) {
      
      let testStringArray = stringArray.join('')
      let curlyIndex = testStringArray.search('\\{\\}')
      let parsIndex = testStringArray.search('\\(\\)')
      let squaresIndex = testStringArray.search('\\[\\]')
      let deleteIndex = Math.max(curlyIndex,parsIndex,squaresIndex)
    
    if(curlyIndex !== -1 || parsIndex !== -1 || squaresIndex !== -1) {
      stringArray.splice(deleteIndex,2)
   }else {
      return false
   }
  }
  if(stringArray.length === 0) return true
  }

*/



  

//   // BEST SOLUTION FOUND

//   var isValid = function(s) {
  
//     let stack = []
    
//     let a = {
//       ')': '(',
//       ']': '[',
//       '}': '{'
//     }
    
//     for (let i of s) {
//       if ('([{'.includes(i)) {
//         stack.push(i)
//       } else if (a[i] === stack[stack.length - 1]) {
//         stack.pop()
//       }else{
//         stack.push(i)
//       }
//     }
    
//     if (stack.length)return false
//     return true
//     };

    /* 
  WHAT I LEARNED

  -parenthesis need to be escaped in regex with double slashes

  -.search provides an index for a match against a regex or string

  -.charAt provides a character at an index 

  -object literals can be used as means of associating things we want to compare

  -pop can be used along with splice to delete entries in arrays 

  */

    /*
    This code makes use of an object literal data type. Because the object has key value pairs the 
    two halfs of the parenthesis can be compared. The for of loop loops through the properties of 
    an object or the values of a string or array. If the letter we are iterating on matches the left
    paraenthesis, it added it to an array. If it doesnt match then we apply that character as an index
    to the object, which if its a valid right side paraenthsis will return the left sided one. If this
    equals the last entry in the array weve been adding the characters to, we delete the last entry with 
    pop. Finally if the array has no values in it then we return true else return false. 

    */


    // const validParens = ['{}','[]','()']
  // const left = []
  // const right = []
  // const medianIndex = s.length / 2 - 1
  
  // for(let i = 0;i <= medianIndex;i++) {
  //   left.push(s[i])
  // }
  
  // for(let i = s.length - 1;i > medianIndex;i--) {
  //   right.push(s[i])
  // }

  // for(let i = 0;i < left.length;i++) {
  //   if(!validParens.includes(left[i] + right[i])) return false
  // }
  // return true
  // console.log({right,left})

