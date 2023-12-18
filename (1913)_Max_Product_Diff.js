

const maxProductDifference = (nums) => {

    let mins = [nums[0],0]
    // let maxs = [0,0]
    
    for(let i = 0;i < nums.length;i++) {
        
    }

}

maxProductDifference([5,6,2,7,4])

/*
ORIGINAL SOLUTION

const maxProductDifference = (nums) => {
    nums = nums.sort((a,b) => a - b)
    let max = nums[nums.length - 1] * nums[nums.length - 2]
    let min = nums[1] * nums[0]

    return max - min
}
*/