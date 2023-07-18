
/*
Given an array of integers nums which is sorted in 
ascending order, and an integer target, write a 
function to search target in nums. If target exists,
 then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 */

const search = (nums,target) => {
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] === target) {
            return i
        }
    }
return -1
}

console.log(search([-1,3,4,5,9,12],9))

/*
ALTERNATE SOLUTION

let start = 0;
    let end = nums.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target)
            return mid;
        if(nums[mid] > target)
            end = mid - 1;
        else
            start = mid + 1;
    }
    return -1;

*/

// let index = 0
//     function recurse(nums) {

//         const middle = Math.floor(nums.length / 2)
        
//         if(nums.length === 1 && nums[middle] !== target) {
//             return -1
//         }
//         if(nums[middle] === target) {
//             index += middle
//             return index
//         }
//         else if(nums[middle] < target) {
//             nums = nums.slice(middle,nums.length)
//             recurse(nums)
//             index += middle
//         }
//         else if(nums[middle] > target) {
//             nums = nums.splice(0,middle)
//             recurse(nums)
//         }
//     }
//     recurse(nums)
//     // return index

