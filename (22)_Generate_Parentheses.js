/*

Given n pairs of parentheses, write a function to generate 
all combinations of well-formed parentheses.

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

*/

const generateParentheses = (n) => {

    const stack = []
    const results = []

    function permute(open,close) {
        if(open === n && close === open) {
            results.push(stack.join(''))
            return
        }
        if(open < n) {
            stack.push('(')
            permute(open + 1,close)
            stack.pop()
        }
        if(close < open) {
            stack.push(')')
            permute(open,close + 1)
            stack.pop()
        }
    }
    permute(0,0)
    return results
}

console.log(generateParentheses(3))





















//REDO 2

// const stack = []
    // const result = []

    // function permute(open,close) {
    //     if(open === n && open === close) {
    //         result.push(stack.join(''))
    //         return
    //     }
    //     if(open < n) {
    //         stack.push('(')
    //         permute(open + 1,close)
    //         stack.pop()
    //     }
    //     if(close < open) {
    //         stack.push(')')
    //         permute(open,close + 1)
    //         stack.pop()
    //     }
    // }
    // permute(0,0)
    // return result


/*

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
    

*/

/*

EXPLANATION

This problem is best solved with recursion. The key was finding the
three conditions for branching the recursion paths. When the open value
is less than n, there is a path at that point where an open
parenthesis can be used. If the close value is less than the open
value a close parenthesis can be used. Lastly a base case is met
when open is equal to n and also equal to close. This means that 
all of the possible parenthesis combos have been used. 

Another key to solving this is the use of if statements and not
else if. Each condition needs to be check on each round of recursion.
The stack.pop() is used to branch the paths. 

*/




















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