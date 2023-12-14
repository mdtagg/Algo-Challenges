

const canCompleteCircuit = (gas,cost) => {

    for(let i = 0;i < gas.length;i++) {

        let goal = gas.length
        let startIdx = i
        let idx = i
        let gasLeft = 0

        while(goal > 0) {

            if(gasLeft <= 0 && idx !== startIdx) break;

            gasLeft = gasLeft + gas[idx] - cost[idx]

            if(idx === startIdx - 1) return gasLeft >= 0 ? startIdx : -1;
            
            idx++
            if(idx === gas.length) idx = 0;

            goal--
            if(goal === 0 && gasLeft >= 0) return startIdx
        }
    }
    return -1
}


canCompleteCircuit([4],[5])

/*
const canCompleteCircuit = (gas,cost) => {

    for(let i = 0;i < gas.length;i++) {

        let goal = gas.length
        let pass = false
        let idx = i
        let gasLeft = 0

        while(goal > 0) {
            
            gasLeft = gasLeft + gas[idx] - cost[idx]
            idx++
            if(idx === gas.length) {
                idx = 0;
                pass = true;
            }
            goal--
        }
        if(goal === 0) return i
    }
    return -1
}
*/