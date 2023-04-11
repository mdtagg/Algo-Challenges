function decodedResistorValue(colors) {
    let resistorNumbers = []
    let zeros = 0
    const resistorValues = colors
    .forEach((color,index) => {
      if(index <= 1) {
        resistorNumbers.push(getColorCodes(color))
        return
      }
      const ohmNumber = parseInt(getColorCodes(color))
      zeros += ohmNumber
    })
    resistorNumbers = resistorNumbers.join('')
    const test = getLabel(zeros) 
    console.log(resistorNumbers.concat(test))
  }
  
  decodedResistorValue(['blue','grey','brown'])
  
  function getLabel(zeros) {
    const ohms = []
    if(zeros % 3 !== 0) {
      zeros -= 1
      ohms.push('0 ')
    }else {
      ohms.push(' ')
    }
    switch(zeros) {
        case 0: 
          ohms.push('ohms')
          break;
        case 1: 
          ohms.push('ohms')
          break;
        case 3: 
          ohms.push('megaohms')
          break;
        case 6:
          ohms.push('kiloohms')
          break;
        case 9:
          ohms.push('gigaohms')
          break;
      }
    return ohms.join('')
  }
  
  function getColorCodes(color) {
      switch(color) {
        case 'black':
          return '0'
        case 'brown':
          return '1'
        case 'red':
          return '2'
        case 'orange':
          return '3'
        case 'yellow':
          return '4'
        case 'green':
          return '5'
        case 'blue':
          return '6'
        case 'violet':
          return '7'
        case 'grey':
          return '8'
        case 'white':
          return '9'
      };
    return color
  };
  
  // console.log(colorsTest)
  //   const numZeros = 0
  //   const resistorValue = colors
  //   .map((color,index) => {
  //     if(index === 1 && color === 'black') {
  //       numZeros += 1
  //       return
  //     }
  //     if(index === 2) {
  //       const numOhms = parseInt(getColorCodes(color)) + numZeros
  //       const ohms = '0'.repeat(numOhms)
  //       const test = getLabel(ohms)
  //       return test
  //     }
  //     return getColorCodes(color)
  // })
  //   const number = resistorValue.splice(0,2).join('')
    
  //   console.log(resistorValue)