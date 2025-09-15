

// const canBeTypedWords = (text,brokenLetters) => {

//   let totalWords = 0;
//   let brokenWords = new Set(brokenLetters.split(""));
//   let wordFlag = false;

//   for(let char of text) {
//     if(brokenWords.has(char)) {
//       wordFlag = true;
//     }
//     if(char === " ") {
//       if(!wordFlag) totalWords++;
//       wordFlag = false;
//     }
//   }
//   if(!wordFlag) totalWords++;
//   return totalWords
// }

const canBeTypedWords = (text,brokenLetters) => {

  text = text.split(" ")
  let totalWords = 0;
  let brokenLetterSet = new Set(brokenLetters);

  for(let word of text) {
    for(let char of word) {
      if(brokenLetterSet.has(char)) {
        totalWords++;
        break;
      }
    }
  }
  return text.length - totalWords;
}

canBeTypedWords("hello world","ad")