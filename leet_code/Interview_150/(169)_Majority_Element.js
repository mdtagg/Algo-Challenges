

const majorityElement = function(nums) {
  let element = null;
  let count = 0;

  for(let num of nums) {
    if(count === 0) element = num;
    element === num ? count++ : count--
  }
  return element
};

majorityElement([-1,1,1,1,2,1])

/*
const majorityElement = function(nums) {

    let max = -Infinity
    let majority
    const map = new Map()

    for(let num of nums) {
      map.set(num,(map.get(num) || 0) + 1)
      if(map.get(num) > max) {
        majority = num
        max = Math.max(max,map.get(num))
      }
    }
    return majority
};
*/