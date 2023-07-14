const generateParentheses = (n) => {
    
    const stack = []
    const result = []

    function backtrack(open,close) {
        if(open === n && open === close) {
            result.push(stack.join(''))
            return
        }
        
        if(open < n) {
            stack.push('(') // '() and ((
            backtrack(open+1,close)
            stack.pop()
        }   
        
        if(close < open) {
            stack.push(')')
            backtrack(open,close+1)
            stack.pop()
        }
    }
    backtrack(0,0)
    return result
    
}

console.log(generateParentheses(3))























/*

let stack = [];
    let result = [];

    function backtrack(open, close){

        if(open == close && open == n) {
            result.push(stack.join(''));
            return;
        }

        if(open < n){
            stack.push('(');
            backtrack(open+1, close); // '()()()()
            stack.pop()
        }
        if(close < open){
            stack.push(')');
            backtrack(open, close+1);
            stack.pop();
        }
        console.log(stack)
    }
    backtrack(0,0)
    console.log(result)
    console.log({open,close})
    return result

*/