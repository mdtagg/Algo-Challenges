function findTheNumberPlate(customerID){
    let plate = ['a','a','a']
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let changeValues = [999,25974,675324]

    while(customerID > changeValues[0] - 1) {
        for(let i = changeValues.length - 1;i >= 0;i--) {
            if(customerID > changeValues[i]) {
                let index = Math.floor(customerID / changeValues[i])
                plate[i] = alphabet[index]
                customerID -= changeValues[i] * index
                console.log(customerID)
            }
        }
    }
    if(customerID < 9) {
        plate.push('00')
    }else if(customerID < 99) {
        plate.push('0')
    }
    plate.push(customerID + 1)
    
    console.log(plate.join(''))
}
    findTheNumberPlate(1487)

    // function findTheNumberPlate(customerID){
    //     let plate = ['a','a','a',,,]
    //     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        
    //     while(customerID > 0) {
    //         let count = 0
    //         if(customerID <= 998) {
    //             if(customerID < 99 && customerID >= 9) {
    //                 plate.push('0')
    //             }else if(customerID < 10) {
    //                 plate.push('00')
    //             }
    //             plate.push(customerID + 1)
    //             break
    //         }else if(customerID > 998 && customerID <= 25973) {
    //             while(customerID > 998) {
    //                 customerID -= 999
    //                 count++
    //             }
    //             plate[0] = alphabet[count]
    //         }
    //         else if(customerID > 25973 && customerID <= 675323) {
    //             while(customerID > 25973) {
    //                 customerID -= 25974
    //                 count++
    //             }
    //             plate[1] = alphabet[count]
    //         }else if(customerID > 675323 && customerID <= 17558423) {
    //             while(customerID > 675323) {
    //                 customerID -= 675324
    //                 count++
    //             }
    //             plate[2] = alphabet[count]
    //         }
            
    //     }
    //     return plate.join('')
    //   }







    
    // while(customerID > 0) {
    //     let count = 0
    //     if(customerID <= 998) {
    //         if(customerID < 99 && customerID >= 9) {
    //             plate.push('0')
    //         }else if(customerID < 9) {
    //             plate.push('00')
    //         }
    //         plate.push(customerID + 1)
    //         break
    //     }else if(customerID > 998 && customerID <= 25973) {
    //         while(customerID > 998) {
    //             customerID -= 999
    //             count++
    //         }
    //         plate[0] = alphabet[count]
    //     }
    //     else if(customerID > 25973 && customerID <= 675323) {
    //         while(customerID > 25973) {
    //             customerID -= 25974
    //             count++
    //         }
    //         plate[1] = alphabet[count]
    //     }else if(customerID > 675323 && customerID <= 17558423) {
    //         while(customerID > 675323) {
    //             customerID -= 675324
    //             count++
    //         }
    //         plate[2] = alphabet[count]
    //     }
        
    // }
    // console.log(plate.join(''))
//   }



// ,'aaa004'

// let firstVal = ['a','a','a','0','0','0']
//     let changeValues = [999,25973,675323,17558423]
//     while(customerID >= 0) {
//         if(customerID.toString().length === 1) {
//             firstVal[5] = customerID + 1
//             break
//         }
//     }
//     console.log(firstVal.join(''))

// let newString = []
//     if(customerID <= 999) {
//         newString[0] = 'aaa'
//         newString[1] = (customerID + 1).toString()
//     }
//     console.log(newString)