/*

There is an integer array nums sorted in ascending order
 (with distinct values).

Prior to being passed to your function, nums is possibly 
rotated at an unknown pivot index k (1 <= k < nums.length)
 such that the resulting array is [nums[k], nums[k+1], ...,
  nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
  For example, [0,1,2,4,5,6,7] might be rotated at pivot index 
  3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer
 target, return the index of target if it is in nums, or -1 if 
 it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

*/

var search = function(nums,target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return mid
        }
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if(nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
    return -1
}

console.log(search([1,2,3,4,5],4))


/*
OPTIMAL MEMORY 

var search = function(nums, target, i=0, j=nums.length-1) {
    if(i > j) return -1;

    const m = Math.floor(i + (j - i) / 2);

    if(nums[m] === target) return m;

    if(nums[i] <= nums[m]) {
        if(nums[i] <= target && target <= nums[m]) return search(nums, target, i, m - 1);
        else return search(nums, target, m + 1, j);
    }

    if(nums[m] <= nums[j]) {
        if(nums[m] <= target && target <= nums[j]) return search(nums, target, m + 1, j);
        else return search(nums, target, i, m - 1);
    }

    return -1;
};

OPTIMAL PERFORMANCE

var search = function(nums, target) {
    
    let left = 0
    let right = nums.length - 1

    while(left < right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return nums[mid]
        }
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if(nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
    return -1
  };

  CODE GRAVEYARD

if(nums.length === 1 && nums[0] === target) {
    return 0
}   
if(nums.length === 2) {
    return nums[0] === target ? 0 : nums[1] === target ? 1 : -1
    
}
while(left < right) {
    const mid = Math.floor((left + right) / 2)
    if(nums[left] === target) {
        return left
    }else if(nums[mid] > target) {
        left = mid + 1
    }
    else {
        right = mid
    }
}
return -1

const mid = Math.floor((left + right) / 2)
        if(nums[left] === target) {
            return left
        }else if(nums[mid] > target) {
            left = mid + 1
        }
        else {
            right = mid
        }


*/


