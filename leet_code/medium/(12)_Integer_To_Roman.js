var intToRoman = (number) => {
    const romanLetter = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    const romanNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const romanNumeral = []
    
     while(number > 0) {
       if(number / romanNumber[0] >= 1) {
         number -= romanNumber[0]
         romanNumeral.push(romanLetter[0])
       }else {
         romanLetter.splice(0,1)
         romanNumber.splice(0,1)
       }
     }
     return romanNumeral.join('')
    }