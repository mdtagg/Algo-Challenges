

// const removeElement = (nums,val) => {
//     let k = 0
//     for(let i = 0;i < nums.length;i++) {
//         nums[i] === val ? nums[i] = -1 : k++
//     }
//     nums.sort((a,b) => b - a)
//     return k
// }

// const removeElement = (nums,val) => {
//     let result = 0;
//     for(let i = 0;i < nums.length;i++) {
//         if(nums[i] === val) nums[i] = "_"
//         else result++
//     }
//     nums.sort()
//     return result
// }

const removeElement = (nums,val) => {
    let k = 0;
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] !== val) {
            nums[i] = nums[k];
            k++
        }
    }
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