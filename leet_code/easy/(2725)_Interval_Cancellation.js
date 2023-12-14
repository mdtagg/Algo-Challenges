

const cancellable = (fn,args,t) => {

    fn(...args)
    
    const interval = setInterval(() => {
        fn(...args)
    },t)

    return function cancelFn() {
        clearTimeout(interval)
    }

}

const fn = (x) => {
    return x * 2
}

const args = [4]

const t = 35

cancellable(fn,args,t)