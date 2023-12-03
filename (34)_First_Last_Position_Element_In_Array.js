

const searchRange = (nums,target) => {

    let result = [-1,-1]
    
    let mid = Math.floor(nums.length / 2)
    let test = binSort(nums,target)
    // let start = binSort(nums.slice(0,mid),target)
    // let end = binSort(nums.slice(mid),target)
}

function binSort(chunk,target) {
    let mid = Math.floor(chunk.length / 2)
    if(chunk[0] === target && chunk.length === 1) return 0
    if(chunk[chunk.length - 1] < target && chunk[0] < target) return chunk.length
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    let start 
    let end
    if(chunk[0] < target) {
        start = binSort(left,target)
    }
    if(chunk[chunk.length - 1] >= target) {
        end = binSort(right,target)
    }
}

console.log(searchRange([1,2,3,4,4,4,4,4,4,4,8,8,10,11,12],8))

/*
Plan: take nums and binary sort to find target

ORIGINAL SOLUTION

    return [nums.indexOf(target),nums.lastIndexOf(target)]

CODE GRAVEYARD

// function binSortStart(chunk,target) {
//     let mid = Math.floor(chunk.length / 2)
//     if(chunk[0] === target) return 0
//     if(chunk[chunk.length - 1] < target) return chunk.length
//     let left = binSortStart(chunk.slice(0,mid),target)
//     let right = binSortStart(chunk.slice(mid),target)
//     return left + right
// }

// function binSortEnd(chunk,target) {
//     let mid = Math.floor(chunk.length / 2)
//     if(chunk[chunk.length - 1] === target) return 0 
//     if(chunk[0] !== target) return chunk.length
//     let left = binSortEnd(chunk.slice(0,mid),target)
//     let right = binSortEnd(chunk.slice(mid),target)
//     return left + right
// }

const searchRange = (nums,target) => {

    let result = [-1,-1]
    
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    if(left[left.length - 1] === target) {
        result[0] = binSortLeft(left,target,'left')
    }
    let test = binSortLeft(right,target,'right')
}

function binSortLeft(chunk,target,direction) {
    let mid = Math.floor(chunk.length / 2)
    if(chunk[0] === target && direction === 'left') return 0
    if(chunk[chunk.length - 1] === target && direction === 'right') return 0
    if(
        chunk[chunk.length - 1] < target && direction === 'left' ||
        chunk[0] > target && direction === 'right'
    ) {
        return chunk.length
    }
    let left = binSortLeft(chunk.slice(0,mid),target,direction)
    let right = binSortLeft(chunk.slice(mid),target,direction)
    return left + right
}

let result = [-1,-1]
    
    let mid = Math.floor(nums.length / 2)
    let start = -1
    if(nums[mid] === target) {
        start = binSort(nums.slice(0,mid),target)
    }
    
}

function binSort(chunk,target) {
    let mid = Math.floor(chunk.length / 2)
    if(chunk[mid] === target && chunk.length === 1) return
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    if(chunk[mid] < target) {
        left = left.length
        right = binSort(right,target)
    }else {
        left = binSort(left,target)
    }
    return left + right
}

let mid = Math.floor(chunk.length / 2)
    if(chunk[mid] === target && chunk.length === 1) return
    if(chunk[mid] < target) return chunk.slice(0,mid).length + 1
    
    let left = binSort(chunk.slice(0,mid))
    let right = binSort(chunk.slice(mid))
    return left + right

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