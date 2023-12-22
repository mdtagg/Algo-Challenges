

const maxScore = (str) => {

    let max = 0

    for(let i = 1;i < str.length;i++) {
        
        const prefix = str.substring(0,i).split("").filter((number) => number == 0).length
        const suffix = str.substring(i).split("").filter((number) => number == 1).length 

        if(prefix + suffix > max) max = prefix + suffix
    }
    return max
}

maxScore("011101")