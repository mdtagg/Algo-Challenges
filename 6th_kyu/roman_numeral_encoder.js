function solution(number){
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
   console.log(romanNumeral.join(''))
   return romanNumeral.join('')
  }

solution(2)

//BEST SOLUTION

function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }