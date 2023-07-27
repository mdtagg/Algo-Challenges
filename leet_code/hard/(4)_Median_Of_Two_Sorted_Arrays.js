
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median 
of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/

var findMedianSortedArrays = function(nums1, nums2) {
    const combinedArray = nums1.concat(nums2).sort((a,b) => a - b)
    const mid = Math.floor((combinedArray.length - 1) / 2)
    if(combinedArray.length % 2 === 0) {
        return (combinedArray[mid] + combinedArray[mid + 1]) / 2
    }
    return combinedArray[mid]
};

console.log(findMedianSortedArrays([1,2],[3,4]))



















// let numsArr = nums1.concat(nums2).sort((a,b) => {return a - b})
//     let median = 0
//     if(numsArr.length % 2 !== 0) {
//         median = numsArr[Math.floor(numsArr.length / 2)]
//     }else {
//         let centerLeft = numsArr[numsArr.length / 2 - 1] 
//         let centerRight = numsArr[numsArr.length / 2]
//         median = (centerLeft + centerRight) / 2
//     }
//     return median