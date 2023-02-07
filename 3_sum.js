var threeSum = function(nums) {
    let validSums = []
    let validSumsStr = []
    nums = nums.sort((a,b) => a - b)
    while(nums.length >= 3) {
       for(let i = 2;i < nums.length;i++) {
            let potentialSum = [nums[0],nums[1],nums[i]]
            console.log(potentialSum)
            let reducedSum = [nums[0],nums[1],nums[i]].reduce((total,amt) => {return total + amt})
            if(reducedSum === 0 && !validSumsStr.includes(potentialSum.join(''))) {
                validSums.push(potentialSum)
                
                validSumsStr.push(potentialSum.join(''))
            }
            if(i === nums.length - 1) {
                nums.shift()
                break
            }
        } 
    }
    console.log(validSums)
};

threeSum([-2,0,1,1,2])
// -1,0,1,2,-1,-4
// 0,0,0,0