var dailyTemperatures = function(T) {
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
 };


dailyTemperatures([73,74,75,71,69,72,76,73])

/*

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