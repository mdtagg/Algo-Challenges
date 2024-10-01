

function removeDuplicates(nums) {
  let writeIndex = 2
  for(let i = 2;i < nums.length;i++) {
    if(nums[i] !== nums[writeIndex - 2]) {
      nums[writeIndex++] = nums[i]
    }
  }
  return writeIndex
}
removeDuplicates([0,0,1,1,1,1,2,3,3])