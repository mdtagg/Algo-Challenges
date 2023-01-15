function number9(n){
    while(n.toString().split('').pop() !== '9') {
        n--
    }
    console.log(n)
    let multiplier = 1
    n = n.toString().split('').map(item => parseInt(item)).reverse()
    console.log(n)
    let numNines = 0
    let lastNumber = 0
    let test = n.map(number => {
        let item = number * multiplier
        console.log(item)
        if(item === 9) {
            numNines += 1
        }else {
            numNines += item / multiplier
        }
        console.log(item,multiplier)
        multiplier *= 10
        
    })
    console.log(numNines)
}

number9(100)

//10 nines for 90, 9 nines for 90 thru 9, 1 nine for 9 in the ones 

// // let multiplier = 1
//     // n = n.toString().split('').reverse().map(item => parseInt(item))
//     // let test = n.map(item => {
        
//     //     multiplier *= 10
//     // });
//     // console.log(n);
//     let nines = []
//     for(let i = 1; i <= n; i++){
//         nines.push(i)
//     }
//     // console.log(nines)
//     // let numNines = 0
//     // for(let i = 0;i < nines.length;i++){
//     //     if(nines[i].toString().split('').includes('9')) {
//     //         numNines += 1
//     //     }
//     // }
//     console.log(nines)
//     // console.log(numNines)

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