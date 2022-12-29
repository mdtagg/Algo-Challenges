function findTheNumberPlate(customerID){
    let plate = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    while(customerID > 0) {
        let count = 0
        if(customerID <= 998) {
            // plate.push('aaa')
            let customerIdLength = customerID.toString().length
            if(customerIdLength === 2) {
                plate.push('0')
            }else if(customerIdLength === 1) {
                plate.push('00')
            }
            plate.push(customerID + 1)
            break
        }else if(customerID > 998 && customerID <= 25973) {
            while(customerID > 998) {
                customerID -= 999
                count++
            }
            plate.unshift(alphabet[count])
            // plate.push('aa')
        }
        else if(customerID > 25973 && customerID <= 675323) {
            while(customerID > 25973) {
                customerID -= 25974
                count++
            }
            plate.unshift(alphabet[count])
            // plate.push('a')
        }else if(customerID > 675323 && customerID <= 17558423) {
            while(customerID > 675323) {
                customerID -= 675324
                count++
            }
            plate.push(alphabet[count])
        }
        
    }
    console.log(plate.join(''))
  }

findTheNumberPlate(17558423)

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