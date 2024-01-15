

const containsNearbyDuplicate = (nums,k) => {

    const numsMap = new Map()

    for(let i = 0;i < nums.length;i++) {
        if(!numsMap.has(nums[i])) numsMap.set(nums[i],i);
        else {
            if(Math.abs(numsMap.get(nums[i]) - i) <= k) return true
            else numsMap.set(nums[i],i)
        }
    }
    return false
}

containsNearbyDuplicate([1,0,1,1],1)