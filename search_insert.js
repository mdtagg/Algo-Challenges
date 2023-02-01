var searchInsert = function(nums, target) {
    console.log(nums.includes(target) ? nums.indexOf(target) : nums.indexOf(target - 1) + 1)
    // if(nums.includes(target)) {
    //     console.log(nums.indexOf(target))
    // }else {
    //     console.log(nums.indexOf(target - 1) + 1)
    // }
};

searchInsert([1,3,5,6],2)