/*

Given an array nums of n integers, return an array of all the 
unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

- 0 <= a, b, c, d < n

- a, b, c, and d are distinct.

- nums[a] + nums[b] + nums[c] + nums[d] == target

*/

//REDO 3

const fourSum = (nums,target) => {
    nums = nums.sort((a,b) => a - b)
    console.log(nums)
    const quadruplets = []

    for(let i = 0;i < nums.length - 3;i++) {
        for(let j = i + 1;j < nums.length - 2;j++) {
            //only slip up was putting that as num values instead of indexs
            let start = j + 1
            let end = nums.length - 1

            while(start < end) {
                const numberSet = [nums[i],nums[j],nums[start],nums[end]]
                const sum = numberSet.reduce((total,amt) => total + amt)

                if(sum === target) {
                    quadruplets.push(numberSet)
                    while(nums[start] === nums[start + 1]) start++;
                    while(nums[end] === nums[end + 1]) end++;
                    start++;
                    end--;
                }else if(sum < target) {
                    start++
                }else {
                    end--
                }
            }
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return quadruplets
}

console.log(fourSum([1,0,-1,0,-2,2],0))












//REDO 2

// nums = nums.sort((a,b) => a - b)
    // console.log(nums)
    // const quadruplets = []

    // for(let i = 0;i < nums.length - 3;i++) {
    //     //ERROR had j as 0
    //     for(let j = i + 1;j < nums.length - 2;j++) {
    //         let low = j + 1
    //         let high = nums.length - 1

    //         while(low < high) {
    //             //ERROR had these two variables in the j loop
    //             const numberSet = [nums[i],nums[j],nums[low],nums[high]]
    //             const sum = numberSet.reduce((total,amt) => total + amt)
    //             if(sum === target) {
    //                 quadruplets.push(numberSet)
    //                 while(nums[low + 1] === nums[low]) low++;
    //                 while(nums[high + 1] === nums[high]) high++;
    //                 low++
    //                 high--
    //             }
    //             else if(sum < target) {
    //                 low++
    //             }
    //             else {
    //                 high--
    //             }
    //         }
    //         while(nums[j + 1] === nums[j]) j++;
    //     }
    //     while(nums[i + 1] === nums[i]) i++;
    // }
    // console.log(quadruplets)
    // return quadruplets


// REDO 1

// const fourSum = (nums,target) => {
//     nums = nums.sort((a,b) => a - b)
//     console.log(nums)
//     const quadruplets = []

//     for(let i = 0;i < nums.length - 3;i++) {

//         for(let j = i + 1;j < nums.length - 2;j++) {
//             //ERROR had nums[j + 1]
//             let low = j + 1
//             let high = nums.length - 1

//             while(low < high) {
//                 const numberSet = [nums[i],nums[j],nums[low],nums[high]]
//                 const sum = numberSet.reduce((total,amt) => total + amt)
//                 if(sum === target) {
//                     quadruplets.push(numberSet)
//                     while(nums[low] === nums[low + 1]) low++;
//                     //ERROR had high--
//                     while(nums[high] === nums[high + 1]) high++;
//                     low++
//                     high--
//                 }
//                 else if(sum < target) {
//                     low++
//                 }
//                 else {
//                     high--
//                 }
//             }
//             while(nums[j] === nums[j + 1]) j++;
//         }
//         while(nums[i] === nums[i + 1]) i++;
//     }
//     console.log(quadruplets)
//     return quadruplets
// }


// var fourSum = function(nums, target) {
//     nums = nums.sort((a,b) => a - b)
//     console.log(nums)
//     const quadruplets = []

//     for(let i = 0;i < nums.length - 3;i++) {
//         for(let j = i + 1;j < nums.length - 2;j++) {
//             let low = j + 1
//             let high = nums.length - 1

//             while(low < high) {
//                 const numberSet = [nums[i],nums[j],nums[low],nums[high]]
//                 console.log(numberSet)
//                 const sum = numberSet.reduce((total,amt) => total + amt)
//                 if(sum === target) {
//                     quadruplets.push(numberSet)
//                     while(nums[low] === nums[low + 1]) low++;
//                     while(nums[high] === nums[high - 1]) high++;
//                     low++
//                     high--
//                 }
//                 else if(sum < target) {
//                     low++
//                 }
//                 else {
//                     high--
//                 }
//             }
//             while(nums[j] === nums[j + 1]) j++;
//         }
//         while(nums[i] === nums[i + 1]) i++;
//     }
//     console.log(quadruplets)
//     return quadruplets
// }




// CODE GRAVEYARD
// var fourSum = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     console.log(nums)
//     const result = []
    
//     //its nums.length - 3 because when i is moved right the final iteration
//     //will have the other values filling the three spaces
//     for(let i = 0; i < nums.length - 3; i++) {
//         //j is length - 2 because thats js place in the final iteration
//         for(let j = i + 1; j < nums.length - 2; j++) {
//             let low = j + 1;
//             let high = nums.length - 1

//             while(low < high) {
//                 console.log({i,j,low,high})
//                 const sum = nums[i] + nums[j] + nums[low] + nums[high];
//                 if(sum === target) {
//                     result.push([nums[i], nums[j], nums[low], nums[high]])
//                     //these remove duplicates to that we skip an iteration
//                     while(nums[low] === nums[low + 1]) low++;
//                     while(nums[high] === nums[high - 1]) high--;
//                     //if the sum is equal to target there are no values coming up that
//                     //meet the condition
//                     low++;
//                     high--;
//                 } else if(sum < target) {
//                     low++
//                 } else {
//                     high--
//                 }
//             }   
//             //removing duplicates
//             while(nums[j] === nums[j + 1]) j++;
//         }   
//         while(nums[i] === nums[i + 1]) i++;
//     }
//     console.log(result)
//     return result
// };


// [-2, -1, 0, 3]
// [-2, -1, 1, 2]
// [-2, 0, 0, 2]
// [-1, 0, 0, 1]

















//     nums = nums.sort((a,b) => a - b)
//     console.log(nums)
//     let quadruplets = []

//     let first = 0
//     let second = 1
//     let third = 2
//     let fourth = nums.length - 1
//     let layerComplete = false

//     while(second < fourth - 1) {
//         while(third < fourth && !layerComplete) {
//             const test = [nums[first],nums[second],nums[third],nums[fourth]]
//             const sum = test.reduce((total,amt) => total + amt)
//             console.log(test)
//             third++
//             if(third === fourth) {
//                 layerComplete = true
//                 third--
//             }
//         }
//         const test = [nums[first],nums[second],nums[third],nums[fourth]]
//         console.log(test)
//         second++
//     }

// for(let i = 1;i < nums.length - 2;i++) {
    //     for(let j = 2; j < nums.length - 1;j++) {
    //         const numbers = [nums[0],nums[i],nums[j],nums[nums.length - 1]]
    //         const sum = numbers.reduce((total,amt) => total + amt)
    //         // console.log({numbers,sum})
    //     }
    //     break
    // }

// let solutionArray = []
//     let first = 0
//     let second = 1
//     let third = 2
//     let fourth = nums.length - 1

//     while(first < second) {
//         while(second < third) {
//             while(third < fourth) {
//                 const checks = checkSums(nums,target,first,second,third,fourth,third,solutionArray)
//                 third = checks.layer 
//                 console.log(third)
//                 if(checks.breakState) {
//                     break
//                 }
//             }
//             break
//         }
//         break
//     }
// }

// const checkSums = (nums,target,first,second,third,fourth,layer,solutionArray) => {
//     const numbers = [nums[first],nums[second],nums[third],nums[fourth]].sort((a,b) => a - b)
//     const sum = nums[first] + nums[second] + nums[third] + nums[fourth]
//     let breakState = false
//     console.log({sum,numbers})
//     if(!solutionArray.includes(numbers) && sum === target) {
//         solutionArray.push(numbers)
//     }
//     if(sum < target) {
//         layer += 1
//     }
//     if(sum > target) {
//         breakState = true
//     }
//     return { layer, breakState }


// var fourSum = function(nums, target) {
//     nums.sort((a,b) => {
//         return a - b
//     })
//     console.log(nums)
//     let end = nums.length - 1
//     const test = []
//     for(let i = 0;i < end - 2;i++) {
//         for(let j = i + 1;j < end - 1;j++) {
//             for(let k = j + 1;k < end;k++) {
//                 let array = [nums[i],nums[j],nums[k],nums[end]]
//                 console.log(array)
//                 let sum = array.reduce((total,amt) => {return total + amt})
//                 if(sum === target) {
//                     test.push(array)
//                 }
//                 // if(sum > target) {
//                 //     end--
//                 // }
//             }
//         }
//     }
//     console.log(test)
// };



// if(nums.length < 4) return []
//     nums.sort((a,b) => {
//         return a - b
//     })
//     console.log(nums)
//     const strings = new Set()
//     const unique = []
//     let end = nums.length - 1
//     for(let i = 0;i < nums.length - 2;i++) {
//         let start = i + 1
//         let second = i + 2
//         while(start < end - 1) {
//             const array = [nums[i],nums[start],nums[second],nums[end]]
//             console.log({array})
//             const sum = array.reduce((total,amt) => {return total + amt})

//             if(sum > target) {
//                 // end--
//                 // second = start + 1
//                 break
//             }else if(second === end - 1 || second >= end) {
//                 start++
//                 second = start + 1
//             }
//             else {
//                 second++
//             }
//             if(sum === target && !strings.has(array.join())) {
//                 unique.push(array)
//                 strings.add(array.join())
//             }
            
//         }
//     }
//     console.log(unique)
//     console.log(strings)