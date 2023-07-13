/*

Given n non-negative integers representing an elevation map 
where the width of each bar is 1, compute how much water 
it can trap after raining.

*/

const trap = (height) => {
    let n = height.length - 1
    let left = []
    let right = []
    let result = 0

    left[0] = height[0]
    right[n] = height[n]

    for(let i = 1;i < n;i++) {
        left[i] = Math.max(left[i - 1],height[i])
    }
    
    for(let i = n - 1;i >= 0;i--) {
        right[i] = Math.max(right[i + 1],height[i])
    }

    for(let i = 0;i < n;i++) {
        result += Math.min(left[i],right[i]) - height[i]
    }
    return result
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))








/*
    This solution has us fill in the spaces that collect the water 
    and then compare the filled in value with the value of that space 
    not filled in

    The left and right arrays exist to determine which spaces to fill in
    The first two for loops change the left and right arrays by filling in 
    all the spaces up to the highest value 

    After the first loop, left is 
    [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3] and right is 
    [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]
    
    These values will be used to change how to get the new volume before and 
    after the highest value by taking the minimum of the two at the same index
    and then subtracting the value at the height index from it 
    */
    // let left = [];
    // let right = [];
    // let n = height.length;

    // left[0] = height[0];
    // right[n-1] = height[n-1];

    // console.log({left,right,height})
    // for(let i = 1; i<n; i++)left[i] = Math.max(left[i-1], height[i]);
    
    // for(let i = n - 2; i>=0; i--)right[i] = Math.max(right[i+1], height[i]);
    // let ans = 0;
    // for(let i = 0; i<n; i++) ans+=(Math.min(left[i], right[i])) - height[i];

    // console.log({ans})
    // return ans;


//MY SOLUTION

// let left = 0
    // let right = left + 1
    // let volume = 0
    // let volumeAdjust = 0

    // while(height[left] <= height[left + 1]) {
    //     left++
    //     right++
    // }
    
    // while(left < height.length - 2) {

    //     const diff = right - left - 1

    //     console.log({diff,left,right,volume,volumeAdjust})
    //     console.log(height[left],height[right])
        
    //     if((diff === 0 || height[right] < height[left]) && right !== height.length - 1) {
    //         volumeAdjust += height[right]
    //     }
    
    //     if(diff !== 0 && height[right] >= height[left]) {
    //         volume += height[left] * diff
    //         volume -= volumeAdjust 
    //         volumeAdjust = 0
    //         left = right
    //         console.log({volumeAdjust})
    //     }
        
    //     if(right === height.length - 1 && height[left] > height[right]) {
            
    //         height[left]--
    //         if(height[left] === height[left + 1]) {
    //             left++
    //             volumeAdjust -= height[left]
    //         }
    //     }else {
    //         right++
    //     }
    // }
    // console.log({volume})

// let left = 0
    // let right = left + 1
    // let volume = 0

    // while(height[left] < height[left + 1]) left++;
    // while(left < height.length - 1) {
    //     let diff = right - left
    //     console.log(diff)
    //     if(height[left] < height[right] && diff) {
    //         while(height[left] <= height[right]) right++;
    //         volume += diff + (height[right] - height[left])
    //         left = right
    //     }
    //     // right++
    //     break
    // }