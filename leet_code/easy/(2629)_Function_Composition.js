

const compose = (fns) => {
   
    return function(x) {
        
        for(let i = fns.length - 1;i >= 0;i--) {
            x = fns[i](x)
        }
        return x
    }
}

function one(int) {
    return int + 1
}

function two(int) {
    return int + 2
}

function three(int) {
    return int + 3
}

const fn = compose([x => x + 1, x => 2 * x])   
console.log(fn(4))