function decodedResistorValue(colors) {
    colors = colors.splice(0,3)
    let number = []
    let zeros = 0
    colors.forEach((color,index) => {
        if(index === 1 && color === 'black') {
            zeros += 1
            return
        }
        if(index === 2) {
            zeros += parseInt(getColorCodes(color))
            return
        }
        number.push(getColorCodes(color))
    })
    const labelTest = getLabel(number,zeros)
    const newNumber = labelTest.number.join('')
    const fullNumber = newNumber.concat(' ').concat(labelTest.label)
    console.log(fullNumber)
  }
  
  decodedResistorValue(['blue', 'green', 'yellow', 'orange'])

  function getLabel(number,zeros) {
    let label
    while(zeros % 3 !== 0) {
        zeros -= 1
        number.push('0')
    }
    console.log(zeros)
    switch(zeros) {
        case 0:
            label = 'ohms'
            break;
        case 3:
            label = 'kiloohms'
            break;
        case 6:
            label = 'megaohms'
            break;
        case 9:
            label = 'gigaohms'
            break;
    }
    return { number, label }
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


  //   function getZeros(number) {
//     let zeros = 0
//     console.log(number)
//     number
//     .split('')
//     .forEach(value => {
//         if(value === '0') {
//             zeros += 1
//         }
//     })
//     return zeros
//   }
  // let resistorNumber = []
    // let zeros = []
    // colors.forEach((color,index) => {
    //     if(index <= 1) {
    //         resistorNumber.push(getColorCodes(color))
    //         return
    //     }
    //     const zerosTest = '0'.repeat(parseInt(getColorCodes(color)))
    //     zeros.push(zerosTest)
    // })

    // const zeros = getZeros(number.join(''))
    // console.log(zeros)
    // const testTwo = getLabel(zeros)
    // console.log(testTwo)

//   let resistorNumbers = []
//     let zeros = 0
//     const resistorValues = colors
//     .forEach((color,index) => {
//       if(index <= 1) {
//         resistorNumbers.push(getColorCodes(color))
//         return
//       }
//       const ohmNumber = parseInt(getColorCodes(color))
//       zeros += ohmNumber
//     })
//     resistorNumbers = resistorNumbers.join('')
//     const test = getLabel(zeros) 
//     console.log(resistorNumbers.concat(test))
  
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