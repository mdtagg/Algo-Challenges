function fortune(f0, p, c0, n, i) {
    let total = f0
    let livingAmt = c0
    let interest = p * .01
    let inflation = i * .01
    while(n > 1) {
        total = Math.floor(total + (interest * total) - c0)
        c0 += Math.floor((c0 * inflation))
        console.log(total)
        n--
    }
    console.log(total < 0 ? false : true)
    // console.log(true)
}

fortune(10000, 0, 10000, 2, 0)