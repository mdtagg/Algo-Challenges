const minSubArrayLen = (target,nums) => {

	let start = 0;
    let subarraySum = 0;
    let minValue = Infinity;
    for(let end=0; end<nums.length; end++){
        subarraySum += nums[end];
        while(subarraySum >= target){
            minValue = Math.min(minValue, end-start+1);
            subarraySum -= nums[start];
            start++;
        }
    }
    return minValue === Infinity ? 0 : minValue;
}
minSubArrayLen(15,[1,2,3,4,5])

/*
const minSubArrayLen = (target,nums) => {

    nums = nums.sort((a,b) => a - b)
    let stack = [nums[nums.length - 1]]
    let right = nums.length - 1
    let result = nums.length + 1

    while(right >= 0) {
        let sum = nums[nums.length - 1]

        for(let i = right - 1;i >= 0;i--) {
            if(nums[i] === target) return 1
            sum += nums[i]
            if(sum >= target) {
                result = Math.min(result,stack.length + 1)
                sum -= nums[i]
                continue
            }
            if(sum < target) {
                stack.unshift(nums[i])
            }

        }
        right--
        stack = [nums[right]]
    }
    return result === nums.length + 1 ? 0 : result
}

const minSubArrayLen = (target,nums) => {

    nums = nums.sort((a,b) => a - b)

    let left = nums.length - 2
    let right = nums.length - 1
    let stack = [nums[left],nums[right]]
    let sum = nums[left] + nums[right]

    while(left >= 0) {
        if(nums[left] === target || nums[right] === target) return 1
        if(sum === target) return stack.length 
        else if(sum < target) {
            let currSum = sum
            for(let i = left - 1;i >= 0;i--) {
                if(stack.includes(nums[i])) continue
                currSum += nums[i]
                if(currSum === target) return stack.length
                stack.unshift(nums[i])
            }
        }
        left--
        right = left + 1
        sum -= stack.pop()
        stack.unshift(nums[left])
        sum += stack[0]
    }
    return 0
}

const minSubArrayLen = (target,nums) => {

    nums = nums.sort((a,b) => b - a)
    let result = nums.length + 1
    let store = 1
    let sum = nums[0]

    for(let i = 1;i < nums.length;i++) {
        let currSum = nums[i] + sum
        let idx = i
        store++
        while(idx < nums.length) {
            currSum += nums[idx + 1]
            if(currSum === target) {
                store++
                break
            }
            if(currSum > target) {
                currSum -= nums[idx + 1]
                idx++;
            }
        }
    }
}

const minSubArrayLen = (target,nums) => {

    nums = nums.sort((a,b) => b - a)

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