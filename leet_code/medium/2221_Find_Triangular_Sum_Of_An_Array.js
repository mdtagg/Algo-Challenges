

// const triangularSum = (nums) => {

//   let len = nums.length
//   let newArray = new Array(len).fill(0);
//   let i = 1;

//   while(len !== 1) {
//     let prev = i - 1
//     newArray[prev] = (nums[i] + nums[prev]) % 10
//     if(i === len - 1) {
//       nums = newArray.slice(0,i);
//       i = 0;
//       newArray = new Array(len).fill(0);
//     }
//     i++
//   }
//   return nums[0]
// }

var triangularSum = function(nums) {
  let n = nums.length;
  let res = 0;
  let C = 1n; // use BigInt for exact binomial coefficients

  for (let i = 0; i < n; i++) {
      res = (res + Number((C % 10n) * BigInt(nums[i]) % 10n)) % 10;

      // Update C: C(n-1, i+1) = C(n-1, i) * (n-1-i)/(i+1)
      C = (C * BigInt(n - 1 - i)) / BigInt(i + 1);
  }
  return res;
};

triangularSum([1,2,3,4,5])