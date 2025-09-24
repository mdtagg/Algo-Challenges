
const canConstruct = (ransomNote,magazine) => {

  const magMap = new Map()

  for(let char of magazine) {
    magMap.set(char,(magMap.get(char) || 0) + 1)
  }

  for(let char of ransomNote) {
    let magChar = magMap.get(char)
    if(magChar) {
      magMap.set(char, magChar - 1)
      continue
    }
    return false;
  }

  return true;
} 

canConstruct("bg", "efgjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj");

/*
const canConstruct = (ransomNote, magazine) => {
  let ransomLen = ransomNote.length;
  if (ransomLen > magazine.length) return false;
  let hashMap = new Map();
  let idx = 0;
  let flag = 0;

  for (let i = 0; i < ransomLen; i++) {
    while (idx < magazine.length) {
      hashMap.set(magazine[idx], (hashMap.get(magazine[idx]) || 0) + 1);
      if (hashMap.get(ransomNote[i])) {
        hashMap.set(magazine[idx], hashMap.get(magazine[idx]) - 1);
        flag++;
        idx++;
        break;
      }
      idx++;
    }
  }
  return flag === ransomLen ? true: false;
};



const canConstruct = (ransomNote, magazine) => {
  let ransomLen = ransomNote.length;
  const magLen = magazine.length;

  if (ransomLen > magLen) return false;

  const ransomHashMap = new Map();

  for (let char of ransomNote) {
    ransomHashMap.set(char, (ransomHashMap.get(char) || 0) + 1);
  }

  for (let char of magazine) {
    if (ransomLen === 0) return true;
    ransomLen--;
    let charCount = ransomHashMap.get(char);
    if (!charCount) return false;
    ransomHashMap.set(char, charCount - 1);
  }

  return true;
};
*/
