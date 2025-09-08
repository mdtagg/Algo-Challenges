

// const rotate = (nums,k) => {
//     k = k % nums.length
//     nums.unshift(...nums.splice(nums.length - k))
// }

const rotate = (nums,k) => {
    let adjustedK = k % nums.length;
    nums.unshift(...nums.splice(nums.length - adjustedK))
}
rotate([1,2,3,4,5,6,7],3)
