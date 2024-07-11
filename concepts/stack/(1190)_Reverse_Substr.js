

function reverseParentheses(str) {
  let res = []

  for(let char of str) {
    if(char === ')') {
      let str = [];
      while(res[res.length - 1] !== '(') {
        str.push(res.pop());
      }
      res.pop();
      res = [...res.concat(str)];
      continue;
    }
    res.push(char)
  }
  return res.join("")
}


reverseParentheses("(u(love)i)")

/*
(ed(etco)el)
(edocteel)

var reverseParentheses = function(s) {
  let stack = [];

  for(let i = 0; i < s.length; i++) {
      if(s[i] === ')') {
          let str = [];
          while(stack[stack.length - 1] !== '(') {
              str.push(stack.pop());
          }
          stack.pop(); // remove '('
          stack = [...stack.concat(str)];
          continue;
      }
      stack.push(s[i]);
  }
  return stack.join("");
};

function reverseParentheses(str) {

  let stack = []
  let bt = []
  let res = ''
  let backtrack = false;

  for(let i = 0;i < str.length;i++) {
    if(str[i] === "(") {
      stack.push([])
    }
    else if(str[i] === ")") {
      bt.push([])
      backtrack = true;
      let letters = stack.pop().join("");
      res = letters + res;
      res = res.split("").reverse().join("");
    }
    else {
      !backtrack ? stack[stack.length - 1].push(str[i]) : bt[bt.length - 1].push(str[i])
    }
  }
  return res
}
*/