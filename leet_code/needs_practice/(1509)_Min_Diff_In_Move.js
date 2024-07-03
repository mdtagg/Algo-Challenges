

const minDifference = function(nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let ans = nums[nums.length - 1] - nums[0];
  for (let i = 0; i <= 3; i++) {
    ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]);
  }
  return ans;
};

minDifference([1,5,0,10,14])