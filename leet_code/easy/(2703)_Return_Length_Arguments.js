

const argumentsLength = (...args) => {
    let result = 0
    for(let i = 0;i < args.length;i++) {
        result++
    }
    return result
}

argumentsLength({},null,"3")