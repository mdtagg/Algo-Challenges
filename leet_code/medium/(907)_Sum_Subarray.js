
const subSubarrayMins = (arr) => {

    let stack = []
    let result = 0
    arr.unshift(0)
    arr.push(0)

    for(let i = 0;i < arr.length;i++) {
        while(stack.length && arr[stack[stack.length - 1]] > arr[i]) {

            let j = stack.pop()
            let k = stack[stack.length - 1]

            result += ((arr[j] * (i - j) * (j - k)) % 1000000007)
        }
        stack.push(i)
    }
    return result
};

subSubarrayMins([11,81,94,43,3])

/*
EXPLANATION

We need to determine how many numbers are less than a given number is less than 

[11,81,94,43,3] for example, starting at 94. Since 94 is not greater than 
any numbers in the set the result is increased by 94 one time. 
Next is 81 and its less than one number (94) so the result is increased
by 81 * 2 (the amount of numbers its less than and itself)
43 * 3 and so on 

var subSubarrayMins = function(arr) {
    const MOD = 1000000007;
        let stack = [];
        let result = 0;
        arr.unshift(0);
        arr.push(0);
    
        for (let i = 0; i < arr.length; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
                let j = stack.pop();
                let k = stack[stack.length - 1];
                result = (result + arr[j] * (i - j) * (j - k)) % MOD;
            }
            stack.push(i);
        }
        return result;
    
    };

const subSubarrayMins = (arr) => {
    // arr = arr.sort((a,b) => a - b)
    let sum = 0
    let left = 0
    let right = arr.length

    while(left < right) {
        let newArr = arr.slice(left)
        sum += newArr[left]
        sum += Math.min(...newArr) * (newArr.length - 1)
        left++
    }
    return sum
}

var sumSubarrayMins = function(arr) {
    const length = arr.length;
    const left = new Array(length).fill(-1);
    const right = new Array(length).fill(length);
    const stack = [];

    for (let i = 0; i < length; ++i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    stack.length = 0;

    for (let i = length - 1; i >= 0; --i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let sum = 0;

    for (let i = 0; i < length; ++i) {
        sum += (i - left[i]) * (right[i] - i) * arr[i] % (1e9 + 7);
        sum %= 1e9 + 7;
    }

    return sum;
};
*/