
function dfs(board,i,j) {
  if(i < 0 || i >= board.length || j < 0 || j >= board[0].length
    || board[i][j] !== "X") return;
  board[i][j] = "X"
  dfs(board,i + 1,j)
  dfs(board,i - 1,j)
  dfs(board,i,j + 1)
  dfs(board,i,j - 1)
} 

function solve(board) {

  for(let i = 0;i < board.length;i++) {
    for(let j = 0;j < board[i].length;j++) {
      if(i > 0 && i < board.length - 1 && j > 0 && j < board[i].length - 1) continue
      else if(board[i][j] === "O") board[i][j] = "T"
    }
  }

  for(let i = 0;i < board.length;i++) {
    for(let j = 0;j < board[i].length;j++) {
      if(board[i][j] === "O") dfs(board,i,j)
      else if(board[i][j] === "T") board[i][j] = "O"
    }
  }
  return board
}

solve([["O","O","O"],["O","O","O"],["O","O","O"]])