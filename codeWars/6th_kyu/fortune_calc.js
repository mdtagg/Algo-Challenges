function fortune(f0, p, c0, n, i) {
    let interest = p * .01
    let inflation = i * .01
    while(n > 1) {
        f0 = Math.floor(f0 + (interest * f0) - c0)
        c0 += Math.floor((c0 * inflation))
        console.log(f0)
        n--
    }
    console.log(f0 < 0 ? false : true)
}

fortune(10000, 0, 10000, 2, 0)