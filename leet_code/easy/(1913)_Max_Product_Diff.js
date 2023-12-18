

const maxProductDifference = (nums) => {

    let min = Math.min(...nums)
    let max = Math.max(...nums)

    nums.splice(nums.indexOf(min),1)
    nums.splice(nums.indexOf(max))

    let min1 = Math.man(...nums)
    let max1 = Math.max(...nums)

    return (max1 * max) - (min1 * min)

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