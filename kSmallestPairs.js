/*
You are given two integer arrays nums1 and nums2 sorted in 
ascending order and an integer k.

Define a pair (u, v) which consists of one element from the 
first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the 
smallest sums.
*/

var kSmallestPairs = function(nums1, nums2, k) {
    if(!nums1.length || !nums2.length) return 

    const kPairArray = []
    let max = -Infinity

    for(let i = 0;i < nums1.length;i++) {
        for(let j = 0;j < nums2.length;j++) {

            let sum = nums1[i] + nums2[j]
            let nums = [nums1[i],nums2[j]]

            if(sum >= max && kPairArray.length >= k) break
            else if(sum > max && kPairArray.length < k) {
                kPairArray.push({sum,nums})
                max = sum
            }else if(sum <= max && kPairArray.length < k) {
                kPairArray.push({sum,nums})
            }else if(sum < max && kPairArray.length >= k) {
                let newMax = -Infinity
                let replace = false

                for(let i = 0;i < kPairArray.length;i++) {
                    if(!replace && kPairArray[i].sum === max) {
                        kPairArray[i] = {sum,nums}
                        replace = true
                    }
                    if(kPairArray[i].sum > newMax) newMax = kPairArray[i].sum;
                }
                max = newMax
            }
        }
    }
    const test = kPairArray.map(pair => pair.nums)
    console.log(test)
    return kPairArray.map(pair => pair.nums)
};

kSmallestPairs([0,0,0,0,0],[-3,22,35,56,76],22)

// [[1,1],[1,1],[2,1],[1,2],[1,2],[2,2],[1,3],[1,3],[2,3]]
























//EXPLANATION

//Stepping through with [1,1,2], [1,2,3], 2 as example

// if (nums1.length === 0 || nums2.length === 0) return []
    
//     let arr = [];
//     let max = -Infinity;
    
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {

//             let obj = {
//                 sum: nums1[i] + nums2[j],
//                 nums: [nums1[i], nums2[j]]
//             }
//             //3. Next entry is 1,3 so sum being 4 is greater than
//             //the max of 3 and the arr.length is equal to k so we
//             // break the j loop

//             if (obj.sum >= max && arr.length >= k) {
//                 break;
//             } 
//             else if (obj.sum <= max && arr.length < k) {
//                 arr.push(obj);
//             } 
//             //1. obj.sum is 2 (1,1) which is larger than -infinity
//             //arr.length is 0 which is less than 2
//             //max gets set to 2 and arr gets {sum:2,nums:[1,1]}

//             //2. max = 3, arr gets {sum:3,nums:[1,2]}
//             //here is where arr.length is now equal to k

//             else if (obj.sum > max && arr.length < k) {
//                 max = obj.sum; 
//                 arr.push(obj);
//             } 
//             //This section replaces an arr entry that is bigger than 
//             //a previous entry but was put in because of how the for
//             //loops are running

//             //4. Next entry is 1,1 sum is 2 which is less than 3 and
//             //arr.length === k. 
//             else if (obj.sum < max && arr.length >= k) {
//                 // console.log({max})
//                 let newMax = -Infinity;
//                 let replaced = false;

//                 // We step through each entry in arr which currently
//                 //is {sum:2,nums:[1,1], sum:3,nums:[1,2]}. 
//                 for (let n = 0; n < arr.length; n++) {
//                 //When the for loop finds a sum equal to the max we replace
//                 //that entry with the current obj which is {sum:2,nums:[1,1]}
//                     if (!replaced && arr[n].sum === max) {
//                         arr[n] = obj;
//                         replaced = true;
//                         // max = arr[n].sum
//                     }
//                     //This line prevents an error that occurs if there
//                     //are multiple entries that are lower than the current
//                     //max in arr but the final entry value is not the last value in the set.
//                     // It does this by resetting the max the largest value in the set
//                     //sum in the array instead of setting the max to the
//                     //sum of the final value that got put into arr
                    
//                     if (arr[n].sum > newMax) newMax = arr[n].sum;
//                 }
//                 max = newMax;
//             } 
//             console.log(max)
//             console.log(arr)
//         }
//     }
//     console.log(arr.map(obj => obj.nums))
//     return arr.map(obj => obj.nums);













// if(Math.min(...nums1) > Math.min(...nums2)) {
    //     const temp = nums1 
    //     nums1 = nums2 
    //     nums2 = temp
    // }
    // // const kPairs = []
    // // let left = 0
    // // let right = 0


    // const minHeap = new MinPriorityQueue({ priority: x => x[0] });
    // console.log(minHeap)

// for(let i = 0;i < nums1.length;i++) {
    //     if(kPairs.length === k) break;
    //     for(let j = 0;j < nums2.length;j++) {
    //         if(kPairs.length === k) break;
    //         const test = nums1[i + 1] + nums2[i]
    //         const sum = nums1[i] + nums2[j]
    //         if(test < sum) {
    //             kPairs.push([nums1[i + 1],nums2[i]])
    //         }
    //         let prevSum
    //         if(kPairs.length) {
    //             prevSum = kPairs[kPairs.length - 1].reduce((total,amt) => total + amt)
    //         }
    //         if(!kPairs.length || sum >= prevSum) {
    //             kPairs.push([nums1[i],nums2[j]])
    //         }
    //     }
    // }
    // console.log(kPairs)
    // return kPairs

// let left = 0
    // let right = 0
    // while(kPairs.length < k || left === nums1.length - 1) {
    //     kPairs.push([nums1[left],nums2[right]])
    //     left++
    //     if(nums2[right + 1] && nums1[left] === nums1.length - 1) {
    //         right++
    //         left = 0
    //     }
    // }

// const kPairs = []
//     let left = 0
//     let right = 0
    
//     while(kPairs.length < k) {

//         const nextSumLeft = nums1[left + 1] + nums2[right]
//         const nextSumRight = nums1[left] + nums2[right + 1]
//         kPairs.push([nums1[left],nums2[right]])
//         if(nextSumLeft < nextSumRight) {
//             left++
//         }else if(nextSumLeft >= nextSumRight) {
//             right++
//         }
//     }
//     console.log(kPairs)
//     return kPairs




// while(kPairs.length < k) {
    //     let left = 0
    //     let right = 0
    //     let leftNext = left + 1
    //     let rightNext = right + 1
    //     let prevSum = kPairs[kPairs.length - 1].reduce((total,amt) => total + amt)

    //     let sum = nums1[left] + nums2[right]
    //     if(sum >= prevSum) {
    //         kPairs.push([nums1[left],nums2[right]])
    //     }
    //     break
    // }