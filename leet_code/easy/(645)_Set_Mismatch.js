

const findErrorNums = (nums) => {

    let numArray = new Array(nums.length).fill(0)
    let duplicate,expected

    for(let i = 0;i < nums.length;i++) {
        let numIdx = nums[i] - 1
        numArray[numIdx]++
    }

    for(let i = 0;i < numArray.length;i++) {
        if(numArray[i] === 0) expected = i + 1
        if(numArray[i] === 2) duplicate = i + 1
    }
    return [duplicate,expected]
}

findErrorNums([2,2])

/*
EXPLANATION 

We have a duplicate number somewhere in the data set

We want to find where the duplicate is replace one of the duplicates 
with the correct number so that the data set is in non decreasing order

PSUEDO CODE 

//Initialize a new array with the length of nums and filled with 0
//Declare two variables duplicate and expected that are undefined

// Iterate through each value in the nums array with a for loop
    //Increase each value in our new array by 1 at the index of value in 
    //the nums array minus 1 

//Iterate through the nums array 

    //if the value we are on is 0 set expected to our index + 1
    //if the value is 2 set duplicate to i + 1

return an array of duplicate and expected as values
    


ORIGINAL SOLUTION 

const findErrorNums = (nums) => {

    nums = nums.sort((a,b) => a - b)
    let numSet = new Set()
    let duplicate
    let expectedNum

    for(let i = 0;i < nums.length;i++) {
        if(expectedNum !== undefined) {
            if(expectedNum !== nums[i]) return [duplicate,expectedNum]
            expectedNum = nums[i] + 1
        }
        else if(!numSet.has(nums[i])) numSet.add(nums[i]);
        else {
            duplicate = nums[i]
            let count = 1

            while(count < nums[i]) {
                if(!numSet.has(count)) return [nums[i],count]
                count++
            }
            expectedNum = nums[i] + 1
        }
    }
    return [duplicate,nums[nums.length - 1] + 1]
}

CODE GRAVEYARD

const findErrorNums = (nums) => {

    nums = nums.sort((a,b) => a - b)
    let prevNum = nums[0]

    for(let i = 1;i < nums.length;i++) {
        if(prevNum === nums[i]) {
            if(nums[i] + 1 === nums[i + 1] - 1 || prevNum === 1) return [prevNum,prevNum + 1]
            return [prevNum,prevNum - 1]
        }
        prevNum = nums[i]
    }
}
*/

