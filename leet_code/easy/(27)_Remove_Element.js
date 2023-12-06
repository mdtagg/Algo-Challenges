

const removeElement = (nums,val) => {
    let k = 0
    for(let i = 0;i < nums.length;i++) {
        nums[i] === val ? nums[i] = -1 : k++
    }
    nums.sort((a,b) => b - a)
    return k
}

removeElement([3,2,2,3],3)




// var removeElement = function(nums, val) {
//     let k = 0
//     for(let i = 0;i < nums.length;i++) {
//         nums[i] === val ? nums[i] = '_' : k++
//     }
//     nums.sort()
//     return k
// };


// //BEST SOLUTION

// var removeElement = function (nums, val) {
//     let po = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != val) {
//             nums[po] = nums[i];
//             po++;
//         }
//     }
//     console.log(nums)
//     return po;
// };


// removeElement([3,2,2,3],3)