

const trap = (height) => {
    let left = 0
    let right = left + 1
    let volume = 0
    let volumeAdjust = 0

    while(height[left] <= height[left + 1]) {
        left++
        right++
    }
    
    while(left < height.length - 2) {

        const diff = right - left - 1

        console.log({diff,left,right,volume,volumeAdjust})
        console.log(height[left],height[right])
        
        if((diff === 0 || height[right] < height[left]) && right !== height.length - 1) {
            volumeAdjust += height[right]
        }
    
        if(diff !== 0 && height[right] >= height[left]) {
            volume += height[left] * diff
            volume -= volumeAdjust 
            volumeAdjust = 0
            left = right
            console.log({volumeAdjust})
        }
        
        if(right === height.length - 1 && height[left] > height[right]) {
            
            height[left]--
            if(height[left] === height[left + 1]) {
                left++
                volumeAdjust -= height[left]
            }
        }else {
            right++
        }
    }
    console.log({volume})
}

trap([0,1,0,2,1,0,1,3,2,1,2,1])

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