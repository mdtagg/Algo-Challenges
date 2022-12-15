/* There is a factory that prints labels for boxes. The letters represent the colors
strings that are not a-m represent errors. Return a string that is a fractional
representation of the number of errors in a printing attempt. 
*/

function printerError(s) {
    const sLen = s.length
    let errors = s.match(/[^a-m]/g)
    if(errors === null) {
      errors = 0
    }else {
      errors = errors.length
    }
    console.log(`${errors}/${sLen}`)
    return `${errors}/${sLen}`
  }

  printerError('aaaaabbbbbcccccxyz')

  /*

  WHAT I LEARNED

  -.match will return null if there are no matches, not an empty array
  
  */