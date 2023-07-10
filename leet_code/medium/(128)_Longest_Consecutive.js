

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

longestConsecutive([1,2,0,1])