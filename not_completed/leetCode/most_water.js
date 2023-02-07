//this challenge is incorrectly described. Water volume has nothing to do with the challenge, 
// [1,2,1] expects an output of 2, so for this to work there has a to be a hole in the middle wall
//to allow for water to fill the 1 chambers. 


var maxArea = function(height) {
    
    
};

maxArea([1,2,1])


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