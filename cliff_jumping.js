function evaluateJump(setting) {
    let validJumps = [
      '..#',
      '...#',
      '..~',
      '...~',
      '....~',
      '..~~',
      '...~~',
      '....~~',
      '.....~~',
      '......~~',
      '.......~~'
    ]
    let validMoves = []
    setting = setting.split('\n').map(row => row.trim())
    while(!setting[0].includes('Y')) {
      setting.splice(0,1)
    }
    console.log(setting)
    let startPosition = setting[0].indexOf('Y')
    let possibleJumps = [
      startPosition - 2,
      startPosition - 1,
      startPosition + 1,
      startPosition + 2
    ].filter(item => item >= 0 && item <= setting[0].length - 1)
    // console.log(possibleJumps)

    possibleJumps = possibleJumps.map(item => {
      let jumpProfile = []
      for(let i = 0;i < setting.length;i++) {
        jumpProfile.push(setting[i][item])
      }
      return jumpProfile
    })
    // console.log(possibleJumps)
    .map((item,index) => {
      let possibles = []
      for(let i = 0;i < item.length;i++) {
        possibles.push(item[i])
        if(validJumps.includes(possibles.join('')) && item.includes('~')) {
          validMoves.push([i,index - 1])
          break
        }
        else if(validJumps.includes(possibles.join(''))) {
          validMoves.push([i - 1,index - 1])
        }
      }
    })
    console.log(validMoves)
    //problem here has to do with the index not being adjusted for when the start position is not above 2
    
    
}

  evaluateJump(
   `.Y.....                   
    ###....                   
    ###....   
    ###....
    ###....
    ###....
    ###~~~~
    ###~~~~`)

   // if(setting[0].includes('#')) {
    //   let firstHash = setting[0][startPosition - 1]
    //   // let secondHash = setting[0][startPosition + 1]

    //   firstHash === '#' && secondHash === '#' ? possibleJumps = [] :
    //   firstHash === '#' ? possibleJumps.splice(startPosition - 2,2) :
    //   possibleJumps.splice(startPosition,2)
      
    //   // let firstHash = setting[0].indexOf('#')
    //   // let lastHash = setting[0].lastIndexOf('#')
    //   // if(firstHash === startPosition - 1 && lastHash === startPosition + 1) {
    //   //   possibleJumps = []
    //   // }else if(firstHash === startPosition - 1) {
    //   //   possibleJumps.splice(startPosition - 2,2)
    //   // }else if(lastHash === startPosition + 1) {
    //   //   possibleJumps.splice(startPosition,2)
    //   // }
    // }
     
    // // console.log(possibleJumps)

  // let settingArray = setting.split('\n')
  //   .map(item => item.trim())
  //   .filter(item => item !== '.......')
  //   .map(item => item.split(''))
    
  //   let startLevel = settingArray.findIndex(item => item.includes('Y'))
  //   let startPosition = settingArray[startLevel].indexOf('Y')
  //   let jumpOptions = []

  //   for(let i = 0;i < settingArray.length;i++) {
  //       jumpOptions.push(settingArray[i].splice(0,startPosition))
  //       jumpOptions.push(settingArray[i].splice(startPosition + 1,2))
  //   }

  //   for(let j = 0;j < jumpOptions.length;j+=2) {
  //       console.log(jumpOptions[j])
  //   }
  //   for(let k = 1;k < jumpOptions.length;k+=2) {
  //       console.log(jumpOptions[k])
  //   }
    
  //   console.log(jumpOptions)
  //   console.log(settingArray)

//   let jumpOptions = [[],[],[],[]]
//     let count = 0
//     while(count < 4) {
//         for(let i = 0;i < settingArray.length;i++) {
//             if(count === startPosition) {
//                 continue
//             }else {
//                 jumpOptions[count].push(settingArray[i][count])
//             }
//         }
//         count++
//     }
//     console.log(settingArray)
//     console.log(jumpOptions)

//   let jumpOptions = []

//     while(jumpOptions[3].length < 4) {
//         let jumpOption = []
//         for(let i = 0;i < settingArray.length;i++) {
            
//         }
//     }

//   while(jumpOption.length < 4) {
//     if(settingArray[i][0] === 'Y') {
//         continue
//     }else {
//         jumpOption.push(settingArray[i].splice(0,1))
//     }
// }
// jumpOptions.push(jumpOption)


 // let jumpAreas = settingArray[0].split('Y').map(item => item.length)
    // console.log(jumpAreas)

    // for(let i = 0;i < settingArray.length;i++) {
    //     for(let j = startPosition + 2;j > 1;j--) {
    //         if(settingArray[i][j] === 'Y') {
    //             continue
    //         }
    //         console.log(settingArray[i][j])
    //     }
    // }

//   let jumpOptions = []
//   startPosition += 2

// while(jumpOptions.length < 4) {
//   let jumpOption = []
//   for(let i = 1;i < settingArray.length;i++) {
//       for(let j = startPosition;j > settingArray[i].length - 4;j--) {
//           console.log(j)
//           if(settingArray[i][j] === 'Y') {
//               continue
//           }
//           jumpOption.push(settingArray[i][j])
//       }
//       jumpOptions.push(jumpOption)
//   }
// }
//   console.log(jumpOptions)

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

