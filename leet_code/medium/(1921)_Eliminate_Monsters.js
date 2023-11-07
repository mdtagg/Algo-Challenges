
const eliminateMaximum = (speed,distance) => {
    let output = 1
    let cycles = speed.map((number,index) => number / distance[index])
    cycles.sort((a,b) => a - b)
    for(let i = 1;i < cycles.length;i++) {
        cycles[i] -= output
        if(cycles[i] > 0) output++;
        else return output;
    }
    return output
}

eliminateMaximum([1,1,2,3],[1,1,1,1])