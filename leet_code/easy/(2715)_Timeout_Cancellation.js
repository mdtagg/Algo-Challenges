

const cancellable = (fn,args,t) => {

    const timer = setTimeout(() => {
        fn(...args)
    },t)

    const cancelFn = () => {
        clearTimeout(timer)
    }
    return cancelFn
}

function one(x) {
    return x * 5
}

const args = [2]

const t = 20

cancellable(one,args,t)