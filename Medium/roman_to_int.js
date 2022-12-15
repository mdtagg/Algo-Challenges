/* Write a function that takes roman numeral and converts it to an integer*/

var romanToInt = function(s) {

    let romanInt = []
    let romanNumArray = s.split('');
  
    let baseNumerals = ['IV','IX','XL','XC','CD','CM']
    let baseNumeralValues = [4,9,40,90,400,900]
    
    for(let i = 0;i < baseNumerals.length;i++) {
      let index = s.indexOf(baseNumerals[i])
      if(index >= 0) {
        romanInt.push(baseNumeralValues[i])
        romanNumArray.splice(index,2)
      }
    }
  
    for(let i = 0;i < romanNumArray.length;i++) {
      switch(romanNumArray[i]) {
        case 'M':
          romanInt.push(1000)
          break;
        case 'D':
          romanInt.push(500)
          break;
        case 'C':
          romanInt.push(100)
          break;
        case 'L':
          romanInt.push(50)
          break;
        case 'X':
          romanInt.push(10)
          break;
        case 'V':
          romanInt.push(5)
          break;
        case 'I':
          romanInt.push(1)
          break;
      }
    }
    
    romanIntFinal = romanInt.reduce((total,num) => {
      return total + num
    })
    
    return romanIntFinal
  };


  /* 
  
  WHAT I LEARNED

  A big challenge here was decerning the constraints in the roman numeral 
  system. For example if you have a change roman numeral, you wont have it 
  repeated twice. Knowing this means I could iterate through the parameter
  and look specifically for those roman numerals and then look another time
  for the base roman numerals. 
  The breakthrough here was to assign the roman numerals and their values 
  to seperate variables (lines 8 and 9). This made iterating through the 
  input parameter possible.
  
  */