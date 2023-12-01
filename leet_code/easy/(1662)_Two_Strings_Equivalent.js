

const arrayStringsAreEqual = (word1,word2) => {
    return word1.join('') === word2.join('') ? true : false
}

console.log(arrayStringsAreEqual(["ab","c"],["a","bc"]))

/*
ORIGINAL SOLUTION 

const arrayStringsAreEqual = (word1,word2) => {
    return word1.join('') === word2.join('') ? true : false
}

ALTERNATIVE SOLUTION 

let test1 = ""
    let test2 = ""

    for(let i = 0;i < word1.length;i++) {
        test1 += word1[i]
    }
    
    for(let i = 0;i < word2.length;i++) {
        test2 += word2[i]
    }

    return test1 === test2 ? true : false

*/