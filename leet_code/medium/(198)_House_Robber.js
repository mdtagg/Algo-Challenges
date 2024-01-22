

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

rob([1,3,1,3,100,8,9])

/*
[1,2,3,4,5,6,7,8,9]

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