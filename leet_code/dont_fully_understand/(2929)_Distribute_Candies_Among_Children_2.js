
var distributeCandies = function (n, limit) {
  let ans = 0;
  for (let i = 0; i <= Math.min(limit, n); i++) {

      const x = n - i;
      const y = 2 * limit;

      if (x > y) {
          continue;
      }
      
      const min = Math.min(n - i, limit);
      const max = Math.max(0, n - i - limit)
      ans += min - max + 1;
  }
  return ans;
};
// var distributeCandies = function(n, limit) {

//   const min = (() => {
//       const m = n - limit * 2
//       return m >= 0 ? m : 0
//   })()

//   const max = limit > n ? n : limit
//   let result = 0
//   for (let i = min; i <= max; i++) {
//       const left = n - i
//       const iMin = min + max < left ? left - max : min
//       const iMax = min + max > left ? left - min : max
//       // console.log(iMax, iMin, iMax - iMin + 1)
//       result += (iMax - iMin + 1)
//   }
//   return result
// };

distributeCandies(8,7)

// ex: 2,2,1 2,1,2 1,2,2

/*
n divided by the limit 


*/