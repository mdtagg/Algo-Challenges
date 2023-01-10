function number9(n){
    // let multiplier = 1
    // n = n.toString().split('').reverse().map(item => parseInt(item))
    // let test = n.map(item => {
        
    //     multiplier *= 10
    // });
    // console.log(n);
    let nines = []
    for(let i = 1; i <= n; i++){
        nines.push(i)
    }
    // console.log(nines)
    // let numNines = 0
    // for(let i = 0;i < nines.length;i++){
    //     if(nines[i].toString().split('').includes('9')) {
    //         numNines += 1
    //     }
    // }
    console.log(nines)
    // console.log(numNines)
}

number9(10000000000)

// 9 = one nine
// 9 - 90 = 
// 90 = 10 nines (90,91 etc) and 8 nines (19 thru 89) 

// const splitN = n.toString().split('').map(item => parseInt(item)).reverse()
//     console.log(splitN)
//     let nines = []
//     let count = 0
//     for(let i = 0;i < splitN.length;i++) {
//         count++
//         nines.push(splitN[i] / 9)
//         count *= 10
//     }