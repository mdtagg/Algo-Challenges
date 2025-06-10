

// const removeDuplicates = (nums) => {

//   let writeIndex = 2;

//   for(let i = 2;i < nums.length;i++) {
//     if(nums[i] !== nums[writeIndex - 2]) {
//       nums[writeIndex++] = nums[i]
//     }
//   }
//   return writeIndex
// }

const removeDuplicates = (nums) => {
  let writeIndex = 0;

  for(let n of nums) {
    if(writeIndex < 2 || nums[writeIndex - 2] !== n) {
      nums[writeIndex++] = n;
    }
  }
  return writeIndex
}

removeDuplicates([0,0,1,1,1,1,2,3,3])