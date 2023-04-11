function changer(str) { 
    const alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('')
    const vowels = 'aeiou'.split('')
    let newStr = str.toLowerCase().split('')
    
    newStr.forEach((item,i) => {
        if(alphabet.includes(item)) {
            let index = alphabet.indexOf(item)
            newStr.splice(i,1,alphabet[index + 1])
            item = alphabet[index + 1]
        }
        if(vowels.includes(item)) {
            newStr.splice(i,1,item.toUpperCase())
        }
    })
    console.log(newStr.join(''))
  }

changer('Cat30')