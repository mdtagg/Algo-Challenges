/*
return the price of the hotdogs a person will buy given a certain amount of 
hotdogs (n)
*/

function saleHotdogs(n){
    return n < 5 ? n * 100 :
      n >= 5 && n < 10 ? n * 95 :
      n * 90
  }

  //Just ternary practice here, the return statement needs to go in the beginning
  //not in the value returns 