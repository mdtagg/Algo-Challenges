

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    let start = 0;
    let numOfSameNums = 1;
    for (let end = 1; end < nums.length; end += 1) {
        const firstEl = nums[start];
        const currEl = nums[end];
        if (firstEl === currEl && numOfSameNums < 2) {
            nums[k] = currEl;
            k += 1;
            numOfSameNums += 1;
            continue;
        }
        if (firstEl !== currEl) {
            nums[k] = currEl;
            numOfSameNums = 1;
            start = k;
            k += 1;
            continue;
        }
    }
    return k;
};

/*

ORIGINAL SOLUTION

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


PERFORMANCE SOLUTION

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    let start = 0;
    let numOfSameNums = 1;
    for (let end = 1; end < nums.length; end += 1) {
        const firstEl = nums[start];
        const currEl = nums[end];
        if (firstEl === currEl && numOfSameNums < 2) {
            nums[k] = currEl;
            k += 1;
            numOfSameNums += 1;
            continue;
        }
        if (firstEl !== currEl) {
            nums[k] = currEl;
            numOfSameNums = 1;
            start = k;
            k += 1;
            continue;
        }
    }
    return k;
};
*/

removeDuplicates([1,1,1,2,2,3])