var maxArea = function(height) {
    
    let containerLeft = height.indexOf(Math.max(...height))
    let newContainer = Array.from(height)
    let maxVolume = 0
    let count = 0
    while(newContainer[newContainer.length - 1] !== 0) {
        let containerRight = height.lastIndexOf(Math.max(...newContainer))
        let containerWidth = containerRight - containerLeft
        let containerHeight = Math.min(...[height[containerLeft],height[containerRight]])
        let containerVolume = containerWidth * containerHeight
        if(maxVolume < containerVolume) {
            maxVolume = containerVolume
        }
        newContainer[containerLeft] = 0
        newContainer[containerRight] = 0
        count++
        // break
    }
    console.log(maxVolume)
};

maxArea([1,8,6,2,5,4,8,3,7,6])

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