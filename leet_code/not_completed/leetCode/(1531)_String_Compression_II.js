var getLengthOfOptimalCompression = function (s, k) {
    if (s.length <= k) return 0;
    const hash = Array.from({ length: s.length }, (_) => new Array(k + 1));
  
    const dfs = (idx, k) => {
      if (k + idx >= s.length) return 0;
      if (k < 0) return Infinity;
      if (hash[idx][k] != undefined) return hash[idx][k];
      let res = dfs(idx + 1, k - 1);
      let diff = 0;
      let same = 0;
      for (let i = idx; i < s.length && k - diff >= 0; i++) {
        s[i] == s[idx] ? same++ : diff++;
        const length =
          same <= 1 ? 1 : Math.floor(Math.log(same) / Math.log(10)) + 2;
        res = Math.min(res, length + dfs(i + 1, k - diff));
      }
      return (hash[idx][k] = res);
    };
    return dfs(0, k);
  };

getLengthOfOptimalCompression("aabcaaa",2)


/*

var getLengthOfOptimalCompression = function (s, k) {
    if (s.length <= k) return 0;
    const hash = Array.from({ length: s.length }, (_) => new Array(k + 1));
  
    const dfs = (idx, k) => {
      if (k + idx >= s.length) return 0;
      if (k < 0) return Infinity;
      if (hash[idx][k] != undefined) return hash[idx][k];
      let res = dfs(idx + 1, k - 1);
      let diff = 0;
      let same = 0;
      for (let i = idx; i < s.length && k - diff >= 0; i++) {
        s[i] == s[idx] ? same++ : diff++;
        const length =
          same <= 1 ? 1 : Math.floor(Math.log(same) / Math.log(10)) + 2;
        res = Math.min(res, length + dfs(i + 1, k - diff));
      }
      return (hash[idx][k] = res);
    };
    return dfs(0, k);
  };


var getLengthOfOptimalCompression = function(s, k) {
    const len = s.length;
    let dp = {};
    function dfs(i, j) {
      if (i === len) return 0;
          const ik = [i, j] + '';
      if (ik in dp) return dp[ik];
          let r = -1;
      if (j) r = dfs(i + 1, j - 1);
          let ii = i + 1;
          let c = 1;
      while (ii <= len) {
        let t = dfs(ii, j) + 1;
        if (c >= 100) {
              t += 3;
          } 
        else if (c >= 10) {
              t += 2;
          }
        else if (c > 1) {
              t += 1;
          } 
        if (r < 0 || r > t) r = t;
        if (ii == len) break;
        if (s[ii] == s[i]) c += 1;
        else {
          if (j == 0) break;
          j -= 1;
        }
        ii += 1;
      }
      dp[ik] = r;
      return r;
    }
    return dfs(0, k);
  };


const getLengthOfOptimalCompression = (s,k) => {

    let left = 0
    let right = 1
    let compressedArr = []

    while(left < s.length) {
        let numOfLetters = 0
        let options = []
        if(s[left] !== s[right]) {
            numOfLetters = right - left
            left = right
        }
        
        if(numOfLetters > 0) {
            if(numOfLetters === 1) {
                options.push(1)
            }else {
                options.push(numOfLetters - k)
            }
            if(numOfLetters > 1) {
                options.push(numOfLetters.length + 1)
            }
            options.push(numOfLetters)
        }
        right++
    }
}

const getLengthOfOptimalCompression = (s,k) => {

    let left = 0
    let right = 1
    let compressedArr = []

    while(left < s.length) {
        let numOfLetters = 0
        let options = []
        if(s[left] !== s[right]) {
            numOfLetters = right - left
            left = right
        }

        let test = numOfLetters - k
        if(test === 1) options.push(1);
        else if(numOfLetters > 9) options.push(numOfLetters.length + 1)
        if(numOfLetters > 0 && numOfLetters < 9) {
            options.push(2)
        }
        if(test > 0) {
            options.push(numOfLetters)
            compressedArr.push(options)
        }
        
        right++
    }
}
*/
// [[1,2],1,[1,2],1]
// [2,1,2,1]
/*
let left = 0
    let right = 1
    let compressedArr = []
    let numOfLetters = 1

    while(left < s.length) {
        if(s[left] == s[right]) {
            numOfLetters++
        }else {
            
            left = right 
            if(numOfLetters.length > k) compressedArr.push(numLetters.length);

            numOfLetters = 1
        }
        right++
    }
*/