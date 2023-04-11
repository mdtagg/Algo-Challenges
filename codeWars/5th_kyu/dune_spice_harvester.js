function harvesterRescue(data){
    let xDiff = (data.worm[0][0] - data.harvester[0])**2
    let yDiff = (data.worm[0][1] - data.harvester[1])**2
    console.log(yDiff)
    let hWDist = Math.sqrt(xDiff + yDiff)
    
    console.log('harvester-worm: ',hWDist)
    let xDiffC = (data.harvester[0] - data.carryall[0][0])**2
    let yDiffC = (data.harvester[1] - data.carryall[0][1])**2
    let hCDist = Math.sqrt(xDiffC + yDiffC)
    console.log('harvester-carryall: ',hCDist)

    console.log(hWDist / data.worm[1])
    console.log(hCDist / data.carryall[1] + 1)

    if(hWDist / data.worm[1] > hCDist / data.carryall[1] + 1) {
        console.log("The spice must flow! Rescue the harvester!")
        
    }else {
        console.log("Damn the spice! I'll rescue the miners!")
    }
  }

  let data1 = {harvester: [345,600], worm: [[200,100],25], carryall: [[350,200],32]}
  let data2 = {harvester: [200,400], worm: [[200,0],40], carryall: [[500,100],45]}
  let data3 = {harvester: [850,125], worm: [[80,650],20], carryall: [[80,600],20]}
  let data4 = {harvester: [0,320], worm: [[250,680],42], carryall: [[550,790],58]}
  let data5 = {harvester: [0,0], worm: [[0,600],50], carryall: [[0,880],80]}

  harvesterRescue(data1)

//   + data.worm[1])

  // while(hWDist >= 0 && hCDist >= 0) {
    //     hWDist -= data.worm[1]
    //     hCDist -= data.carryall[1]
    //     console.log(hWDist)
    //     console.log(hCDist)
    //     if(hWDist <= 0 && hWDist < hCDist) {
    //         console.log("Damn the spice! I'll rescue the miners!")
    //     }else if(hCDist <= 0 && hCDist < hWDist) {
    //         console.log("The spice must flow! Rescue the harvester!")
    //     }
    // }