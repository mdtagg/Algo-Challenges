/* Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/ 

var twoSum = function(nums, target) {
    for(let i = 0;i < nums.length;i++) {
      for(let j = i + 1;j < nums.length;j++) {
        if(nums[i] + nums[j] === target) {
          return [i,j]
        }
      }
    }
};

/*

WHAT I LEARNED 

-for loops can be nested and there index numbers used for indexing array values

*/