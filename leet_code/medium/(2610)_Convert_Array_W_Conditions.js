

const findMatrix = (nums) => {

    let result = [[]]
    let i = 0
    let j = 0

    while(i < nums.length) {
        if(!result[j].includes(nums[i])) {
            result[j].push(nums[i])
        }else {
            while(j <= result.length) {
                if(!result[j].includes(nums[i])) {
                    result[j].push(nums[i])
                    j = 0
                    break
                }
                else if(j === result.length - 1) {
                    result.push([nums[i]])
                    j = 0
                    break
                }
                else {
                    j++
                }
            }
        }
        i++
    }
    return result
}

findMatrix([1,3,4,1,2,3,1])