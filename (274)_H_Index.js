

var hIndex = function(citations) {
    const h = citations.length;
    citations.sort ((a,b)=>(a-b));
    
    let i
    for(i = 0;i < h;i++){
        if(h-i<=citations[i]){
            break;
        }
    }
    return h-i;
};
hIndex([11,15])

/*
let h = 0
    nums.sort((a,b) => a - b)

    for(let i = 0;i < nums.length;i++) {
        let slice = nums.slice(i)
        let sum = slice.reduce((total,amt) => total + amt)
        if(sum / nums[i] >= nums[i]) h = nums[i];
    }



const hIndex = (nums) => {

    let h = 0
    let hMap = new Map()
    nums.sort()

    for(let i = 0;i < nums.length;i++) {
        hMap.set(nums[i],(hMap.get(nums[i]) || 0) + 1)
        if(hMap.get(nums[i]) / nums[i] === 1) h = nums[i];
    }
    return h
}
*/