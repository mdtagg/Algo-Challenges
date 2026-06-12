
var spellchecker = function(wordlist, queries) {
  const asIs = new Set(wordlist);
  const lowercased = createLowercasedList(wordlist);
  const vowelCorrected = createVowelCorrectedList(wordlist);
  
  return queries.map(query => {
      if (asIs.has(query)) {
         return query;
      }
      
      const lowercasedQuery = query.toLowerCase();
      if (lowercased.has(lowercasedQuery)) {
          return lowercased.get(lowercasedQuery);
      }
      
      const correctedQuery = toVowelCorrected(query);
      if (vowelCorrected.has(correctedQuery)) {
          return vowelCorrected.get(correctedQuery);
      }
      
      return '';
  });
};

const createLowercasedList = (wordlist) => {
  const map = new Map();
  
  for (const word of wordlist) {
      const lowercased = word.toLowerCase();
      
      if (map.has(lowercased)) {
          continue;
      }
      
      map.set(lowercased, word);
  }
  
  return map;
}

const createVowelCorrectedList = (wordlist) => {
  const map = new Map();
  
  for (const word of wordlist) {
      const corrected = toVowelCorrected(word);
      
      if (map.has(corrected)) {
          continue;
      }
      
      map.set(corrected, word);
  }
  
  return map;
}

// hello => h*ll*
const toVowelCorrected = word => word.toLowerCase().replace(/a|e|i|o|u/g, '*');

spellchecker(["KiTe","kite","hare","Hare"],["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"])

/*


const spellChecker = (wordList,queries) => {

  const result = new Array(queries.length).fill("");
  const vowelSet = new Set("AEIOUaeiou")
  let fullBreak = false;

  for(let i = 0;i < queries.length;i++) {
    
    if(fullBreak) {
      fullBreak = false
      continue;
    }
    let wordFlag = false;

    for(let j = 0;j < wordList.length;j++) {
      if(wordList[i].length !== queries[j].length) continue;
      if(queries[j] === wordList[i]) {
        result[i] = queries[j];
        fullBreak = true;
        break;
      }
      if(wordList[i].toLowerCase() === queries[j].toLowerCase()) {
        result[i] = wordList[i]
        wordFlag = true 
        break;
      }
      for(let k = 0;k < wordList[i].length;k++) {
        let isWordListVowel = vowelSet.has(wordList[i][k].toLowerCase())
        let isQueryVowel = vowelSet.has(queries[j][k].toLowerCase())
        if((!isWordListVowel && isQueryVowel) || (isWordListVowel && !isQueryVowel)) {
          wordFlag = true;
          break
        }
      }
      if(!wordFlag) {
        result[i] = wordList[i]
      }
    }
  }
  return result
}
*/