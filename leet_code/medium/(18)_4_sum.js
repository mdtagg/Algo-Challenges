

var fourSum = function(nums, target) {
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
    let end = nums.length - 1
    const test = []
    for(let i = 0;i < end - 2;i++) {
        for(let j = i + 1;j < end - 1;j++) {
            for(let k = j + 1;k < end;k++) {
                let array = [nums[i],nums[j],nums[k],nums[end]]
                console.log(array)
                let sum = array.reduce((total,amt) => {return total + amt})
                if(sum === target) {
                    test.push(array)
                }
                // if(sum > target) {
                //     end--
                // }
            }
        }
    }
    console.log(test)
};

fourSum([-3,-2,-1,0,0,1,2,3],0)


// if(nums.length < 4) return []
//     nums.sort((a,b) => {
//         return a - b
//     })
//     console.log(nums)
//     const strings = new Set()
//     const unique = []
//     let end = nums.length - 1
//     for(let i = 0;i < nums.length - 2;i++) {
//         let start = i + 1
//         let second = i + 2
//         while(start < end - 1) {
//             const array = [nums[i],nums[start],nums[second],nums[end]]
//             console.log({array})
//             const sum = array.reduce((total,amt) => {return total + amt})

//             if(sum > target) {
//                 // end--
//                 // second = start + 1
//                 break
//             }else if(second === end - 1 || second >= end) {
//                 start++
//                 second = start + 1
//             }
//             else {
//                 second++
//             }
//             if(sum === target && !strings.has(array.join())) {
//                 unique.push(array)
//                 strings.add(array.join())
//             }
            
//         }
//     }
//     console.log(unique)
//     console.log(strings)