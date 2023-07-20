

const merge = (nums1, m, nums2, n) => {
    for(let i = m, j = 0;j < n;i++,j++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a,b) => a - b)
}

merge([1,2,3,0,0,0],3,[2,5,6],3)

/*

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