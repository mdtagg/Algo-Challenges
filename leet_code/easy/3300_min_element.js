var minElement = function(nums) {
    let min = Infinity;
    for(let i = 0;i < nums.length;i++) {
        let sum = 0;
        while(nums[i] >= 10) {
            sum += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10)
        }
        sum += nums[i]
        min = Math.min(sum,min);
    }
    return min
};