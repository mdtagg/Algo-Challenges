/*
Given an array of integers heights representing 
the histogram's bar height where the width of 
each bar is 1, return the area of the largest
rectangle in the histogram.
*/

const largestRectangleArea = (heights) => {
    
}

largestRectangleArea([2,1,5,6,2,3])

/*
INITIAL SOLUTION

heights.push(0)
    const stack = []
    let res = 0
    for(let i = 0;i < heights.length;i++) {
        let heightStart = i
        while(stack.length && stack[stack.length - 1][1] > heights[i]) {
            const [pos,height] = stack.pop()
            res = Math.max(res, (i - pos) * height)
            heightStart = pos
        }
        stack.push([heightStart,heights[i]])
    }
    console.log(res)
    return res

PERFORMANCE SOLUTION

var largestRectangleArea = function(heights) {
    const lessFromLeft = new Array(heights.length);
    const lessFromRight = new Array(heights.length);
    lessFromLeft[0] = -1;
    lessFromRight[heights.length - 1] = heights.length;

    for (let i = 1; i < heights.length; i++) {
        let p = i - 1;
        while (p >= 0 && heights[p] >= heights[i]) {
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }

    for (let i = heights.length - 2; i >= 0; i--) {
        let p = i + 1;
        while (p < heights.length && heights[p] >= heights[i]) {
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }

    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        max = Math.max(max, heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
    }
    return max;
};

MEMORY SOLUTION

var largestRectangleArea = function(heights) {
    let maxArea = 0, minHeight = 0
    for (let i = 0; i < heights.length; i++) {
        if (minHeight === heights[i]) continue
        let temp = i, width = 0
        while (heights[temp] <= heights[i] && i < heights.length) {
            width++
            i++
        }
        i = temp - 1
        while (heights[temp] <= heights[i] && i >= 0) {
            width++
            i--
        }
        minHeight = heights[temp]
        maxArea = Math.max(maxArea, width * heights[temp], heights[temp])
        i = temp
    }
    return maxArea
};

CODE GRAVEYARD 

heights.push(0)  
    let stack = [];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        let heightStart = i;
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                let [pos, height] = stack.pop();
                res = Math.max(res, (i - pos) * height);
                heightStart = pos; 
            }
        stack.push([heightStart, heights[i]]);
    }
    return res;

*/