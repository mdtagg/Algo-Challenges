/*
Given a set of functions like this one(plus(two())) return the correct value 
*/


function zero(args) {
    if(args === undefined) {
      return 0
    }else {
      let testFunction = args[0]
      testFunction(-1,[0,args[1]])
    }
  }
  function one(args) {
    if(args === undefined) {
      return 1
    }else {
      let testFunction = args[0]
      testFunction(-1,[1,args[1]])
    }
  }
  function two(args) {
    if(args === undefined) {
      return 2
    }else {
      let testFunction = args[0]
      testFunction(-1,[2,args[1]])
    }
  }
  function three(args) {
    if(args === undefined) {
      return 3
    }else {
      let testFunction = args[0]
      testFunction(-1,[3,args[1]])
    }
  }
  function four(args) {
    if(args === undefined) {
      return 4
    }else {
      let testFunction = args[0]
      testFunction(-1,[4,args[1]])
    }
  }
  
  function five(args) {
    if(args === undefined) {
      return 5
    }else {
      let testFunction = args[0]
      testFunction(-1,[5,args[1]])
    }
  }
  function six(args) {
    if(args === undefined) {
      return 6
    }else {
      let testFunction = args[0]
      testFunction(-1,[6,args[1]])
    }
  }
  
  function seven(args) {
    if(args === undefined) {
      return 7
    }else {
      let testFunction = args[0]
      testFunction(-1,[7,args[1]])
    }
  }
  function eight(args) {
    if(args === undefined) {
      return 8
    }else {
      let testFunction = args[0]
      testFunction(-1,[8,args[1]])
    }
  }
  function nine(args) {
    if(args === undefined) {
      return 9
    }else {
      let testFunction = args[0]
      testFunction(-1,[9,args[1]])
    }
  }
  
  function plus(number,array) {
    if(number !== -1) {
      return [(number,array) => plus(number,array),number]
    }else {
      console.log(array[0] + array[1])
    }
  }
  function minus(number,array) {
    if(number !== -1) {
      return [(number,array) => minus(number,array),number]
    }else {
      console.log(array[0] - array[1])
    }
  }
  function times(number,array) {
    if(number !== -1) {
      return [(number,array) => times(number,array),number]
    }else {
      console.log(array[0] * array[1])
    }
  }
  function dividedBy(number,array) {
    if(number !== -1) {
      return [(number,array) => dividedBy(number,array),number]
    }else {
      console.log(Math.floor(array[0] / array[1]))
    }
  }
  
  five(plus(four()))
  
  
  //BEST SOLUTION FOUND

  function zero(fn) {return fn ? fn(0) : 0}
  function one(fn) {return fn ? fn(1) : 1}
  function two(fn) {return fn ? fn(2) : 2}
  function three(fn) {return fn ? fn(3) : 3}
  function four(fn) {return fn ? fn(4) : 4}
  function five(fn) {return fn ? fn(5) : 5}
  function six(fn) {return fn ? fn(6) : 6}
  function seven(fn) {return fn ? fn(7) : 7}
  function eight(fn) {return fn ? fn(8) : 8}
  function nine(fn) {return fn ? fn(9) : 9}
  
  function plus(n) {return function(v) {return v + n}}
  function minus(n) {return function(v) {return v - n}}
  function times(n) {return function(v) {return v * n}}
  function dividedBy(n) {return function(v) {return v / n}}

  /*

  WHAT I LEARNED

  -functions can be passed up to other functions as long as you wrap them in 
  another function. 

  -if you are calling a function inside of another function and need the return
  value of the function thats being called, you need to put a return statement 
  on where you call the function as well as inside of the function being called

  The best solution is basically what i did just with ternarys so it looks cleaner
  The trick here was to being able to pass the functions up and down to other 
  functions. 
  
  */
  
  
  
  
  