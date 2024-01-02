/*

Given a 1-indexed array of integers numbers that is already sorted in 
non-decreasing order, find two numbers such that they add up to a 
specific target number. Let these two numbers be numbers[index1] 
and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one 
as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. 
You may not use the same element twice.

Your solution must use only constant extra space.

*/


const twoSum = (nums,target) => {

    let i = 0
    let j = nums.length - 1

    while(i < j) {
        let sum = nums[i] + nums[j]
        if(sum > target) {
            j--
        }
        else if(sum === target) {
            return [i + 1,j + 1]
        }else {
            i++
        }
    }
}

console.log(twoSum([2,7,11,15],9))


/*
const twoSum = (nums,target) => {
    let left = 1
    let right = nums.length

    while(left < right) {
        let sum = nums[left - 1] + nums[right - 1]
        if(sum === target) {
            return [left,right]
        }
        else if(sum < target) {
            left++
        }else {
            right--
        }
    }
}
*/
//FIRST SOLUTION (only did it this way because of misunderstanding of constant
//space requirement)

// for(let i = 0;i < nums.length;i++) {
//     const sum = nums[i] + nums[nums.length - 1]
//     if(sum === target) {
//         console.log(nums)
//         return [i + 1,nums.length]
//     }
//     else if(sum > target) {
//         nums.pop()
//         i--
//     }
// }

// if(nums[i] + nums[nums.length - 1] < target) {
        //     nums.shift()
        // }
        // for(let j = nums.length - 1;j >= 0;j--) {
        //     if(nums[j] + nums[i] > target) {
        //         nums.pop()
        //         break
        //     }
        // }