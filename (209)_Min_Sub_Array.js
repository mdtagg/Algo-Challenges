

const minSubArrayLen = (target,nums) => {

    nums = nums.sort((a,b) => a - b)

    let result = nums.length + 1
    let left = 0
    let right = 1
    let stack = [nums[left],nums[right]]
    let sum = nums[left] + nums[right]

    while(left < right && right < nums.length) {
        if(nums[left] === target || nums[right] === target) return 1

        if(sum === target) {
            result = Math.min(result,stack.length)
            right++
            sum -= stack.shift()
            left++
            stack.push(nums[right])
            sum += nums[right]
        }
        if(sum < target) {
            right++
            stack.push(nums[right])
            sum += nums[right]
        }else if(sum > target) {
            sum -= stack.shift()
            left++
        }
    }
    return result < nums.length + 1 ? stack.length : 0
}

minSubArrayLen(9,[2,3,1,2,4,3])

/*
nums = nums.sort((a,b) => a - b)
    let left = nums.length - 2
    let right = nums.length - 1
    let stack = [nums[left],nums[right]]
    let sum = nums[left] + nums[right]

    while(left < right && left > 0) {
        if(nums[left] === target || nums[right] === target) return 1
        if(sum === target) return stack.length
        if(sum < target) {
            stack.unshift(nums[left - 1])
            sum += 
            while(sum < target) {
                
            }
            stack.unshift(nums[left - 1])
            sum += nums[left - 1]
        }else {
            sum -= stack.pop()
            right--
            left--
            stack.push(nums[left])
            sum += nums[left]
        }
    }
*/