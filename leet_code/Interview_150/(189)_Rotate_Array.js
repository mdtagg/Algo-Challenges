

var rotate = function(nums, k) {
  k = k % nums.length
  let startIdx = nums.length - k
  nums.unshift(...nums.splice(startIdx))
};

rotate([1,2],5)