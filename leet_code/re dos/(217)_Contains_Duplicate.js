
/*

Given an integer array nums, return true if any value 
appears at least twice in the array, and return false 
if every element is distinct.

*/

var containsDuplicate = function(nums) {
    const duplicates = new Set()
    for(let i = 0;i < nums.length;i++) {
        if(duplicates.has(nums[i])) {
            return true
        }else {
            duplicates.add(nums[i])
        }
    }
    return false
};

/*

INITIAL SOLUTION

var containsDuplicate = function(nums) {
    nums = nums.sort((a,b) => a - b)
    const duplicates = []
    for(let i = 0;i < nums.length;i++) {
        if(duplicates.includes(nums[i])) {
            return true
        }else {
            duplicates.push(nums[i])
        }
    }
    return false
};

*/