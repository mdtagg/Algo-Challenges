

const longestConsecutive = (nums) => {

    if(nums.length === 0) return 0
    nums = nums.sort((a,b) => a - b)
    let max = 1
    let result = 0

    for(let i = 0;i < nums.length - 1;i++) {
        if(nums[i] + 1 === nums[i + 1]) {
            max++;
            result = Math.max(result,max)
        }
        else {
            max = 1
        }
    }
    return result
}

longestConsecutive([0,3,7,2,5,8,4,6,0,1])

/*
const longestConsecutive = (nums) => {
    nums = nums.sort((a,b) => a - b)
    let currentLongest = 1
    let longest = 0

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] === nums[i + 1]) {
            continue
        }
        else if(nums[i + 1] !== nums[i] + 1) {

            if(currentLongest > longest) {
                longest = currentLongest
            }
            currentLongest = 0
        }
        currentLongest++
    }
    return longest
}
*/