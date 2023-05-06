/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) {
        return nums.indexOf(target)
    }else {
        for(let i = 0;i < nums.length;i++) {
            if(nums[i] > target) {
                return i
            }else if(nums[i] < target && i === nums.length - 1) {
                return i + 1
            }
        }
    }
};

searchInsert([1,3,5,6],0)