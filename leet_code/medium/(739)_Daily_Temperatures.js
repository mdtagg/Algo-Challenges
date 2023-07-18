
/*

Given an array of integers temperatures represents 
the daily temperatures, return an array answer such 
that answer[i] is the number of days you have to wait 
after the ith day to get a warmer temperature. If there 
is no future day for which this is possible, keep
 answer[i] == 0 instead.

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

*/


var dailyTemperatures = function(temps) {
    
    const stack = []
    const results = new Array(temps.length).fill(0)

    for(let i = 0;i < temps.length;i++) {
        while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
            let temp = stack.pop()
            results[temp] = i - temp
        }
        stack.push(i)
    }
    return results
 };


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))

/*
This problem uses a stack of index values to backtrack once the temperature
gets higher than previous temperature. 

Using [73,74,75,71,69,72,76,73] as an example

A stack array is created to keep track of the index values
A result array is created with the number of positions equal to 
the number of inputs all filled as zeros

We then iterate through the input array
on each iteration two conditions must be met to change a position value
in the results array 

First the stack must have at least one value. 
This prevents the while loop from executing on the first iteration and 
prevents it again at the end if there are no hotter days from the last
high value

After the first iteration we compare the current value in the temp array 
to the value in the temp array associated with last index value in the stack
(after each iteration the stack gets the current index value)

The latest value in the stack is popped off and is subtracted from the current
index position. (1 - 0 is 1, 2 - 1 is 1)

When the current value is less than the previous value the while loop gets 
skipped until the current value is higher. However, stack still gets each index
pushed. 

When the next highest value is crossed the while loop activated and pops
off each index in the stack until the stack has nothing in it. 
(5 - 4 is 1 5 - 3 is 2 then 6 - 2 is 4)

stack will have no length until a higher value is hit. 

*/

//REDO 3

// const stack = []
//     const result = new Array(temps.length).fill(0)

//     for(let i = 0;i < temps.length;i++) {
//         while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
//             let temp = stack.pop()
//             result[temp] = i - temp
//         }
//         stack.push(i)
//     }
//     return result

//REDO 2

// const stack = []
    // let result = new Array(temps.length).fill(0)

    // for(let i = 0;i < temps.length;i++) {
    //     while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
    //         let temp = stack.pop()
    //         result[temp] = i - temp
    //     }
    //     stack.push(i)
    // }
    // return result

/*
let stack = [];
    let result = new Array(T.length).fill(0);
     for(let i=0; i < T.length; i++){
         while(stack.length && T[i] > T[stack[stack.length-1]]){
             let temp = stack.pop();
             console.log({temp})
             result[temp] = i-temp;
         }
         stack.push(i)
     }
     return result;



// const obj = {}
    const tempStack = []
    const indexStack = []
    const stack = []
    
    for(let i = 0;i < temps.length;i++) {
        stack[i] = 1
        if(temps[i] > temps[i + 1]) {
            indexStack.push(i)
            tempStack.push(temps[i])
        }
        if(temps[i] < temps[i + 1]) {
            
            while(tempStack.length && indexStack.length) {
                const index = indexStack.pop()
                const temp = tempStack.pop()
                const currentTemp = temps[i]

                if(temp < currentTemp) {
                    stack[index]++
                }
            }
        }
        // stack[i] = 1

    }

Recursive Strategy (Times out)

let days = 1
    const daysToWait = []
    let largestTemp

    for(let i = 0;i < temps.length;i++) {
        if(temps[i] < temps[i + 1]) {
            daysToWait.push(1)
        }else {
            largestTemp = temps[i]
            daysToWait.push(checkTemps(i+1))
            days = 1
            
        }
    }

    function checkTemps(i) {
        console.log(largestTemp,temps[i],i)
        if(largestTemp < temps[i]) {
            return days
        }else if(i >= temps.length - 1) {
            return 0
        }
        else {
            days++
            return checkTemps(i+1)
        }
    }
    console.log(daysToWait)

*/


// let days = 0
    // const daysToWait = []



    // function checkTemps(i) {
    //     if(temps[i] < temps[i + 1]) {
    //         return days
    //     }
    //     else {
    //         days++
    //         checkTemps(i++)
    //     }
    // }

// let days = 0
//     const daysToWait = []

//     for(let i = 0;i < temps.length;i++) {
//         if(temps[i] < temps[i + 1]) {
//             daysToWait.push(1)
//         }else {
//             days++
//             daysToWait.push(checkTemps(i))
//         }
//     }
    
//     function checkTemps(i) {
        
//         if(temps[i] > temps[i + 1]) {
            
//         }
//     }