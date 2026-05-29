const numberOfSpecialChars = function(word) {
    let res = 0
    let arr = new Array(122).fill(0);
    let dups = new Set()

    for(let i = 0;i < word.length;i++) {
       const charCode = word[i].charCodeAt();
       const lower = word[i].toLowerCase();
       const upper = word[i].toUpperCase();
       arr[charCode] = word[i];
       if((arr[charCode + 32] === lower || arr[charCode - 32] === upper) && !dups.has(lower)) {
        res++;
        dups.add(lower);
       }
    }
    return res
};

numberOfSpecialChars("aaAbcBC")