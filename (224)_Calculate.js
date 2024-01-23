

var calculate = function(s) {
    let res = 0, sum = 0, sign = 1;
    let myStack = [];
    myStack.push(1);
    const isDigit = (ch) => {
        return ch >= '0' && ch <= '9';
    }
    for(let ch of s){
        
        if(isDigit(ch)) sum = sum * 10 + (ch - '0');
        else{
            res += sum * sign * myStack[myStack.length - 1];
            sum = 0;
            if(ch === '-') sign = -1;
            else if(ch === '+') sign = 1;
            else if(ch === '(') {myStack.push(myStack[myStack.length - 1] * sign); sign = 1;}
            else if(ch === ')') myStack.pop(); 
        }
    }
    return res += (sign * sum);
};

const testCases = [
    "1-11",
    "-2+ 1",
    "1-(     -2)",
    "2147483647",
    "(1+(4+5+2)-3)+(6+8)"
]

console.log(calculate(testCases[4]))

/*
 if(expression[i] === "+" || expression[i] === "-") {
            if(!operand) operand = expression[i]
            else {
                leftOp = parseInt(leftOp)
                rightOp = parseInt(rightOp)
                if(operand === "+") result = leftOp + rightOp
                else result = leftOp - rightOp
                leftOp = result
                rightOp = ""
                operand = undefined
            }
        }
        else if(!operand) leftOp += expression[i]
        else rightOp += expression[i]

const calculate = (s) => {

    let stack = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] === " ") continue
        if(s[i] === "(") {
            stack.push([])
        }
        else if(s[i] === ")") {
            let expression = stack.pop()
            let result = evaluateExp(expression)
            if(stack.length) stack[stack.length - 1].push(result);
            else stack[0] = [result]

        }
        else if(!stack.length) stack.push([s[i]]);
        else stack[stack.length - 1].push(s[i])
    }
    console.log(stack)
    return evaluateExp(stack.pop())
}

function evaluateExp(expression) {
    if((!expression.includes("+") && !expression.includes("-")) || expression.length <= 2) return expression.join('')
    if(expression[0] === "-" || expression[0] === "+") expression.unshift(0)
    let leftOp = parseInt(expression[0])
    let rightOp 
    let currExpression 
    for(let i = 1;i < expression.length;i++) {
        if(expression[i] === "+" || expression[i] === "-") currExpression = expression[i]
        else {
            rightOp = parseInt(expression[i])
            if(currExpression === "+") leftOp += rightOp;
            if(currExpression === "-") leftOp -= rightOp
        }
    }
    return leftOp
}

var calculate = function(s) {
    let res = 0
    let sum = 0
    let sign = 1;
    let myStack = [];
    myStack.push(1);
    const isDigit = (ch) => {
        return ch >= '0' && ch <= '9';
    }
    for(let ch of s){
        if(isDigit(ch)) sum = sum * 10 + (ch - '0');
        else{
            res += sum * sign * myStack[myStack.length - 1];
            sum = 0;
            if(ch === '-') sign = -1;
            else if(ch === '+') sign = 1;
            else if(ch === '(') {myStack.push(myStack[myStack.length - 1] * sign); sign = 1;}
            else if(ch === ')') myStack.pop(); 
        }
    }
    return res += (sign * sum);
};

const calculate = (s) => {

    let stack = []
    let parensStack = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] === "(") {
            parensStack.push("(");
            stack.push([])
        }
        else if(s[i] === ")") {
            let expression = stack.pop()
            let result = evaluateExp(expression)
            if(stack[stack.length - 1] === "+") {
                let priorExp = stack.pop()
                result = evaluateExp([priorExp + result])
            }
        }
        else if(!stack.length) stack.push([s[i]]);
        else stack[stack.length - 1].push(s[i])
    }
}

function evaluateExp(expression) {
    let leftOp = parseInt(expression[0])
    let rightOp 
    let currExpression 
    for(let i = 1;i < expression.length;i++) {
        if(expression[i] === "+" || expression[i] === "-") currExpression = expression[i]
        else {
            rightOp = parseInt(expression[i])
            leftOp += rightOp
        }
    }
    return leftOp
}
*/