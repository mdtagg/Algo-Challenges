

const getLastMoment = (n,left,right) => {
    let max = 0;
    for (const l of left) max = Math.max(max, l);
    for (const r of right) max = Math.max(max, n - r);
    return max; 
}

getLastMoment(4,[4,3],[12])


/*
OG Solution

let output = 0
    left.sort((a,b) => b - a)
    right.sort((a,b) => a - b)
    while(left.length || right.length) {
        left = left.map(position => position - 1)
        right = right.map(position => position + 1)
        if(left[left.length - 1] < 0) left.pop();
        if(right[right.length - 1] > n) right.pop();
        output++
    }
    return output - 1


CODE GRAVEYARD

left = left.map(position => position - 1)
        right = right.map(position => position + 1)
        if(left[left.length - 1] < 0) left.pop();
        if(right[0] > n) right.shift();
        if(left[left.length - 1] === right[right.length - 1]) {
            let temp = left.pop()
            left.push(right.pop())
            right.push(temp)
        }


for(let i = 0;i < left.length;i++) {
            if(left[i] < 0) {
                left.splice(i,1)

            }
        }
        for(let j = 0;j < right.length;j++) {
            if(right[i] < 0) {
                right.splice(i,1)
            }
        }
*/