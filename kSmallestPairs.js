
var kSmallestPairs = function(nums1, nums2, k) {
    if(Math.min(...nums1) > Math.min(...nums2)) {
        const temp = nums1 
        nums1 = nums2 
        nums2 = temp
    }
    const kPairs = []
    let left = 0
    let right = 0
    
    while(kPairs.length < k) {

        const nextSumLeft = nums1[left + 1] + nums2[right]
        const nextSumRight = nums1[left] + nums2[right + 1]
        kPairs.push([nums1[left],nums2[right]])
        if(nextSumLeft < nextSumRight) {
            left++
        }else if(nextSumLeft >= nextSumRight) {
            right++
        }
    }
    console.log(kPairs)
    return kPairs
};

kSmallestPairs([1,2],[3],3)

// [[1,1],[1,1],[2,1],[1,2],[1,2],[2,2],[1,3],[1,3],[2,3]]


// for(let i = 0;i < nums1.length;i++) {
    //     if(kPairs.length === k) break;
    //     for(let j = 0;j < nums2.length;j++) {
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