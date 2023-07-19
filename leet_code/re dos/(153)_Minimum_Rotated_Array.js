/*
Suppose an array of length n sorted in ascending order
 is rotated between 1 and n times. For example, 
 the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., 
a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, 
return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

const findMin = (nums) => {
    
}

console.log(findMin([3,4,5,1,2]))















// let left = 0
//     let right = nums.length - 1

//     while(left < right) {
//         const mid = Math.floor((left + right) / 2)
//         if(nums[mid] > nums[right]) {
//             left = mid + 1
//         }else {
//             right = mid
//         }
//     }
//     return nums[left]


//REDO 2

// let left = 0
//     let right = nums.length - 1
//ERROR mid goes inside while loop
//     const mid = Math.floor((left + right) / 2)

//     while(left < right) {
//         if(nums[mid] > nums[right]) {
//             left = mid + 1
//         }else {
//             right = mid
//         }
//     }
//     return nums[left]

/*

ALTERNATE SOLUTION

let left = 0
    let right = nums.length - 1

    while(left < right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] > nums[right]) {
            left = mid + 1
        }else {
            right = mid
        }
    }
    return nums[left]

MY SOLUTION

let min = Infinity
    let count = nums.length
    while(count > 0) {
        const temp = nums.shift()
        if(temp < min) {
            min = temp
        }
        nums.push(temp)
        count--
    }
    return min

*/