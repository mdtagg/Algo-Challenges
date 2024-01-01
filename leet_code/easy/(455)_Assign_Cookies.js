

const findContentChildren = (g,s) => {

    let result = 0
    g = g.sort((a,b) => a - b)
    s = s.sort((a,b) => a - b)

    while(g.length && s.length) {
        
        if(s[0] >= g[0]) {
            result++
            g.shift()
            s.shift()
        }else {
            s.shift()
        }
    }
    return result
}

findContentChildren([1,3,2],[1,1])

/*
const findContentChildren = (g,s) => {

    let result = 0
    g = g.sort((a,b) => a - b)
    s = s.sort((a,b) => a - b)

    while(g.length && s.length) {
        
        if(s[0] >= g[0]) {
            result++
            g.shift()
            s.shift()
        }else {
            s.shift()
        }
    }
    return result
}

const findContentChildren = (g,s) => {
    let result = 0
    g = g.sort((a,b) => a - b)
    s = s.sort((a,b) => a - b)

    while(g.length && s.length) {
        
        if(s[0] >= g[0]) {
            result++
            g.shift()
            s.shift()
        }else return result
    }
    return result
}
*/