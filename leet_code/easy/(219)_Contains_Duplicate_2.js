

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

/*
PSUEDO CODE

delcare a variable numsMap that references an instance of the map object

iterate through each number in the nums array
    if our numsMap object does not have the current number make that number a key and set its value to the current index 
    if our numsMap object does have the current number 
        compare the absolute value of the last value set to the current number to k
        if the absolute value is less than or equal to k return true 
        if it is greater than k reset the value associated with the current number in our numMap object to the current index
        
if upon iterating through all the numbers in the nums array does not return true then return false
*/