

const minOperations = (nums) => {
    let totalOps = 0
    const numsMap = new Map()
        for(let i = 0;i < nums.length;i++) {
            numsMap.set(nums[i],(numsMap.get(nums[i]) || 0) + 1)
        }
        for(let [num,amt] of numsMap) {
            let min = -1
            if(amt % 3 === 0) {
                totalOps += amt / 3
                continue
            }

            if(amt % 2 === 0) min = amt / 2;

            let threeStack = Math.floor(amt / 3) * 3
            while(threeStack > 0) {
                if((amt - threeStack) % 2 === 0) {
                    totalOps += (threeStack / 3) + ((amt - threeStack) / 2)
                    break
                }else {
                    threeStack -= 3
                }
            }
            if(threeStack <= 0) {
                if(min === -1) return -1
                totalOps += min
            }
            
        }
    return totalOps
}
//[5,5,5,5,5,5,5] 
console.log(minOperations([19,19,19,19,19,19,19,19,19,19,19,19,19]))

/*
Issue: When adding operations there are times when its more efficient to decrease by 3 instead of 2
10 => 8 => 6 => 3 => 0

//if num of entires not divisible by 2 or 3 return -1
//else if entries divis by 2 or 3 divide entry by 2 or 3 and add to total ops
*/