

var numDecodings = function(s) {

    let sArr = new Array(s.length + 1).fill(0)
    sArr[s.length] = 1

    for(let i = s.length - 1;i >= 0;i--) {
        if(s[i] == 0) continue
        sArr[i] = sArr[i + 1]
        if(s[i] + s[i + 1] <= 26) {
            sArr[i] += sArr[i + 2]
        }
    }
    return sArr[0]
};

console.log(numDecodings("11106"))

/* 
var numDecodings = function(s) {
    const dp = new Array(s.length +1).fill(0);
    dp[s.length] = 1;

    for(let i = s.length -1; i >= 0 ; i--){
        if(s[i] == 0) continue;
        dp[i]  = dp[i+1];
        let test = s[i] + s[i + 1]
        console.log(test)
        if(s[i] + s[i+1] <= 26) {
            dp[i] += dp[i+2];
        }
    }

    return dp[0];
};


const numDecodings = (nums) => {
    let result = 0
    let testArr = [[]]
    let zeroFail = false
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] > 2 && nums[i + 1] == 0) zeroFail = true;
        testArr[0].push(nums[i])
        checkCombo()
        
    }
}

function checkCombo() {
        let combo = parseInt(nums[i] + nums[i + 1])
        if(combo < 26) {
            testArr.push([combo])
        }
        for(let j = i + 2;j < nums.length;j+=2) {
            let newCombo = parseInt(nums[j] + nums[j + 1])
            if(newCombo > 26) {
                if(nums[j] == 0) {
                    testArr.pop()
                    break
                }
                testArr[testArr.length - 1].push(nums[j])
                j--
            }
            else {

            }
        }
    
}

[2],[22,61],[22,6,17],[22,6,1,7]
[2,[22,61],2,[26,17,8,],6,[61],1,[17,8],7,[78],8,[80],0


"226891314"

2,2,6,8,9,1,3,1,4
22,6,8,9,13,14
2,26,8,9,13,14
2,26,8,9,1,3,14
2,26,8,9,1,2,1,4

let zeroFail = false
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] == 0) {
            zeroFail = true;
            continue
        }
        
    }

const numDecodings = (nums) => {
    let result = 0
    let zeroFail = false
    for(let i = 1;i < nums.length -1;i++) {
        if(nums[i] == 0) {
            if(nums[i + 1] == 0) zeroFail = true
            continue
        }
        let combo = parseInt(nums[i] + nums[i + 1])
        if(combo <= 26) result++
    }
    return zeroFail ? result - 1 : result + 1
}


*/