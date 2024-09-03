

var countSubIslands = function (grid1, grid2) {
  let x = grid2.length;
  let y = grid2[0].length;

  function DFS(i, j) {
      if (i < 0 || j < 0 || i >= x || j >= y || grid2[i][j] !== 1) return 0;
      grid2[i][j] = 2;
      return (grid1[i][j] === 1 ? 0 : 1) +
          DFS(i - 1, j) +
          DFS(i, j - 1) +
          DFS(i + 1, j) +
          DFS(i, j + 1);
  }
  let res = 0;
  for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
          if (grid2[i][j] === 1) {
              if (DFS(i, j) === 0) {
                  res++;
              }
          }
      }
  }
  return res;
};

const tests = [
  [
  [[1,1,1,0,0],
  [0,1,1,1,1],
  [0,0,0,0,0],
  [1,0,0,0,0],
  [1,1,0,1,1]],

  [[1,1,1,0,0],
  [0,0,1,1,1],
  [0,1,0,0,0],
  [1,0,1,1,0],
  [0,1,0,1,0]]
]
]

countSubIslands(...tests[0])