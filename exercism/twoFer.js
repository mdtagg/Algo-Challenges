export function twoFer(name) {
    if(typeof name === 'string') {
      return `One for ${name}, one for me.`
    }
    return 'One for you, one for me.'
  }