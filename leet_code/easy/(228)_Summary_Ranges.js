

const summaryRanges = (nums) => {
    let result = []
    let left = 0

    for(let right = 0;right < nums.length;right++) {
        if(nums[right] + 1 == nums[right + 1]) continue;
        if(left == right) {
            result.push(`${nums[left]}`)
        }else {
            result.push(`${nums[left]}->${nums[right]}`)
        }
        left = right + 1
    }
    return result
}

summaryRanges([0,2,3,4,6,8,9])