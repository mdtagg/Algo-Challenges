

const calculate = (s) => {

    let expressionStack = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] === " ") continue
        if(s[i] === "(") {
            expressionStack.push([])
        }
        else if(s[i] === ")") {
            let expression = expressionStack.pop()
            let result = evaluateExp(expression)
            if(expressionStack.length) expressionStack[expressionStack.length - 1].push(result);
            else expressionStack[0] = [result]

        }
        else if(!expressionStack.length) expressionStack.push([s[i]]);
        else expressionStack[expressionStack.length - 1].push(s[i])
    }
    console.log(expressionStack)
    return evaluateExp(expressionStack.pop())
}

function evaluateExp(expression) {
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

console.log(calculate("2147483647"))

/*
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

    let expressionStack = []
    let parensStack = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] === "(") {
            parensStack.push("(");
            expressionStack.push([])
        }
        else if(s[i] === ")") {
            let expression = expressionStack.pop()
            let result = evaluateExp(expression)
            if(expressionStack[expressionStack.length - 1] === "+") {
                let priorExp = expressionStack.pop()
                result = evaluateExp([priorExp + result])
            }
        }
        else if(!expressionStack.length) expressionStack.push([s[i]]);
        else expressionStack[expressionStack.length - 1].push(s[i])
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