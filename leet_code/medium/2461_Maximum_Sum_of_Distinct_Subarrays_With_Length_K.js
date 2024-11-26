

const maximumSubarraySum = (nums,k) => {

  let distArray = new Array(100001).fill(0);
  let repeats = 0;
  let sum = 0
  let maxSum = -Infinity

  for(let i = 0;i < k;i++) {
    sum += nums[i]
    distArray[nums[i]]++
    if(distArray[nums[i]] > 1) repeats++;
  }

  if(repeats == 0) maxSum = sum;

  for(let i = k;i < nums.length;i++) {
    if(distArray[nums[i - k]] > 1) {
      repeats--
    }
    sum -= nums[i - k]

    distArray[nums[i - k]]++

    if(distArray[nums[i]] > 1) {
      repeats++
    }
    sum += nums[i]

    if(repeats == 0 && sum > maxSum) maxSum = sum
  }
  return maxSum
}

maximumSubarraySum([1,1,1,7,8,9],3)

/*

let numSet = new Set();
  let numStr = "";
  let numMap = {};
  let sum = 0;
  let maxSum = -Infinity;
  let repeats = new Set()

  for(let i = 0,j = 0;j <= nums.length;j++) {

    numStr += nums[j]
    sum += nums[j]
    numMap[nums[j]] = (numMap[nums[j]] || 0) + 1
    
    if(numMap[nums[j]] > 1 && !repeats.has(nums[j])) {
      repeats.add(nums[j])
    }
    
    if(!repeats.length) {
      maxSum = Math.max(maxSum,sum)
    }

    if(j >= k) {
      numMap[nums[i]]--
      if(numMap[nums[i]] < 2) repeats.delete(nums[i])
      i++
    }
  }

let numStr = "";
  let m = 0;
  let maxSum = 0;
  let sum = 0;
  let numMap = {}
  let addSum = [];

  while(m < k) {
    numMap[nums[m]] = (numMap[nums[m]] || 0) + 1
    if(numMap[nums[m]] > 1) addSum = false;
    sum += nums[m]
    numStr += nums[m++]
  }

  if(addSum) {
    maxSum = Math.max(maxSum,sum)
  }
  let numSet = new Set(numStr)

  for(let i = 1,j = k;j <= nums.length;i++,j++) {
    numStr = numStr.slice(i) + nums[j]
    numMap[nums[i - 1]]--
    numMap[nums[j]] = (numMap[nums[j]] || 0) + 1
    if(numMap[nums[i]] > 1 || numMap[nums[j]] > 1)
  }

let numSet = new Set()
  let maxSum = -Infinity

  for(let i = 0,j = k;j <= nums.length;i++,j++) {

    let numMap = {}
    let sum = 0
    let numStr = ""
    let slice = nums.slice(i,j)
    let addSum = true;

    slice.forEach(num => {
      numMap[num] = (numMap[num] || 0) + 1
      if(numMap[num] > 1) addSum = false;
      numStr += num
      sum += num
    })
    
    if(addSum && !numSet.has(numStr)) {
      maxSum = Math.max(maxSum,sum)
      numSet.add(numStr)
    }
  }
  return maxSum == -Infinity ? 0 : maxSum



let i = 0;
  let j = 0;
  let numStr = "";
  let numSet = new Set();
  let numMap = new Map();
  let maxSum = -Infinity;
  let sum = 0

  while(j < k) {
    sum += nums[j]
    numMap.set(nums[j],(numMap.get(nums[j]) || 0) + 1)
    numStr += nums[j++]
  }

  if(numMap.get(nums[j]) <= 1) {
    maxSum = sum;
    numSet.add(numStr);
  }

  while(j < nums.length) {
    numStr = numStr.slice(1) + nums[j]
    sum = (sum - nums[i]) + nums[j]
    numMap.set(nums[i],numMap.get(nums[i]) - 1)
    numMap.set(nums[j],(numMap.get(nums[j]) || 0) + 1)

    if(!numSet.has(numStr) && numMap.get(nums[j]) <= 1) {
      numSet.add(numStr);
      maxSum = Math.max(maxSum,sum)
    }
    j++
    i++
  }



let numSet = new Set();
  let maxSum = -Infinity
  for(let i = 0,j = k;j < nums.length;i++,j++) {
    let slice = nums.slice(i,j)
    let sliceStr = JSON.stringify(slice)
    let sum 
    if(!numSet.has(sliceStr)) {
      numSet.add(sliceStr);
      sum = slice.reduce((total,amt) => total + amt)
      maxSum = Math.max(maxSum,sum)
    }
  }

let i = 0;
  let j = 0;
  let numStr = ""
  let numSet = new Set();  
  let maxSum = -Infinity;
  
  while(j < nums.length) {

    let sum = 0;
    while(j < k) {
      sum += nums[j]
      numStr += nums[j++];
    }
    numSet.add(numStr);
    maxSum = Math.max(maxSum,sum)

  }
*/