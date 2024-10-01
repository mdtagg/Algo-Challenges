

const removeElement = (nums,val) => {
  let totalVal = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[totalVal] = nums[i];
            totalVal++;
        }
    }
    return totalVal
}

removeElement([0,1,2,2,3,0,4,2],2)

/*
const removeElement = (nums,val) => {
  let len = nums.length
  let targets = 0
  for(let i = 0;i < len;i++) {
    if(nums[i] === "_") return len - targets
    if(nums[i] === val) {
      nums.splice(i,1)
      nums.push("_")
      i--
      targets++
    }
  }
  return len - targets
}
*/