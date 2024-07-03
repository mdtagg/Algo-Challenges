

var longestSubarray = function(nums, limit) {
  let maxQueue = [];
  let minQueue = [];
  let res = 0, start = 0;
  for(let right =0;right<nums.length;right++){
      const num = nums[right];
      while(maxQueue.length>0 && maxQueue[maxQueue.length-1]<num ){
          maxQueue.pop();
      }
      while(minQueue.length>0 && minQueue[minQueue.length-1]>num ){
          minQueue.pop();
      }
      maxQueue.push(num);
      minQueue.push(num);
      if(maxQueue[0]-minQueue[0]>limit){
          if(maxQueue[0]=== nums[start])
                  maxQueue.shift();
          if(minQueue[0] === nums[start])
                  minQueue.shift();
          start= start+1;
      }
      res = Math.max(res, right - start+1);
  }
  return res;
};

longestSubarray([1,5,6,7,8,10,6,5,6,5,6,5],4)

/*
CODE GRAVEYARD


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

nums = nums.sort((a,b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let sum = Math.abs(nums[right] - nums[left])
    if(sum <= limit) return right + 1;
    if(sum > limit) right--;
    
  }
*/