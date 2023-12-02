

const searchRange = (nums,target) => {

    let result = [-1,-1]
    let mid = Math.floor(nums.length / 2)
    if(nums[mid] === target) {
        binSort(nums.slice(0,mid))
    }
    
}



function binSort(chunk) {
    let mid = Math.floor(nums.length / 2)
    if(chunk[mid] < target)
}

console.log(searchRange([5,7,8,8,8,10],8))

/*
Plan: take nums and binary sort to find target

ORIGINAL SOLUTION

    return [nums.indexOf(target),nums.lastIndexOf(target)]

CODE GRAVEYARD

const searchRange = (nums,target) => {

    let result = [-1,-1]
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)

    if(left[left.length - 1] >= target) {
        result[0] = binSort(left)
    }
    binSort(right)
}



function binSort(chunk) {
    if(chunk.length === 1) {
        if(chunk[0] === 8) return 0 
        return 1
    }
    let mid = Math.floor(chunk.length / 2)
    let left = binSort(chunk.slice(0,mid))
    let right = binSort(chunk.slice(mid))
    return left + right
}

let mid = Math.floor(chunk.length / 2)
    if(chunk[chunk.length - 1 < target]) return pos - chunk.length
    binSort(chunk.slice(0,mid))
    binSort(chunk.slice(mid))

if(nums[mid] >= target) {
        let test = nums.slice(mid)
        console.log(test)
    }
    
    function binSort() {

    }

if(chunk[chunk.length - 1] < target || chunk[0] > target) return
    if(chunk[0] === target) 

const result = [,]
let mid = Math.floor(nums.length / 2)
binSort(nums.slice(0,mid))
binSort(nums.slice(mid))
 */