

// const majorityElement = (nums) => {

//     let largest = 0
//     let numTest 
//     const numMap = new Map()

//     for(let i = 0;i < nums.length;i++) {
//         numMap.set(nums[i],(numMap.get(nums[i]) || 0) + 1)
//         if(numMap.get(nums[i]) > largest) {
//             largest = numMap.get(nums[i])
//             numTest = nums[i]
//         }
        
//     }
//     return numTest
// }



const majorityElement = (nums) => {
    let result = null;
    let count = 0;

    for(let num of nums) {
        if(count === 0) result = num;
        result === num ? count++ : count--
    }

    return result
}

console.log(majorityElement([2,2,1,1,1,2,2]))