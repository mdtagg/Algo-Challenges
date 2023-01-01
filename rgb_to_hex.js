function rgb(r, g, b){
    let rgbArray = [r,g,b]
    let newArray = []
    
    for(let i = 0;i < rgbArray.length;i++) {
        if(rgbArray[i] < 0) {
            newArray.push('00')
            continue
        }else if(rgbArray[i] > 255) {
            newArray.push('FF')
            continue
        }
        let color = []
        color.push(Math.floor(rgbArray[i] / 16))
        color.push(rgbArray[i] % 16)
        newArray.push(...color)
    }
    
    for(let i = 0;i < newArray.length;i++) {
        switch(newArray[i]) {
            case 10:
                newArray[i] = 'A'
                break
            case 11:
                newArray[i] = 'B'
                break
            case 12:
                newArray[i] = 'C'
                break
            case 13:
                newArray[i] = 'D'
                break
            case 14:
                newArray[i] = 'E'
                break
            case 15:
                newArray[i] = 'F'
            default:
                newArray[i] = newArray[i]
        }
    }
    
    console.log(newArray.join(''))
}

rgb(300,255,255)

// let hexColors = {
//     '10':'A',
//     '11':'B',
//     '12':'C',
//     '13':'D',
//     '14':'E',
//     '15':'F'
// }


