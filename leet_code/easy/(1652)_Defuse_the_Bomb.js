


const decrypt = (code,k) => {
  
  const len = code.length;
  const result = new Array(len).fill(0);

  if(k > 0) {
    for(let i = 0;i < len;i++) {
      let sum = 0
      for(let j = k,m = i + 1;j > 0;j--,m++) {
        sum += code[m % len]
      }
      result[i] = sum;
    }
  }
  if(k < 0) {
    let absK = Math.abs(k)
    for(let i = 0;i < len;i++) {
      let sum = 0;
      for(let j = absK,m = len + i + k;j > 0;j--,m++) {
        sum += code[m % (len)]
      }
      result[i] = sum
    }
  }
  return result
}

console.log(decrypt([5,2,2,3,1],3))

/*
var decrypt = function(code, k) {
    const N = code.length;
    const res = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + k; j++) {
                res[i] += code[j % N];
            }
        } else if (k < 0) {
            for (let j = i - 1; j > i - 1 + k; j--) {
                res[i] += code[((j % N) + N) % N];
            }
        }
    }
    
    return res;
};


code.push(...code)
  for(let i = 1;i <= k;i++) {
    sum += code[i]
  }

  result[i] = sum

  for(let i = 1,j = i + k;i < len;i++,j++) {
    sum -= code[i]
    sum += code[++j]
  }

let i = 0;
  let j = 1;
  let sum = 0;

  while(j <= k) {
    sum += code[j++]
  }

  while(i < len) {

    result[i++] = sum;
    if(j < len) {
      sum += code[j]
      sum -= code[j - k]
      j++
    }
    // sum += code[i++];
    // sum -= code[i];
  }


const decrypt = (code,k) => {
  let len = code.length
  let result = new Array(len).fill(0)
  
  if(k === 0) return result;

  for(let i = 0;i < len;i++) {
    let prevNums = code.slice(0,i).reduce((total,amt) => total + amt,0)
    let currNums = code.slice(i + 1).reduce((total,amt) => total + amt,0)

    result[i] = prevNums + currNums;
  }
}


let initialSum = 0;
  for(let i = 1;i <= k;i++) {
    initialSum += code[i]
    result[j] = initialSum
  }

if(k === 0) return new Array(code.length).fill(0)

  if(k > 0) {

    for(let i = 0;i < len;i++) {

      let idx = 1;
      let len = code.length;
      let sum = 0;

      while(k > 0) {
        if(idx >= len) idx = 0;
        sum += code[idx];
        idx++
        k--;
      }
    }
  }
*/