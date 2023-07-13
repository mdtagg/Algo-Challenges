
const evalRPN = (tokens) => {
    const stack = []

    for(let i = 0;i < tokens.length;i++) {
        const isNumber = parseInt(tokens[i])
        
        if(Number.isNaN(isNumber)) {

            const operandRight = stack.pop()
            const operator = tokens[i]
            const operandLeft = stack.pop()
            
            if(operator === '/') {
                stack.push(Math.trunc(operandLeft / operandRight))
            }else {
                stack.push(eval(`${operandLeft} ${tokens[i]} ${operandRight}`))
            }

        }else {
            stack.push(parseInt(tokens[i]))
        }
    }
    console.log({stack})
    return stack[0]
}

console.log(evalRPN(["0","3","/"]))



/*
FIRST SOLUTION

const evalRPN = (tokens) => {
    let stack = []

    for(let i = 0;i < tokens.length;i++) {
        let isNumber = parseInt(tokens[i])
        
        if(Number.isNaN(isNumber)) {

            let operandRight = stack.pop()
            let operandLeft = stack.pop()

            switch(tokens[i]) {
                case "/":
                    stack.push(Math.trunc(operandLeft / operandRight))
                    break
                case "+":
                    stack.push(operandLeft + operandRight)
                    break
                case "-":
                    stack.push(operandLeft - operandRight)
                    break 
                case "*":
                    stack.push(operandLeft * operandRight)
                    break
            }
            
        }else {
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack[0]
}
*/

// for(let i = 0;i < tokens.length;i++) {
//     let isNumber = parseInt(tokens[i + 1])
    
//     if(!isNumber) {

//         let operandLeft = stack.pop()
//         let operandRight = parseInt(tokens[i])

//         switch(tokens[i + 1]) {
//             case "/":
//                 stack.push(operandLeft / operandRight)
//                 break
//         }
//         i++
        
//     }else {
//         console.log(tokens[i])
//         stack.push(parseInt(tokens[i]))
//     }
// }
// console.log({stack})

// let isNumber = parseInt(tokens[i+1])
//         if(!isNumber) {
//             switch(tokens[i + 1]) {
//                 case '/':
//                     parseInt(tokens[i]) / stack.pop()
//             }
//         }
//         stack.push(parseInt(tokens[i]))
    