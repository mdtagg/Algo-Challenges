function validParentheses(parens) {
    let parensArray = parens.split('')
    for(let i = 0;i < parensArray.length;i++) {
      let parensSearch = parensArray.join('').search('\\(\\)')
      if(parensSearch >= 0) {
        parensArray.splice(parensSearch,2)
        i = 0
      }
    }
    if(parensArray.length)return false
    return true
  }
    
  
  validParentheses('(()())')