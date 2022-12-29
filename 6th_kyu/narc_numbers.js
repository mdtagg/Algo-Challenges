function narcissistic(value) {
    let exponent = value.toString().length
    let valArray = value.toString().split('').map(number => number**exponent)
    valArray = valArray.reduce((prev,curr) => prev + curr)
    console.log(valArray === value)
    return valArray === value ? true : false
  }

narcissistic(371)