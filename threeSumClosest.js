// const threeSumClosest = (nums, target) => {
//     nums = nums.sort()
//     let closestSum = 0
//     let minDistance = Number.MAX_SAFE_INTEGER

//     for(let i = 0;i < nums.length - 2;i++) {
//         let start = i + 1
//         let end = nums.length - 1

//         while(start < end) {
//             let sum = nums[i] + nums[start] + nums[end]
//             let distance = Math.abs(target - sum)
//             console.log({sum,distance})
//             if(sum === target) {
//                 closestSum = sum
//             }
            
//             if(distance < minDistance) {
//                 minDistance = distance
//                 closestSum = sum
//             }

//             if(sum < target) {
//                 start++
//             }else {
//                 end--
//             }
//         }
//     }
//     console.log(closestSum)
//     return closestSum
// };

const threeSumClosest = (nums, target) => {
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
}


threeSumClosest([-1,2,1,-4],1)