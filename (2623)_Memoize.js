

const memoize = (fn) => {

    let fnMap = {}

    return function(...args) {

        const fnStr = fn.toString()
        const argus = args.join(',')
        
        if(fnMap[fnStr] === undefined) fnMap[fnStr] = {};
        if(fnMap[fnStr][argus] === undefined) fnMap[fnStr][argus] = fn(...args);
        return fnMap[fnStr][argus]
    }
}

let callCount = 0

const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})

memoizedFn(2, 2) // 5
memoizedFn(2, 2) // 5

/*


const memoize = (fn) => {

    let fnMap = {
        "sum": {},
        "fib": {},
        "factorial":{}
    }
    return function(...args) {
        let fnStr = fn.toString()
        console.log(fnMap)
        if(args.length > 1) {
            const argus = args.join('').toString()
            if(!fnMap["sum"][argus]) {
                fnMap["sum"][argus] = fn(...args)
            }
            return fnMap["sum"][argus]
        }

    }
}
*/