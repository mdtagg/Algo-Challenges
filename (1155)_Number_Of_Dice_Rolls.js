const MOD = 1e9 +7;
var numRollsToTarget = function(n, k, target) {
	
};
	
numRollsToTarget(3,6,7)

/*

const MOD = 1e9 +7;
var numRollsToTarget = function(n, k, target) {
	const memo = Array(n + 1).fill(-1).map(x => Array(target + 1).fill(-1));
	return helper(n, k, target, memo);
};
		
var helper = function(n, k, target, memo) {
	if (n === 0 || target < 0)
		return target === 0 ? 1 : 0;
	
	if (memo[n][target] !== -1)
			return memo[n][target];

	let ways = 0;

	for (let i = 1; i <= k; i++)
		ways = (ways + helper(n - 1, k, target - i, memo)) % MOD;

	return memo[n][target] = ways;
};


[1,1,5],[1,5,1],[5,1,1],[1,2,4],[1,4,2],[4,1,2],[4,2,1],[2,1,4],[2,4,1],[1,3,3],[3,1,3],[3,3,1],[2,2,3],[2,3,2],[3,2,2]

var numRollsToTarget = function(n, k, target) {
    if (n > target || n * k < target) return 0 
    let arr = new Array(k).fill(1), depth = n 
    while (depth > 1) { 
        tempArr = [] 
        for (let i = 0; i < arr.length + k - 1 && i <= target - n; i++) {

            let one = tempArr[i - 1] || 0
            let two = arr[i] || 0
            let three = arr[i - k] || 0

            let val = ((tempArr[i - 1] || 0) + (arr[i] || 0) - (arr[i - k] || 0)) % (1000000007) 
            tempArr.push(val)
        }
        arr = tempArr
        depth -= 1
    }
    let ans = arr[target - n] 
    return ans < 0 ? ans + 1000000007 : ans
};
*/