

var countUnguarded = function(m, n, guards, walls) {
  const board = new Array(m).fill().map(space => new Array(n).fill(0))
  let result = 0

  for(let [row,col] of guards) {
    board[row][col] = 1;
  }

  for(let [row,col] of walls) {
    board[row][col] = 2;
  }

  function markGuarded(row,col) {
    //up
    for(let r = row - 1;r >= 0;r--) {
      if(board[r][col] === 2 || board[r][col] === 1) break;
      board[r][col] = 3
    }
    //left
    for(let c = col - 1;c >= 0;c--) {
      if(board[row][c] === 2 || board[row][c] === 1) break;
      board[row][c] = 3
    }
    //down
    for(let r = row + 1;r < m;r++) {
      if(board[r][col] === 2 || board[r][col] === 1) break;
      board[r][col] = 3
    }

    //right
    for(let c = col + 1;c < n;c++) {
      if(board[row][c] === 2 || board[row][c] === 1) break;
      board[row][c] = 3
    }
  }

  for(let [row,col] of guards) {
    markGuarded(row,col)
  }

  for(let row of board) {
    for(let col of row) {
      if(col === 0) result++;
    }
  }
  return result
};

console.log(countUnguarded(4,6,[[0,0],[1,1],[2,3]],[[0,1],[2,2],[1,4]]))

/*

class Move {
  constructor(m,n,guards,walls) {
    this.m = m 
    this.n = n 
    this.guardedCells = new Set(guards.concat(walls))
  }

  up = (coords) => {
    let [ row,col ] = coords;
    while(row > 1 && !this.guardedCells.has([row,col])) {
      this.guardedCells.add([row,col])
      row--
    }
  }

  down = (coords) => {
    let [ row,col ] = coords;
    while(row < this.m && !this.guardedCells.has([row,col])) {
      this.guardedCells.add([row,col])
      row++
    }
  }

  right = (coords) => {
    let [ row,col ] = coords;
    while(col < this.n && !this.guardedCells.has([row,col])) {
      this.guardedCells.add([row,col])
      col++
    }
  }

  left = (coords) => {
    let [ row,col ] = coords;
    while(col > 1 && !this.guardedCells.has([row,col])) {
      this.guardedCells.add([row,col])
      col--
    }
  }
}

const up = (coords,guards,walls) => {
  let [ row,col ] = coords;
  while(row > 1) {
    if(guards.has(JSON.stringify([row,col]))) return false;
    if(walls.has(JSON.stringify([row,col]))) return true;
    row--
  }
  return true
}

const down = (coords,m,guards,walls) => {
  let [ row,col ] = coords;
  while(row < m) {
    if(guards.has(JSON.stringify([row,col]))) return false;
    if(walls.has(JSON.stringify([row,col]))) return true;
    row++
  }
  return true
}

const right = (coords,n,guards,walls) => {
  let [ row,col ] = coords;
  while(col < n) {
    if(guards.has(JSON.stringify([row,col]))) return false;
    if(walls.has(JSON.stringify([row,col]))) return true;
    col++
  }
  return true
}

const left = (coords,guards,walls) => {
  let [ row,col ] = coords;
  while(col >= 0) {
    if(guards.has(JSON.stringify([row,col]))) return false;
    if(walls.has(JSON.stringify([row,col]))) return true;
    col--
  }
  return true
}

const countUnguarded = function(m, n, guards, walls) {

    let guardSet = new Set(guards.map(cell => JSON.stringify(cell)))
    let wallSet = new Set(walls.map(cell => JSON.stringify(cell)))
    let guardedCells = new Set(guards.concat(walls).map(cell => JSON.stringify(cell)))
    let result = 0

    for(let i = 0;i < m;i++) {
      for(let j = 0;j < n;j++) {
        if(!guardedCells.has(`[${i},${j}]`)) {
          let leftMove = left([i,j-1],guardSet,wallSet)
          let downMove = down([i+1,j],m,guardSet,wallSet)
          let upMove = up([i-1,j],guardSet,wallSet)
          let rightMove = right([i,j+1],n,guardSet,wallSet)

          if(leftMove && downMove && upMove && rightMove) result++
        }
      }
    }
    return result
};
*/