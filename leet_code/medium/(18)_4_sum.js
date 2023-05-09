

var fourSum = function(nums, target) {
    if(nums.length < 4) return []
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
    const strings = new Set()
    const unique = []
    let end = nums.length - 1
    for(let i = 0;i < nums.length - 2;i++) {
        let start = i + 1
        let second = i + 2
        while(start < end - 1) {
            // console.log({second,end})
            const array = [nums[i],nums[start],nums[second],nums[end]]
            console.log({array})
            const sum = array.reduce((total,amt) => {return total + amt})

            if(sum > target) {
                end--
                second = start + 1
            }else if(second === end - 1 || second >= end) {
                start++
                second = start + 1
            }
            else {
                second++
            }
            if(sum === target && !strings.has(array.join())) {
                unique.push(array)
                strings.add(array.join())
            }
            
        }
    }
    console.log(unique)
    console.log(strings)
};

fourSum([-3,-2,-1,0,0,1,2,3],0)