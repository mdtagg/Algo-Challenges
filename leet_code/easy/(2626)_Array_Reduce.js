

const reduce = (nums,fn,init) => {
    
    let val = init
    for(let i = 0;i < nums.length;i++) {
        val = fn(val,nums[i])
    }
    return val
}

const nums = [1,2,3,4]
const sum = (accum,curr) => accum + curr
const init = 0
reduce(nums,sum,init)