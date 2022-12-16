function lowestBase(s) {
        for(let i = 2;i < s;i++) {
            let string = s.toString(i).split('')
            if(string.every(number => number === '1')) {
                console.log(i)
                return i
            }else if(i === 36) {
                console.log(false)
                return false
            }
        }
}

lowestBase(1000002)