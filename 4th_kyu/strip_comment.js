function solution(input, markers) {
    let strMarkers = Array.from(markers)
    let newInputs = input.split('\n').map(item => {
      item = item.split('')
      for(let i = 0;i < strMarkers.length;i++) {
          if(item.includes(strMarkers[i])) {
              let spliceIndex = item.indexOf(strMarkers[i])
              item.splice(spliceIndex)
              return item.join('').trim()
          }
      }
      return item.join('')
    })
    newInputs = newInputs.join('\n').trim()
    console.log(newInputs)
  };

solution("apples, plums % and bananas\npears\noranges !applesauce",['%','!'])