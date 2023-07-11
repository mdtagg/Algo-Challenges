

/*

You are given an integer array height of length n. There are n 
vertical lines drawn such that the two endpoints of the ith 
line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

this challenge is incorrectly described. Water volume has nothing to do with the challenge, 
[1,2,1] expects an output of 2, so for this to work there has a to be a hole in the middle wall
to allow for water to fill the 1 chambers. 

*/


var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    
    while(left < right) {
        // console.log(height[left],height[right])
        const min = Math.min(height[left],height[right])
        const volume = min * (right - left)
        // console.log(min)
        if(volume > max) max = volume;
        if(height[left] < height[right]) {
            left++
        }else {
            right--
        }
    }
    console.log(max)
};

maxArea([2,3,4,5,18,17,6])





















// for(let i = 0;i < height.length;i++) {
    //     let test = Math.min(height[i],height[height.length - 1])
    //     let area = test * (height.length - i - 1)
    //     if(area > max) {
    //         max = area
    //     }
    //     // console.log(max)
    //     console.log({test,area})
    // }

// let maxArea = 0
//     let left = 0
//     let right = height.length - 1
//     while(left < right) {
//         maxArea = Math.max(maxArea,Math.min(height[left],height[right]) * (right - left))
//         if(height[left] < height[right]) {
//             left++
//         }else {
//             right--
//         }
//     }
//     return maxArea


// let containerHeights = []
//     let containerWidths = []
//     for(let i = 0;i < height.length;i++) {
//         let maxHeight = height[i] <= height[height.length - 1] ? 
//         height[i] :
//         height[height.length - 1]
//         containerWidths.push(maxHeight * (height.length - i - 1))
//         let highest = height[i] <= height[i + 1] ? 
//         height[i] :
//         height[i + 1]
//         containerHeights.push(highest)
//     }
//     console.log(containerWidths)
//     containerHeights = containerHeights.filter(item => item !== undefined)
//     console.log(containerHeights)
//     let test = Math.max(...containerWidths.concat(containerHeights))
//     console.log(test)


// let testContainer = []
    // height = height.sort()
    // console.log(height)
    // let highestRect = height[height.length - 1] - height[height.length - 2]
    // console.log(highestRect)
    // // let count = 0
    // // while(height.length > 1) {
    // //     let maxHeight = 0
    // //     if(height[0] <= height[height.length - 1]) {
    // //         maxHeight = height[0]
    // //     }else {
    // //         maxHeight = height[height.length - 1]
    // //     }
    // //     testContainer.push(maxHeight * (height.length - 1))
    // //     height.shift()
    // //     count++
    // // }
    // // console.log(testContainer)

// let testContainer = []
//     while(height.length > 1) {
//         let maxVolume = height.length - 1
//         let maxHeight = height[0] <= height[0 + 1] ? 
//         height[0] :
//         height[1]
//         console.log(maxHeight)
//         testContainer.push()
//         // height.shift()
//         break
//     }

// let testContainer = []
//     let count = 0
//     while(count < 8) {
//         let maxIndex = 0
//         for(let i = height.length;i > 0;i--) {
//             if(height[i] >= height[0]) {
//                 maxIndex = i + testContainer.length
//                 console.log(maxIndex)
//                 testContainer.push(height[i] * maxIndex)
//                 height.shift()
//                 break
//             }
//         }
        
//         count++
//     }
//     console.log(testContainer)


// [1,8,6,2,5,4,8,3,7]

// let containerLeft = height.indexOf(Math.max(...height))
//     let newContainer = Array.from(height)
//     let maxVolume = 0
//     while(newContainer[newContainer.length - 1] !== 0) {
//         let containerRight = height.lastIndexOf(Math.max(...newContainer))
//         let containerWidth = containerRight - containerLeft
//         let containerHeight = Math.min(...[height[containerLeft],height[containerRight]])
//         let containerVolume = containerWidth * containerHeight
//         if(maxVolume < containerVolume) {
//             maxVolume = containerVolume
//         }
//         newContainer[containerLeft] = 0
//         newContainer[containerRight] = 0
//     }
//     console.log(maxVolume)

// let maxVolume = 0
//     let highestStart = height.indexOf(Math.max(...height))
//     let count = 0
//     while(count < 2) {
//         let highestEnd = height.lastIndexOf(Math.max(...height))
//         let containerWidth = highestEnd - highestStart
//         let containerHeight = Math.min(...[height[highestStart],height[highestEnd]])
//         console.log(containerHeight)
//         let containerVolume = containerWidth * containerHeight
//         // console.log(containerVolume)
//         if(maxVolume < containerVolume) {
//             maxVolume = containerVolume
//         }
//         height[highestEnd] = 0
//         height[highestStart] = 0
//         if(highestEnd === height.length - 1) break
//         // console.log(height)
//         count++
//     }
//     console.log(maxVolume)