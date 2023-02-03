var findMedianSortedArrays = function(nums1, nums2) {
    let numsArr = nums1.concat(nums2).sort((a,b) => {return a - b})
    let median = 0
    if(numsArr.length % 2 !== 0) {
        median = numsArr[Math.floor(numsArr.length / 2)]
    }else {
        let centerLeft = numsArr[numsArr.length / 2 - 1] 
        let centerRight = numsArr[numsArr.length / 2]
        median = (centerLeft + centerRight) / 2
    }
    return median
};

findMedianSortedArrays([1],[2,3,4,5,6,7,8,9,10])