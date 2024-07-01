

function threeConsecutiveOdds(nums) {
  let count = 0

  for(let num of nums) {
    if(num % 2 !== 0) count++;
    else count = 0;
    if(count === 3) return true;
  }
  return false; 
}

threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])