

const angleClock = function(hour, minutes) {
    const conversionTable = new Array(11).fill(0);
    conversionTable[11] = 0;
    let count = 30;
    for(let i = 0;i < 11;i++) {
      conversionTable[i] = count;
      count += 30
    }
    const minuteAngle = minutes / 15 * 90;
    const hourAngle = conversionTable[hour - 1] + 30 * (minutes/60);
    const firstAngle = Math.abs(minuteAngle - hourAngle);
    const secondAngle = Math.abs(360 - firstAngle);
    if(firstAngle < secondAngle) return firstAngle;
    return secondAngle;
};

const inputs = [
  [12,30],
  [3,30],
  [3,15]
]

angleClock(...inputs[2])