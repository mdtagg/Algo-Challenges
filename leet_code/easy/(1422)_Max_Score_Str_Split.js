

const maxScore = (str) => {
    let prefix = 0
    let max = 0

    for(let i = 1;i < str.length;i++) {

        if(str[i - 1] == 0) prefix++
        let suffix = 0

        for(let j = i;j < str.length;j++) {
            if(str[j] == 1) suffix++
        }

        if(prefix + suffix > max) max = prefix + suffix
    }
    return max
}

maxScore("011101")