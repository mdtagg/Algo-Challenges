

var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges

  return a === c || b === c ? c : d
};

// function findCenter(nums) {

//   let numMap = new Map();
//   let total = nums.length

//   for(let arr of nums) {
//     for(let num of arr) {
//       numMap.set(num,(numMap.get(num) || 0) + 1);
//       if(numMap.get(num) === total) return num;
//     }
//   }
// }

findCenter([[1,2],[2,3],[4,2]])