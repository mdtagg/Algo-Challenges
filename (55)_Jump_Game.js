

var canJump = function(nums) {
    
    let goal = nums.length - 1

    for(let i = nums.length - 1;i >= 0;i--) {
        if(nums[i] + i >= goal) goal = i;
    }
    return goal === 0 ? true : false
    
};

canJump([5,9,3,2,1,0,2,3,3,1,0,0])

/*
const canJump = (nums) => {
    if(nums.length === 1) return true
    let i = 0

    while(i < nums.length) {
        const subNums = nums.slice(i + 1,i + nums[i] + 1)
        const dist = nums.length - i 
        if(!subNums.length) return false
        if(nums[i] + 1 >= dist || Math.max(...subNums) >= dist) return true 
        i++
        while(nums[i] !== Math.max(...subNums)) i++
    }
    return false
}



const canJump = (nums) => {

    if(nums.length === 1) return true
    let i = 0

    while(i < nums.length) {
        const subNums = nums.slice(i + 1,i + nums[i] + 1)
        const dist = nums.length - i 
        if(!subNums.length) return false
        if(nums[i] + 1 >= dist || Math.max(...subNums) >= dist) return true 
        // i++
        let lastIndex
        for(let i = subNums.length - 1;i >= 0;i--) {
            if(subNums[i] === Math.max(...subNums)) {
                lastIndex = i
                break
            }
        }
        let test = lastIndex + i + 1
        i = test
        // while(nums[i] !== Math.max(...subNums)) i++
    }
    return false
}
*/