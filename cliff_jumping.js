function evaluateJump(setting) {
    let settingArray = setting.split('\n')
    .map(item => item.trim())
    .filter(item => item !== '.......')
    
    let startLevel = settingArray.findIndex(item => item.includes('Y'))
    let startPosition = settingArray[startLevel].indexOf('Y')

    let jumpOptions = []
    startPosition += 2

while(jumpOptions.length < 4) {
    let jumpOption = []
    for(let i = 1;i < settingArray.length;i++) {
        for(let j = startPosition;j > settingArray[i].length - 4;j--) {
            console.log(j)
            if(settingArray[i][j] === 'Y') {
                continue
            }
            jumpOption.push(settingArray[i][j])
        }
        jumpOptions.push(jumpOption)
    }
}
    console.log(jumpOptions)
    console.log(settingArray)

}

  evaluateJump(
 `.......
  ..Y....                 
  ###....                   
  ###....                   
  ###....`)

  // let newArray = []
    // for(let i = 0;i < settingArray.length;i++) {
    //     let split = settingArray[i].split('')
    //     split.splice(startPosition,1,'Y').join('')
    //     newArray.push(split.join(''))
    // }

     // newArray = newArray.map(item => item.split('Y'))
    // console.log(newArray)

  
  // let jumpOptions = []
  // for(let i = 0;i < settingArray.length;i++) {
  //     let leftOptions = settingArray[i].slice(0,startPosition)
  //     let rightOptions = settingArray[i].split('').splice(startPosition + 1,2)
  //     jumpOptions.push(leftOptions)
  //     jumpOptions.push(rightOptions.join(''))
  // }
  // console.log(jumpOptions)
  // // console.log(settingArray)

  //     let leftOptions = []
//     let rightOptions = []
//     let jumpOptions = settingArray[startLevel].split('Y')

//     for(let i = startLevel;i < settingArray.length;i++) {
//       leftOptions.push(settingArray[i].slice(0,jumpOptions[0].length))
//       rightOptions.push(settingArray[i].split('').splice(startPosition + 1,2).join(''))
//   }
//   console.log(leftOptions)
//   console.log(rightOptions)

//   if(settingArray[currentLevel].split('Y')[0][0] !== '.' || 
//         settingArray[startLevel].split('Y')[1][0] !== '.') {
//             console.log('false')
//             break
//         }

  

  // // let leftJumpOptions = []
  // // let rightJumpOptions = []
  // // for(let i = startLevel;i < settingArray.length;i++) {
  // //     let leftJump = []
  // //     let rightJump = []
  // //     for(let j = startPosition - 1; j >= 0;j--) {
  // //         leftJump.push(settingArray[i][j])
  // //     }
  // //     leftJumpOptions.push(leftJump)
  // //     for(let k = startPosition + 1; k < startPosition + 3;k++) {
  // //         rightJump.push(settingArray[i][k])
  // //     }
  // //     rightJumpOptions.push(rightJump)
  // // }
  // // console.log(leftJumpOptions)
  // // console.log(rightJumpOptions)



  // let jumpOptions = []
    // // let jumpLeft = []
    // // let jumpRight = []

    // for(let i = startLevel;i < settingArray.length;i++) {
    //     // jumpRightLevel = []
    //     let jumpOption = []
    //     for(let j = startPosition + 1;j < settingArray[i].length - startPosition;j++) {
    //         jumpRightLevel.push(settingArray[i][j])
    //     }
    //     jumpRight.push(jumpRightLevel)
    // }
    // console.log(jumpRight)
    // if(jumpRight[0][0] !== '.') {
    //     jumpRight = []
    // }

