

const jump = (nums) => {

    let moves = 0
    let currCoverage = 0
    let lastJump = 0

    if(nums.length === 1) return 0

    for(let left = 0;left < nums.length;left++) {
        currCoverage = Math.max(currCoverage,nums[left] + left)
        if(left === lastJump) {
            lastJump = currCoverage
            moves++
            if(currCoverage >= nums.length - 1) return moves

        }
    }
};

jump([2,3,1,1,4])

/*

const jump = (nums) => {

    let left = 0
    let right = 0
    let moves = 0

    while(right < nums.length - 1) {
        right = Math.max(nums[left] + left,nums[right] + right)
        moves++
        left++
    }
    return moves
};


var jump = function(nums) {

    const size = nums.length;
    let destination = size-1;
    let curCoverage = 0, lastJumpIdx = 0;
    let timesOfJump = 0;

    if( size == 1 ){
        return 0;
    }

    for( let i = 0 ; i < size ; i++){

        curCoverage = Math.max(curCoverage, i + nums[i] );

        if( i == lastJumpIdx ){

            lastJumpIdx = curCoverage;

            timesOfJump++;

            if( curCoverage >= destination){
                return timesOfJump;
            }
        }
    }

    return timesOfJump;

};


var jump = function(N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
};


const jump = (nums) => {
    
   let i = 0
   let j = i + 1

   while(j < nums.length) {

        let distance = nums.length - j

        if(nums[i] >= distance) return i

        j++
   }
}
*/