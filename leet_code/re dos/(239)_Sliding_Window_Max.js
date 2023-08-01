/*
You are given an array of integers nums, 
there is a sliding window of size k which
is moving from the very left of the array
to the very right. You can only see the
k numbers in the window. Each time the
sliding window moves right by one position.

Return the max sliding window.
*/


const maxSlidingWindow = (nums,k) => {

   
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))









/*

const q = [];  
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        if (q[0] === i - k) {
            q.shift();
        }
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    

let left = 0
    let right = k - 1
    let maxWindow = []

    while(right < nums.length) {
        let windowMax = nums.slice(left,right + 1).sort((a,b) => a - b)
        let max = windowMax[windowMax.length - 1]
        maxWindow.push(max)
        left++
        right++
    }
    return maxWindow

*/