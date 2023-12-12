

const maxProduct = (nums) => {

    let max1 = 0
    let max2 = 0
    
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] > max1) {
            max2 = max1
            max1 = nums[i]
        }
        else if(nums[i] >= max2) {
            max2 = nums[i]
        }
    }
    return (max1 - 1) * (max2 - 1)
}

maxProduct([1,5,4,5])

/*
const maxProduct = (nums) => {

    let stack = []
    let max = 0


    for(let i = 0;i < nums.length;i++) {
        if(nums[i] >= nums[i + 1]) {
            stack.pop()
            stack.push(nums[i])
        }else if(nums[i] > max) {
            max = nums[i]
        }
    }
}


const maxProduct = (nums) => {

    let stack = []
    let i = 0
    let j = 0
    let max = 0

    while(j < nums.length) {
        if(nums[i] > max) {
            max = nums[i]
            i++
            j = i
        }else if(nums[j] > max) {
            stack.push(max)
            max = 0
            j++
        }
        
        
    }
}


const maxProduct = (nums) => {

    let stack = [0,0]
    let i = 0

    while(i < nums.length) {
        if(nums[i] > stack[stack.length - 1] || nums[i] > stack[0]) {
            stack.shift()
            stack.push(nums[i])
        }
        i++
    }
}



const maxProduct = (nums) => {
    let max1 = Math.max(...nums)
    let idx1 = nums.findIndex(max1)
    let num1 = nums.splice(idx1,1)
    let max2 = Math.max(...nums)
    let idx2 = nums.findIndex(max2)
    let num2 = nums.splice(idx2,1)
    let test = [num1,num2]
    return test.join('')

}
*/