

const earliestFinishTime = (landStartTime, landDuration, waterStartTime, waterDuration) => {
  
  

}

const inputs = [
  [[2,8],[4,1],[6],[3]]
]

earliestFinishTime(...inputs[0])

/*
 let n = landStartTime.length;
  let m = waterStartTime.length;
  let rideMaxLen = Math.max(n,m)

  let landIdx = 0;
  let waterIdx = 0;
  let landCount = 0;
  let waterCount = 0;
  let res = 0;

  while(landIdx > landStartTime.length || waterIdx > waterStartTime.length) {
    let land = landStartTime[landIdx] + landDuration[landIdx];
    let water = waterStartTime[waterIdx] + waterDuration[waterIdx];

    if(waterCount > landCount) return waterCount;
    if(landCount > waterCount) return landCount;

    if(landIdx < landStartTime.length) landIdx++;
    waterIdx++;
  }
*/