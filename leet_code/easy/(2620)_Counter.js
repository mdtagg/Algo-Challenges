

const createCounter = (n) => {
    return function() {
        return n++
    }
}

createCounter(10)