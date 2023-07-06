/* Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/ 

//REDO 1

var twoSum = (nums,target) => {
  const map = new Map()

  for(let i = 0;i < nums.length;i++) {
    const diff = target - nums[i]
    if(map.has(diff)) {
      return [map.get(diff),i]
    }
    map.set(nums[i],i)
  }
}

console.log(twoSum([3,2,4],6))
























// var twoSum = function(nums, target) {
//   let map = new Map();

//   for (let i = 0; i<nums.length; i++){
  //diff is used to find the first number in the correct solution
    //and store it in the map for later use
//       let diff = target - nums[i];
//       if (map.has(diff)){
//           return [map.get(diff), i];
//       }
//       map.set(nums[i], i);
//     }
// };


/*
this algo checks for two things. First it records all the entries
and their indexs. Then when it comes to the number that adds to the
target it uses the map to get the index for that value. 
It works because there is only one answer and that answer is present

[3,2,4], 6 as an example. 3 get set in map to 3 => 0. 
then 2 => 1 
then the matching difference is found in 6-4 that being 2
this is used in the map to grab the left index (1) and then the 
current index (2)
*/


/*

ORIGINAL SOLUTION

// var twoSum = function(nums, target) {
//     for(let i = 0;i < nums.length;i++) {
//       for(let j = i + 1;j < nums.length;j++) {
//         if(nums[i] + nums[j] === target) {
//           return [i,j]
//         }
//       }
//     }
// };

WHAT I LEARNED 

-for loops can be nested and there index numbers used for 
indexing array values

-the map object can be used to create associations between random
values in an array

*/