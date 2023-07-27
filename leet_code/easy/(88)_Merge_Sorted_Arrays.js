/*
You are given two integer arrays nums1 and nums2, 
sorted in non-decreasing order, and two integers 
m and n, representing the number of elements in 
nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted
 in non-decreasing order.

The final sorted array should not be returned by
 the function, but instead be stored inside the 
 array nums1. To accommodate this, nums1 has a 
 length of m + n, where the first m elements 
 denote the elements that should be merged, 
 and the last n elements are set to 0 and 
 should be ignored. nums2 has a length of n.
*/

const merge = (nums1, m, nums2, n) => {
    
    for(let i = m,j = 0; j < n;i++,j++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a,b) => a - b)

}

console.log(merge([1,2,3,0,0,0],3,[2],3))

/*

Performance solution

var merge = function(nums1, m, nums2, n) {
    let cache = 0; // 3
    nums1.forEach((item, i) => {
        if((item === 0 || item === "") && (cache < n)) {
            nums1[i] = nums2[cache];
            cache++;
        }
    })
    nums1.sort((a, b) => { return a - b })
    return nums1;
};

Memory Solution 

function sortfunction(a, b) {
    return a - b;
}

var merge = function(nums1, m, nums2, n) {
    // edge cases
    // if m = 0
    // if n = 0
    if (n === 0) return nums1;
    else if (m === 0) {
        // nums1 = nums2;
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
    
    // merge nums2 into nums1
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    
    // sort nums1
    nums1.sort(sortfunction);
};



for(let i = m, j = 0;j < n;i++,j++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a,b) => a - b)
    return nums1

for(let i = m, j = 0;j < n;i++,j++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a,b) => a - b)

for(let i = nums1.length - 1;i >= m;i--) {
        if(nums1[i] === 0) {
            nums1.pop()
        }
    }
    while(n > 0) {
        nums1.unshift(nums2.shift())
        n--
    }
    nums1 = nums1.sort()
    console.log(nums1)
    return nums1

*/