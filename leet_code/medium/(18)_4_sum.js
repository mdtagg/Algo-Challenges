

var fourSum = function(nums, target) {
    if(nums.length < 4) return []
    nums.sort((a,b) => {
        return a - b
    })
    console.log(nums)
    
};

fourSum([1,0,-1,0,-2,2],0)