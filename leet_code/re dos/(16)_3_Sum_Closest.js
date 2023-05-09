
// Given an integer array nums of length n and an integer target, 
// find three integers in nums such that the sum is closest to target. 
// Return the sum of the three integers.You may assume that each input 
// would have exactly one solution.

const threeSumClosest = (nums, target) => {
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
    let solution = nums[0] + nums[1] + nums[nums.length - 1]
    for(let i = 0;i < nums.length - 2;i++) {
        let start = i + 1
        let end = nums.length -1
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if(sum > target) {
                end--
            }else {
                start++
            }
            if(Math.abs(sum - target) < Math.abs(solution - target)) {
                solution = sum
            }
            console.log(solution)
        }
    }
}
threeSumClosest([-1,2,1,-4],1)


























//nums.sort((a,b) => {
    //     return a - b
    // })
    // let solution = nums[0] + nums[1] + nums[nums.length - 1]
    // for(let i = 0;i < nums.length - 2;i++) {
    //     let start = i + 1
    //     let end = nums.length - 1
    //     while(start < end) {
    //         const sum = nums[i] + nums[start] + nums[end]
    //         if(sum > target) {
    //             end--
    //         }else {
    //             start++
    //         }
    //         if(Math.abs(sum - target) < Math.abs(solution - target)) {
    //             solution = sum
    //         }
    //     }
    // }
    // console.log({solution})
    // console.log(nums)



    // nums = nums.sort()
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
//     

// const threeSumClosest = (nums, target) => {
//     nums.sort((a,b) => {
//         return a - b
//     })
//     console.log(nums)
//     for(let i = 0;i < nums.length - 2;i++) {
//         let start = i + 1
//         let end = nums.length - 1
//     }
// }

