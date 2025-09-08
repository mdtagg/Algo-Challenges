

const getNoZeroIntegers = function(n) {
    
    const checkForZero = (x) => {
      return !x.toString().includes('0');
    }
    
    for(let i = 1;i < n;i++) {
      let j = n - i
      if(checkForZero(i) && checkForZero(j)) {
        return [i,j]
      }
    }
    
};

getNoZeroIntegers(1001)