
/*

There are n cars going to the same destination along a one-lane road. 
The destination is target miles away.

You are given two integer array position and speed, both of 
length n, where position[i] is the position of the ith car 
and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can 
catch up to it and drive bumper to bumper at the same speed. 
The faster car will slow down to match the slower car's speed. 
The distance between these two cars is ignored (i.e., they are 
    assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same 
position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination 
point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.
 
*/

const carFleet = (target,position,speed) => {
    const stack = []
    const road = Array(target + 1).fill(null)
    for(let i = 0;i < position.length;i++) {
        road[position[i]] = (target - position[i]) / speed[i]
    }
    for(let i = target;i >= 0;i--) {
        if(road[i] !== null) {
            stack.push(road[i])
            if(stack.length >= 2) {
                const prevTime = stack[stack.length - 2]
                if(prevTime >= road[i]) {
                    stack.pop()
                }
            }
        }
    }
    return stack.length
}

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))

/*

PERFORMANCE SOLUTION

var carFleet = function(target, position, speed) {

    const stack = [];
    if(position.length === 1) {
        return 1;
    }

    const road = Array(target+1).fill(null);
    for(let i=0; i<position.length; i++) {
        road[position[i]] = (target - position[i]) / speed[i];
    }

    for(let i=target; i>=0; i--) {
        if(road[i] !== null) {
            stack.push(road[i]);
            if(stack.length >= 2) {
                const prevTimeToTarget = stack[stack.length - 2];
                if(prevTimeToTarget >= road[i]) {
                    stack.pop();
                }
            }
        }
    }
    return stack.length;

INITIAL SOLUTION

const stack = []
const map = position.map((entry,index) => [entry,speed[index]])
map.sort((a,b) => a[0] - b[0])
for(let i = map.length - 1;i >= 0;i--) {
    const [pos,speed] = map[i]
    stack.push((target - pos) / speed)
    if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
        stack.pop()
    }
}
return stack.length


*/

// const stack = []
//     const carMap = position.map((pos,index) => [pos,speed[index]])
//     carMap.sort((a,b) => a[0] - b[0])
//     console.log(carMap)
//     for(let i = carMap.length - 1;i >= 0;i--) {
//         const [pos,speed] = carMap[i]
//         stack.push((target - pos) / speed)
//         if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop()
//         }
//     }
//     return stack.length

// if(position.length === 1) return 1
//     let fleets = 0
//     const miles = position.map((entry,index) => Math.ceil((target - entry) / speed[index]))
//     console.log(miles)
//     const cache = [miles.shift()]

//     while(miles.length) {
//         if(miles[0] <= cache[cache.length - 1]) {
//             fleets++
//         }else {
//             fleets++
//             cache.push(miles.shift())
//         }
//         cache.push(miles.shift())
//     }
//     return fleets



/*

ALTERNATE SOLUTION

    const stack = [];
    if(position.length === 1) {
        return 1;
    }

    const road = Array(target+1).fill(null);
    for(let i=0; i<position.length; i++) {
        road[position[i]] = (target - position[i]) / speed[i];
    }

    for(let i=target; i>=0; i--) {
        if(road[i] !== null) {
            stack.push(road[i]);
            if(stack.length >= 2) {
                const prevTimeToTarget = stack[stack.length - 2];
                if(prevTimeToTarget >= road[i]) {
                    stack.pop();
                }
            }
        }
    }
    return stack.length;
*/

// const stack = []
//     const pair = position.map((pos,index) => [pos,speed[index]])
//     pair.sort((a,b) => a[0] - b[0])

//     for(let i = pair.length - 1;i >= 0;i--) {
//         const [pos,speed] = pair[i]
//         /*
//         (target - pos) / speed is giving us our relative distance left to cover.
//         If the current value is less than the previous it means the current value
//         will catch up to the previous value. 

//         The stack.length >= 2 is checking to make sure there are two values to compare.
//         This is how we catch lone cars that are their own fleet. 
//         */
//         stack.push((target - pos) / speed)
//         if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop()
//         }
//     }
// return stack.length

// const stack = []
//     const pair = position.map((pos,index) => [pos,speed[index]])
//     pair.sort((a,b) => a[0] - b[0])

//     for(let i = pair.length - 1;i >= 0;i--) {
//         const [pos,speed] = pair[i]
//         /*
//         (target - pos) / speed is giving us our relative distance left to cover.
//         If the current value is less than the previous it means the current value
//         will catch up to the previous value. 

//         The stack.length >= 2 is checking to make sure there are two values to compare.
//         This is how we catch lone cars that are their own fleet. 
//         */
//         stack.push((target - pos) / speed)
//         if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop()
//         }
//     }
// return stack.length

// const stack = []
//     const hours = position
//     .map((entry,i) => [entry,Math.ceil((target - entry) / speed[i])])
//     .sort((a,b) => a[0] - b[0])
//     .map(entry => entry[1])
//     console.log(hours)
//     for(let i = hours.length - 1;i >= 0 ;i--) {
//         stack.push(hours[i])
//         if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop()
//         }
//     }
//     console.log(stack)
    










// const stack = []
//     const pair = position.map((pos,index) => [pos,speed[index]])
//     pair.sort((a,b) => a[0] - b[0])
//     console.log(pair)
//     for(let i = pair.length - 1;i >= 0;i--) {
//         const [pos,speed] = pair[i]
//         stack.push((target - pos) / speed)
//         if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
//             stack.pop()
//         }
//     }
// return stack.length






// const pair = position.map((pos, idx) => [pos, speed[idx]]);
//     // console.log(pair)
//     const stack = [];
//     pair.sort((posA, posB) => posA[0] - posB[0]);
//     console.log(pair)
//     for (let i = pair.length - 1; i >= 0; i--) {
//         const [pos, speed] = pair[i];
//         stack.push((target - pos) / speed)
//         if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
//             console.log(stack[stack.length-1], stack[stack.length-2])
//             stack.pop()
//         }
//     }
//     console.log(stack)
//     return stack.length;

/*CODE GRAVEYARD*/

// let stack = []
//     const results = 0
//     for(let i = 0;i < position.length;i++) {
//         let distance = position[i] + speed[i]
//         while(distance <= target) {
//             stack.push(distance)
//             distance += speed[i]
//         }
//         if(stack.length) {
//             let car1 = stack.unshift()
//             if(car1 === stack[stack.length - 1]) {
//                 results++
//             }
//         }
//     }
//     console.log(stack)


// if(stack.length) {
//     let car2 = stack.pop()
//     let car1 = stack.pop()
//     if(car2 === car1) {
//         results++
//     }
// }
// stack.push(test)
// console.log(stack)
// }

// for(let j = i + 1;j < position.length;j++) {
//     const car1 = position[i] + speed[i]
//     const car2 = position[j] + speed[j]

//     while(car1 < target && car2 < target) {
//         if(car1 === car2) {
//             results++
//             break
//         }else {
//             car1 += speed[i]
//             car2 += speed[j]
//         }
//     }
// }
// }

// let distance = position[i] + speed[i]
//         if(stack.length && distance <= target) {
//             let temp = stack.pop()
            
//         }
//         stack.push(distance)