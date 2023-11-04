

const buildArray = (target,n) => {
    const output = []
    let j = 0

    for(let i = 1;i <= n;i++) {
        if(target[j] === i) {
            output.push('Push')
            j++
        }else output.push(...['Push','Pop']);
        
        if(j === target.length) return output
    }
    return output
}

console.log(buildArray([1,2],4))

/*
const buildArray = (target,n) => {
    const output = []
    const stream = []
    const newTarget = []
    const match = target.join('')
    for(let i = 1;i <= n;i++) {
        stream.push(i)
    }
    let i = 0
    let j = 0
    while(j < stream.length) {

        newTarget.push(stream[i])
        output.push("Push")

        if(match === newTarget.join('')) return output;
        if(stream[i] !== target[j]) {
            newTarget.pop()
            output.push("Pop")
        }else {
            j++
        }
        i++
    }
    return output
}
*/