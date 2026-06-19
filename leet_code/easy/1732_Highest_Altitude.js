


var largestAltitude = function(gain) {
    let res = 0;
    let count = 0;
    let n = gain.length;
    for(let i = 0;i < n;i++) {
        count += gain[i];
        res = Math.max(res,count);
    }
    return res;
};