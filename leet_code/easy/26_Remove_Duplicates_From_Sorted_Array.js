/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
    let slow = 1;
    let i = 1;

    while(i < nums.length) {
        if(nums[i] !== nums[i - 1]) {
            nums[slow] = nums[i]
            slow++
        }
        i++
    }
    return slow
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])


// const removeDuplicates = (nums) => {
//     let currIdx = 0
//     let set = new Set()
  
//     for(let i = 0;i < nums.length;i++) {
//       if(!set.has(nums[i])) {
//         set.add(nums[i])
//         nums[currIdx] = nums[i]
//         currIdx++
//       }
//       else continue;
//     }
//     return currIdx
//   }
  
// const removeDuplicates = (nums) => {
//     const dups = new Set()
//     let k = 0

//     for(let i = 0;i < nums.length;i++) {
//         if(dups.has(nums[i])) {
//             nums[i] = Infinity
//         }else {
//             dups.add(nums[i])
//             k++
//         }
//     }
//     nums.sort((a,b) => a - b)
//     return k
// }


// var removeDuplicates = function(nums) {
//     let duplicates = []
//     let k = 0
//     for(let i = 0;i < nums.length;i++) {
//         if(!duplicates.includes(nums[i])) {
//             duplicates.push(nums[i])
//             k++
//         }else {
//             nums[i] = '_'
//         }
//     }
//     nums.sort()
//     nums.sort(function(a,b) {return a-b})
//     // console.log(k)
//     return k
// };



// //BEST SOLUTION...? this was the top performing answer on leetcode but doesnt seem to work. 

// var removeDuplicates = function(nums) {
//     let k = 0;
    
//     for (j = 1; j < nums.length; j++) {
//         if (nums[k] != nums[j]) {
//             k += 1;
//             nums[k] = nums[j];
//         }
//         // console.log(nums)
//     }
//     console.log(nums)
//     console.log(k)
//     return k + 1;
// };

// removeDuplicates([-1,-2,-3,0,0,1,1,1,2,2,3,3,4])

//let temp = 0
    // while(!nums.slice(0,duplicates.length).every(number => typeof(number) === 'number')) {
    //     for(let i = 0;i < nums.length;i++) {
    //         console.log(i)
    //         if(nums[i] < 0 && nums[i + 1] < nums[i]) {
    //             temp = nums[i + 1]
    //             nums[i + 1] = nums[i]
    //             nums[i] = temp
    //             break
    //         }
    //     }
    // }