

const isHappy = (n) => {
    n = n.toString()
    const nSet = new Set()
    while(n !== "1") {

        let newNum = 0
        for(let i = 0;i < n.length;i++) {
            newNum += Math.pow(n[i],2)
        }
        n = newNum.toString()
        if(n.length >= 9 || nSet.has(n)) return false
        nSet.add(n)
    }
    return true
}

isHappy(2)