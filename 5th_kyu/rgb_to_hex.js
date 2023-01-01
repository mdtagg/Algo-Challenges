function rgb(r, g, b){
    let rgbArray = [r,g,b]
    let newArray = []
    rgbArray = rgbArray.map(item => {return item > 255 ? 255 : item < 0 ? 0: item})
    .forEach(item => {
        newArray.push(Math.floor(item / 16))
        newArray.push(item % 16)
    })
    console.log(newArray)
    newArray = newArray.map(item => {
        switch(item) {
            case 10:
                return 'A'
            case 11:
                return 'B'
            case 12: 
                return 'C'
            case 13: 
                return 'D'
            case 14:
                return 'E'
            case 15:
                return 'F'
            default:
                return item
        }
    })
    
    console.log(newArray.join(''))
}

rgb(173, 255, 47)


//BEST SOLUTION

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

rgb(173, 255, 47)

/*
WHAT I LEARNED

-.toString(16) will turn a number into hex values up to 255. 

-The zero is added to the number so that slice(-2) will work since you cant 
index the last values. 
*/

//CODE GRAVEYARD

// let hexColors = {
//     '10':'A',
//     '11':'B',
//     '12':'C',
//     '13':'D',
//     '14':'E',
//     '15':'F'
// }


// function rgb(r, g, b){
//     let rgbArray = [r,g,b]
//     let newArray = []
//     for(let i = 0;i < rgb.length;i++) {
//        if(rgbArray[i] < 0) {
//             newArray.push('00')
//             continue
//         }else if(rgbArray[i] > 255) {
//             newArray.push('FF')
//             continue
//         }
//         let color = []
//         color.push(Math.floor(rgbArray[i] / 16))
//         color.push(rgbArray[i] % 16)
//         newArray.push(...color)
//     }
    
//     for(let i = 0;i < newArray.length;i++) {
//         switch(newArray[i]) {
//             case 10:
//                 newArray[i] = 'A'
//                 break
//             case 11:
//                 newArray[i] = 'B'
//                 break
//             case 12:
//                 newArray[i] = 'C'
//                 break
//             case 13:
//                 newArray[i] = 'D'
//                 break
//             case 14:
//                 newArray[i] = 'E'
//                 break
//             case 15:
//                 newArray[i] = 'F'
//             default:
//                 newArray[i] = newArray[i]
//         }
//     }
    
//     return newArray.join('')
// }


