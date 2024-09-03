

function fractionAddition(expression) {

  let left = ""
  let right = ""
  let operation = ""
  let change = false
  let side = false

  for(let char of expression) {
    if(char == "/") change = true;
    else if(operation !== "") {
      let [leftNum,leftDenom] = left.split("/");
      let [rightNum,rightDenom] = right.split("/")

      let newDenom = leftDenom * rightDenom 
      let newLeftNum = leftNum * rightDenom 
      let newRightNum = rightNum * leftDenom 

     
    }
    else if(char === "-" || char === "+") {
      if(change) {
        side = true 
        change = false
        operation = char
        continue
      }
    }
    side ? right += char : left += char
  }
}

fractionAddition("1/3-1/2+3/4")

-2 - 2

/*
function fractionAddition(expression) {
  let left = ""
  let right = ""
  let change = false
  let side = false
  let sum = 0

  for(let char of expression) {
    if(char === "/") change = true;
    else if(change && (char === "-" || char === "+")) {
      if(char === "-") {
        left = "-" + left
        side = true;
        change = false;
        continue
      }
    }
    side ? right += char : left += char
  }
  let [leftNum,leftDenom] = left.split("/")
  let [rightNum,rightDenom] = right.split("/")

  
}

function fractionAddition(expression) {
  let left = ""
  let right = ""
  let change = false
  let sum = 0

  for(let char of expression) {
    if(char === "-" || char === "+") {
      if(char === "-" && left !== "") {
        left = "-" + left;
      }
    }
    change ? right += char : left += char
  }
}
*/