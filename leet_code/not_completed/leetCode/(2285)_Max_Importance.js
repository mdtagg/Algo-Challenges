

function maximumImportance(n,roads) {
  let map = new Map()

  for(let arr of roads) {
    for(let num of arr) {
      map.set(num,(map.get(num) || 0) + 1)
    }
  }
  console.log(map)
  
}

maximumImportance(5,[[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]])