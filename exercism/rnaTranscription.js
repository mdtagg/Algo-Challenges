function toRna(dna) {
    const rna = dna
      .split('')
      .map(letter => {
        return getRna(letter)
      })
      .join('')
    return rna
  }
  function getRna(letter) {
    switch(letter) {
      case 'G': return 'C'
      case 'C': return 'G'
      case 'T': return 'A'
      case 'A': return 'U'
      default: throw 'Invalid input DNA.'
    }
    return letter
  }