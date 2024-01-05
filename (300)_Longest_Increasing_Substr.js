
const lengthOfLIS = (nums) => {

    let dp = new Array(nums.length).fill(1)

    for(let i = 1;i < nums.length;++i) {
        for(let j = 0;j < i;++j) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}


lengthOfLIS([10,9,2,5,3,7,101,18])

/*

const lengthOfLIS = (nums) => {

    let dp = new Array(nums.length).fill(1)

    for(let i = 1;i < nums.length;++i) {
        for(let j = 0;j < i;++j) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};


const lengthOfLIS = (nums) => {

    let arr = []
    let result = 0

    for(let i = 1;i < nums.length;i++) {
        arr.push(nums[i - 1])
        if(nums[i] >= nums[i - 1]) {
            let sequence = 0
            arr = arr.sort((a,b) => a - b)
            let j = 0
            while(arr[j] < nums[i]) {
                if(arr[j] === arr[j + 1]) {
                    j++
                    continue
                }
                sequence++
                j++
            }
            let k = i + 1
            let max = nums[i]
            while(nums[k] > max) {
                sequence++
                max = nums[k]
                k++
            }
            result = Math.max(result,sequence + 1)
        }
    }
}


const lengthOfLIS = (nums) => {

    let result = 0
    let sequence = 2
    let left = 0
    let right = 1

    while(right < nums.length) {
        if(nums.length - right <= result) return result
        if(nums[right] >= nums[left]) {
            for(let i = right,j = right + 1;j < nums.length;j++) {
                if(nums[j] > nums[i]) {
                    i = j
                    sequence++;
                }
                else continue
            }
            result = Math.max(result,sequence)

        }
        left++
        right = left + 1
    }
    return result
}
*/