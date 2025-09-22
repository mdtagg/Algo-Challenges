
const maxFrequencyElements = (nums) => {

  const freqMap = new Map();
  let maxFreq = 0;
  let result = 0;

  for(let num of nums) {
    freqMap.set(num,(freqMap.get(num) || 0) + 1);
    maxFreq = Math.max(maxFreq,freqMap.get(num))
  }

  for(let val of freqMap.values()) {
    if(val === maxFreq) {
      result += maxFreq
    }
  }
  return result
}


const testCases = [
  [1,2,2,3,1,2,4],
  [1,2,3,4,5]
]

maxFrequencyElements(testCases[0])

/*
const maxFrequencyElements = (nums) => {

  const freqMap = new Map();
  let maxFreq = 0;
  let result = 0;

  for(let num of nums) {
    freqMap.set(num,(freqMap.get(num) || 0) + 1);
    maxFreq = Math.max(maxFreq,freqMap.get(num))
  }

  for(let [num,val] of freqMap) {
    if(val === maxFreq) {
      result += maxFreq
    }
  }
  return result
}


const maxFrequencyElements = (nums) => {

  nums = nums.sort();
  let maxFreq = 1;
  let currMaxFreq = 1;
  let result = 0;

  for(let i = 1;i < nums.length;i++) {
    if(nums[i] !== nums[i - 1]) { 
      if(maxFreq < currMaxFreq) result = 1;
      if(maxFreq === currMaxFreq) result++;
      maxFreq = Math.max(maxFreq,currMaxFreq);
      currMaxFreq = 0;
    }
    currMaxFreq++;
  }

  return result *= maxFreq;
}
*/