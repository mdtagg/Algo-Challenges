

const strStr = (haystack,needle) => {

    let left = 0
    let right = needle.length

    while(left < haystack.length) {
        if(haystack.slice(left,right) === needle) return left 
        left++
        right++
    }
    return -1
}

strStr("abc","c")