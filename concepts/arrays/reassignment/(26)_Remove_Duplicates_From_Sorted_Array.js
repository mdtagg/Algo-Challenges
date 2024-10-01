

const removeDuplicates = (nums) => {
  let startIndex = 1;

for(let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
        nums[startIndex] = nums[i]
        startIndex++
    }
}

return startIndex
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])

/*
const removeDuplicates = (nums) => {
  let currIdx = 0
  let set = new Set()

  for(let i = 0;i < nums.length;i++) {
    if(!set.has(nums[i])) {
      set.add(nums[i])
      nums[currIdx] = nums[i]
      currIdx++
    }
    else continue;
  }
  return currIdx
}
*/