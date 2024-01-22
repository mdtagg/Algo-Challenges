

var rob = function(nums) {

    let rob = 0
    let stopRob = 0

    for(let i = 0;i < nums.length;i++) {
        let newRob = nums[i] + stopRob
        let newStopRob = Math.max(rob,stopRob)
        rob = newRob 
        stopRob = newStopRob
    }
    return Math.max(rob,stopRob)
};

rob([1,3,1,3,100,8,9])

/*
comparing the max value of the sequence of robberies to the max value 
of a robery that would force us to stop robbing

var rob = function(nums) {
    let rob = 0;
    let norob = 0;
    for (let i = 0; i < nums.length; i++) {
        let newRob = norob + nums[i];
        let newNoRob = Math.max(norob, rob);
        rob = newRob;
        norob = newNoRob;
    }
    return Math.max(rob, norob);
};

const rob = (nums) => {
    let even = 0
    let odd = 0
    
    if(nums.length === 1) return nums[0]

    for(let i = 0;i < nums.length;i++) {
        i % 2 == 0 ? even += nums[i] : odd += nums[i]
    }
    return Math.max(Math.max(even,odd),nums[0] + nums[nums.length - 1])
}
*/