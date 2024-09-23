
function dfs(grid,i,j) {
  if(grid?.[i]?.[j] !== "1") return;
  grid[i][j] = 0
  dfs(grid,i + 1,j)
  dfs(grid,i - 1,j)
  dfs(grid,i,j + 1)
  dfs(grid,i,j - 1)
}

const numIslands = function (grid) {
  let counter = 0
  for(let i = 0;i < grid.length;i++) {
    for(let j = 0;j < grid[i].length;j++) {
      if(grid[i][j] == '1') {
        dfs(grid,i,j)
        counter++
      }
    }
  }
  return counter
};

numIslands(
  [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
],

)