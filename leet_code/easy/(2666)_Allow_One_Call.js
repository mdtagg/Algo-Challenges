

const once = (fn) => {
    let once = false
    return function(...args) {
        if(!once) {
            once = true 
            return fn(...args)
        }
    }
}

const fn = (a,b,c) => (a + b + c)

let onceFn = once(fn)
onceFn(1,2,3)
onceFn(4,5,6)