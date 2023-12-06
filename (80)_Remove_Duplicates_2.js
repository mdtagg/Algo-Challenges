

const removeDuplicates = (nums) => {

    const numMap = new Map()
    let k = 0

    for(let i = 0;i < nums.length;i++) {
        numMap.set(nums[i],(numMap.get(nums[i]) || 0) + 1);
        numMap.get(nums[i]) > 2 ? nums[i] = Infinity : k++;
    }
    nums.sort()
    return k
}

removeDuplicates([1,1,1,2,2,3])