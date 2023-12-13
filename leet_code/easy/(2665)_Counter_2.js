

const createCounter = (init) => {
    
    let curVal = init

    return {
        increment:() => ++curVal,

        decrement:() => --curVal,

        reset:() => {
            curVal = init
            return curVal
        }
    }
}

const count = createCounter(5)
count.increment()
count.decrement()
// console.log(count)
count.reset()