
const numberOfBeams = (bank) => {
    let totalLasers = 0
    let count = 0

    for(let i = 0;i < bank[0].length;i++) {
        if(bank[0][i] == 1) count++;
    }

    for(let i = 1;i < bank.length;i++) {
        let nextCount = 0
        for(let j = 0;j < bank[i].length;j++) {
            if(bank[i][j] == 1) {
                nextCount++;
            }
        }
        if(nextCount > 0) {
            totalLasers += nextCount * count
            count = nextCount
        }
    }
    return totalLasers
}
numberOfBeams([
    "011001",
    "000000",
    "010100",
    "001000"
])

/*
determine which indicies in every other row are being blocked by another laser

const numberOfBeams = (bank) => {
    let totalLasers = 0

    for(let i = 1;i < bank.length;i+=2) {
        let priorLaser = 0
        let laterLaser = 0
        for(let j = 0;j < bank[i].length;j++) {
            if(i == bank.length - 1) {
                if(bank[i - 1][j] == 1) {
                    priorLaser++
                }
                if(bank[i][j] == 1) {
                    laterLaser++
                }
            }
            else if(bank[i - 1][j] == 1 || bank[i + 1][j] == 1) {
                if(bank[i][j] == 1) continue;
                if(bank[i - 1][j] == 1) priorLaser++
                if(bank[i + 1][j] == 1) {
                    laterLaser++
                }
            }
        }
        totalLasers += priorLaser * laterLaser
    }
    return totalLasers
}
*/