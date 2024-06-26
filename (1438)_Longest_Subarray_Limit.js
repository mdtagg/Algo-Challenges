

function longestSubarray(nums,limit) {
  
  let left = 0;
  let right = left;
  let result = 0;
  let max = nums[0];
  let min = nums[0];

  while(right < nums.length) {
    max = Math.max(nums[left],nums[right])
    min = Math.min(nums[left],nums[right])
    let abs = Math.abs(max - min);
    if(abs <= limit) result = Math.max(result,(right - left) + 1);
    else {
      left++;
    }
    right++;
  }
  return result;
}

longestSubarray([1,5,6,7,8,10,6,5,6],4)

/*
CODE GRAVEYARD

nums = nums.sort((a,b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let sum = Math.abs(nums[right] - nums[left])
    if(sum <= limit) return right + 1;
    if(sum > limit) right--;
    
  }
*/