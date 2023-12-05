

var searchRange = function(nums, target) {

    const result = [,]
    let start = binSearchStart(nums,target) + 1
    let end = binSearchEnd(nums,target)
};

function binSearchStart(nums,target) {
    const mid = Math.floor(nums.length /2)
    let positions = 0
    if(nums[mid] === target && nums.length === 1) return 0
    if(nums[mid] <= target) {
        positions += nums.slice(0,mid).length + binSearchStart(nums.slice(mid),target)

    }else if(nums[mid] > target) {
        positions += binSearchStart(nums.slice(0,mid),target)
    }
    return positions
}

function binSearchEnd(nums,target) {
    
}
    console.log(searchRange([5,6,6,6,7,7,8,9,10,10],8))

/*
Plan: take nums and binary sort to find target

ORIGINAL SOLUTION

    return [nums.indexOf(target),nums.lastIndexOf(target)]

CODE GRAVEYARD

const searchRange = (nums,target) => {

    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)

    let start = 0
    let end = nums.length - 1

    if(left[left.length - 1] < target) start += left.length;
    else start += binSortStart(left,target);
    if(right[0] < target) start += binSortStart(right,target)
    if(right[0] > target) end -= right.length
    else end -= binSortEnd(right,target)
    if(left[left.length - 1] > target) end -= binSortEnd(left,target)
    // if(left[left.length - 1] >= target)
    // if(right[right.length - 1] > target)

}

function binSortStart(chunk,target) {

    let mid = Math.floor(chunk.length / 2)
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    let start = 0

    if(left[left.length - 1] < target) start += left.length;
    if(right[0] < target) start += binSortStart(right,target);
    if(left[0] < target) start += binSortStart(left,target)
    return start
}

function binSortEnd(chunk,target) {

    let mid = Math.floor(chunk.length / 2)
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    let end = 0

    if(right[0] > target) end += right.length;
    else if(right[right.length - 1] > target) end += binSortEnd(right,target);
    return end
}

const searchRange = (nums,target) => {

    let result = [-1,-1]
    let start = 0
    let end = 0
    
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid)
    if(left[left.length - 1] < target) {
        start += left.length
    }
    if(right[right.length - 1] > target) {
        start += binSortStart(right,target)
    }
    if(right[0] > target) {
        end += right.length
    }
    if(left[left.length - 1] > target) {
        end += binSortEnd(left,target)
    }

    if(start === 0) return result 
    return [start,end]
}

function binSortStart(chunk,target) {
    let mid = Math.floor(chunk.length / 2)
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    let start = 0
    if(left[0] === target || !left.length) return 0
    if(left[left.length - 1] < target) {
        start += left.length + binSortStart(right,target)
    }else if(left[0] < target) {
        start += binSortStart(left,target)
    }
    return start
}

function binSortEnd(chunk,target) {
    let mid = Math.floor(chunk.length / 2)
    let left = chunk.slice(0,mid)
    let right = chunk.slice(mid)
    let end = 0
    if(right[right.length - 1] === target || !right.length) return 0
    if(right[0] > target) return right.length
    if(right[right.length - 1] > target) {
        end += binSortEnd(right,target) 

    }
    return end
}

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