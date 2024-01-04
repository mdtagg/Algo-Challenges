

const minOperations = (nums) => {
    //initialize our total operations variable
    let totalOps = 0
    //initialize and populate our map object with the counts of each unique entry
    const numsMap = new Map()
        for(let i = 0;i < nums.length;i++) {
            numsMap.set(nums[i],(numsMap.get(nums[i]) || 0) + 1)
        }
        //iterate through the values in our map object 
        for(let amt of numsMap.values()) {
            //check if our value is divisible by 3. If so the lowest number of ops will be the amt / 3
            //continue to the next iteration
            if(amt % 3 === 0) {
                totalOps += amt / 3
                continue
            }
            //set a minimum number of operations if the amt is divisible by 2 and -1 if not
            let min = amt % 2 === 0 ? amt / 2 : -1

            //initialize a variable that stores the highest common denominator of the amt and 3
            let threeStack = Math.floor(amt / 3) * 3

            //initialize a while loop that checks to see if our three stack variable is greater than 0
            while(threeStack > 0) {
                //check to see if the amt minus the value in three stack is divisible by 2
                if((amt - threeStack) % 2 === 0) {
                    //if so then add the value in three stack divided by 3 to total ops
                    //and set min to the amt minus three stack divided by 2 and exit the loop
                    totalOps += (threeStack / 3)
                    min = ((amt - threeStack) / 2)
                    break
                }else {
                    //if the amt minus three stack is not divisible by 2 subtract 3 from three stack
                    threeStack -= 3
                }
            }
            //after the while loop has finished check to see if min is -1
            //if it is and our loop has terminated that means our amt was not divisible 
            //by 3 or 2 and thus -1 is returned
            if(min === -1) return -1
            //if min is not -1 add the min to the total ops
            totalOps += min
        }
    //return the total operations
    return totalOps
}
//[5,5,5,5,5,5,5] 
console.log(minOperations([19,19,19,19,19,19,19,19,19,19,19,19,19]))

/*
Issue: When adding operations there are times when its more efficient to decrease by 3 instead of 2
10 => 8 => 6 => 3 => 0

//if num of entires not divisible by 2 or 3 return -1
//else if entries divis by 2 or 3 divide entry by 2 or 3 and add to total ops
*/