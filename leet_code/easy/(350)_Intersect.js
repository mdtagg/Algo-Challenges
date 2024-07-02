

var intersect = function(nums1, nums2) {
  const freqMap = new Map();
  const res = []; 
  for (let num of nums1){
    freqMap.set(num,(freqMap.get(num) || 0) + 1);
  }
  for(let num of nums2) {
    const val = freqMap.get(num)
    if(val) {
      freqMap.set(num,val - 1);
      res.push(num);
    }
  }
  return res;
};

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
intersect(nums1, nums2);

intersect([1,2,2,1],[2,2])