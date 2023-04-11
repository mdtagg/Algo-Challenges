function isPangram(sentence) {
    if(sentence === '') {
        console.log(false)
        return false
    }
    const sentenceArray = sentence.toLowerCase().split('')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    while(alphabet.length) {
      if(sentenceArray.includes(alphabet[0])) {
        alphabet.shift()
      }else {
        console.log(false)
        return false
    }
        
    }
    console.log(true)
      return true
  }

  console.log(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs'))