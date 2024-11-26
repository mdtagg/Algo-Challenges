


const merge = function(nums1, m, nums2, n) {
  for(let i = n;i < m;i++) {
    nums1[i] = nums2[i - n]
  }
  nums1.sort((a,b) => a - b)
  
};

const testVals = [
  [[1,2,3,0,0,0],3,[2,5,6],3]
]

merge(...testVals[0])