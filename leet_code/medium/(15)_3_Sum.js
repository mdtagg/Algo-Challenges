/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function(nums) {

    nums = nums.sort((a,b) => a - b)
    let duplicates = new Set()
    let result = []

    let left = 0
    let mid = 1
    let right = nums.length - 1

    while(left < right) {

        let sum = nums[left] + nums[mid] + nums[right] 
        let strSum = `${nums[left]}${nums[mid]}${nums[right]}`

        if(mid >= right) {
            left++
            mid = left + 1
            right = nums.length - 1
            continue
        }
        
        if(sum === 0) {
            if(!duplicates.has(strSum)) {
                duplicates.add(strSum)
                result.push([nums[left],nums[mid],nums[right]])
            }
        }

        else if(sum > 0) {
            right--
            mid--
        }
        mid++
    }
    return result
}

threeSum([-2,-3,0,0,-2])

/*
// if(!duplicates.has(strSum)) {
            //     duplicates.add(strSum)
            //     result.push([nums[left],nums[mid],nums[right]])
            // }

// for(let left = 0;left < nums.length - 2;left++) {
    //     for(let mid = left + 1;mid < nums.lenth - 1;mid++) {

    //         let sum = nums[left] + nums[mid] + nums[right] 
    //         let strSum = `${nums[left]}${nums[mid]}${nums[right]}`

    //         if(sum === 0 && !duplicates.has(strSum)) {
    //             duplicates.add(strSum)
    //             result.push([nums[left],nums[mid],nums[right]])
    //         }else if(sum > 0) {
    //             continue
    //         }
    //     }
    // }

var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let duplicates = new Set()
    let result = []
    let i = 0
    let j = 1
    let k = nums.length - 1

    while(i < k) {
        let sum = nums[i] + nums[j] + nums[k]
        if(sum === 0) {
            let str = `${nums[i]}${nums[j]}${nums[k]}`
            if(!duplicates.has(str)) {
                result.push([nums[i],nums[j],nums[k]]);
                duplicates.add(str)
            }
        }
        if(j >= k - 1) {
            i++
            j = i + 1
        }else if(sum > 0) {
            k--
        }
        else j++;
    }
    return result
}


var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let duplicates = new Set()
    let result = []
    let i = 0
    let j = 1
    let k = nums.length - 1

    while(i < j) {
        let sum = nums[i] + nums[j] + nums[k]
        if(sum === 0) {
            let str = `${nums[i]}${nums[j]}${nums[k]}`
            if(!duplicates.has(str)) {
                result.push([nums[i],nums[j],nums[k]]);
                duplicates.add(str)
            }
            j++
        }
        else if(sum > 0) {
            k--
        }else {
            i++
            j = i + 1
        }
    }
    return result
}


var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    const triplets = []

    for(let i = 0;i < nums.length - 2;i++) {
        let left = i + 1
        let right = nums.length - 1

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                triplets.push([nums[i],nums[left],nums[right]])
                while(nums[left] === nums[left + 1]) left++;
            }
            if(sum <= 0) {
                left++
            }else {
                right--
            }
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return triplets
}

The key is to make the most of sorting prior to performing any operations. If we know that the 
largest numbers will be on the right and the smallest numbers on the right we can peform our 
logic on the middle numbers and adjust the smallest and largest accordingly. Here the smallest
moves when the loop completes for i. The middle is set to i + 1 and the largest is the last number. 
We move the largest when the sum of our numbers is greater than 0. When the sum is greater than
0 it means that the lowest numbers left will not be able to produce a sum equal to zero, since 
we are moving from smallest to largest. 
*/


// for(let i = 0;i < nums.length - 2;i++) {
    //     for(let j = i + 1;j < nums.length - 1;j++) {
    //         console.log(nums[i],nums[j],nums[nums.length - 1])
    //         const sum = nums[i] + nums[j] + nums[nums.length - 1]
    //         if(sum === 0) {
    //             triplets.push([nums[i],nums[j],nums[nums.length - 1]])
    //         }
    //     }
    // }
    // console.log(triplets)



// nums = nums.sort((a,b) => a - b)
    // // console.log(nums)
    // let validSums = []
    // let validSumStrs = []
    // for(let i = 0;i < nums.length;i++) {
    //     let left = i + 1
    //     let right = nums.length - 1
    //     while(left < right) {
    //         let potentialSum = [nums[i],nums[left],nums[right]]
    //         // console.log(potentialSum)
    //         let sum = nums[i] + nums[left] + nums[right]
    //         if(sum > 0) {
    //             right--
    //         }else if(sum === 0 && !validSumStrs.includes(potentialSum.join(''))) {
    //             validSums.push(potentialSum)
    //             validSumStrs.push(potentialSum.join(''))
    //             left++
    //         }else {
    //             left++
    //         }
    //     }
    //     if(i === nums.length - 3) break
    // }
    // console.log(validSums)



// nums = nums.sort((a,b) => a - b)
//     let validSums = []
//     let validSumStrs = []
//     for(let i = 0;i < nums.length;i++) {
//         let left = i + 1
//         let right = nums.length - 1
//         while(left < right) {
//             let potentialSum = [nums[i],nums[left],nums[right]]
//             let sum = nums[i] + nums[left] + nums[right]
//             if(sum > 0) {
//                 right--
//             }else if(sum === 0 && !validSumStrs.includes(potentialSum.join(''))) {
//                 validSums.push(potentialSum)
//                 validSumStrs.push(potentialSum.join(''))
//                 left++
//             }else {
//                 left++
//             }
//         }
//         if(i === nums.length - 3) break
//     }
//     return validSums


// var threeSum = function(nums) {
//     let validSums = []
//     let validSumsStr = []
//     let positives = nums.filter(item => item >= 0)
//     nums = nums.sort((a,b) => a - b)
//     console.log(nums)
//     while(nums.length >= 3) {
//        for(let i = 1;i < nums.length;i++) {
//             for(let j = i + 1;j < nums.length;j++) {
//                 let positiveTotal = positives.reduce((total,amt) => {return total + amt})
//                 if(positiveTotal < Math.abs(nums[0])) break
//                 let reducedSum = [nums[0],nums[i],nums[j]].reduce((total,amt) => {
//                     return total + amt
//                 })
                
//                 let potentialSum = [nums[0],nums[i],nums[j]]
//                 console.log(potentialSum,i,j)
//                 if(reducedSum === 0 && !validSumsStr.includes(potentialSum.join(''))) {
//                     validSums.push(potentialSum)
//                     validSumsStr.push(potentialSum.join(''))
//                 }
//             }
//             if(i === nums.length - 2) {
//                 nums.shift()
//                 break
//             }
//         } 
        
//     }
//     console.log(validSums)
// };

// -1,0,1,2,-1,-4
// 0,0,0,0