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


//BEST SOLUTION

function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }

  /*
  This solution has a clever use of the reduce method but the only thing is 
  that the description of the challenge does not say that the markers argument
  has to be an array. So if there is only one string value as an input for 
  markers this solution breaks. 
  */