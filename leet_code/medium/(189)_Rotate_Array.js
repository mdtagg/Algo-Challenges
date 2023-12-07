

const rotate = (nums,k) => {
    k = k % nums.length
    nums.unshift(...nums.splice(nums.length - k))
}

rotate([1,2],5)
