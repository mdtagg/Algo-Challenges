

const findDuplicate = (nums) => {
    const set = new Set()
    for(let num of nums) {
        if(set.has(num)) {
            return num
        }
        set.add(num)
    }
}

findDuplicate([1,3,4,2,2])

/*
PERFORMANCE SOLUTION

let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow != fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;


INITIAL SOLUTION

const set = new Set()
    for(let num of nums) {
        if(set.has(num)) {
            return num
        }
        set.add(num)
    }

*/