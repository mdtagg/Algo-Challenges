function pathFinder(maze) {
    let rows = maze.split('\n').map(item => item.trim())
    let currentPosition = [0,0]
    let endPosition = [rows.length - 1,rows[0].length - 1]
    let lastMove = ''
    let mazeBranches = []
    let numMoves = 1
    let count = 0
    let boundary = rows.length - 1

    while(count < 4) {
        let nextPosition = possibleMoves(currentPosition,rows,lastMove,boundary)
        // console.log(nextPosition)
        lastMove = nextPosition[0][1]
        // console.log(lastMove)
        currentPosition = nextMove(currentPosition,nextPosition[0][1])
        count++
        numMoves++
        if(currentPosition.toString() === endPosition.toString()) break
        // if(count > 2) break
        
        console.log(numMoves)
    }
    console.log(currentPosition)
    // console.log(numMoves)
}

//takes current position and a direction and returns the coordinates of moving
// in that direction
function nextMove(currentPosition,direction) {
    let row = currentPosition[0]
    let column = currentPosition[1]
    switch(direction) {
        case 'down':
            row += 1
            break
        case 'right':
            column += 1
            break
        case 'up':
            row -= 1
            break
        case 'left':
            column -= 1
            break
    }
    let newPosition = [row,column]
    return newPosition
}

// takes the current position and the rows and filters out the undefined moves
//and the moves that would result in hitting a wall
function possibleMoves(currentPosition,rows,lastMove,boundary) {

    let opposites = {
        down: 'up',
        right: 'left',
        up: 'down',
        left: 'right'
    }

    let cardinals = [
        [currentPosition[0] - 1, 'up'],
        [currentPosition[1] + 1, 'right'],
        [currentPosition[0] + 1, 'down'],
        [currentPosition[1] - 1, 'left']
    ]
    cardinals = cardinals.filter(item => item[0] === -1 ||
        item[0] > boundary ? false : true)
    .filter(item => item[1] === opposites[lastMove] ? false : true)
    console.log('cardinals after:',cardinals)
    
    for(let i = 0;i < cardinals.length;i++) {
        let moveValues = nextMove(currentPosition,cardinals[i][1])
        if(rows[moveValues[0]][moveValues[1]] === 'W') {
            cardinals.splice(i,1)
        } 
    }
    return cardinals
}

pathFinder(`.W.
            .W.
            ...`)


            // let opposites = {
            //     down: 'up',
            //     right: 'left',
            //     up: 'down',
            //     left: 'right'
            // }

            // const cardinalObject = {
            //     up: [currentPosition[0] - 1],
            //     right: [currentPosition[1] + 1],
            //     down: [currentPosition[0] + 1],
            //     left: currentPosition[1] - 1
            // }
            // let keys = Object.keys(cardinalObject)

//CODE GRAVEYARD

// class Location {
//     constructor(x, y, steps) {
//         this.x = x;
//         this.y = y;
//         this.steps = steps;
//     }
// }

// function update(open, map, visited, x, y, length) {
//     if (x >= 0 && y >= 0 && x < visited.length && y < visited[x].length && map[x][y] == 0 && !visited[x][y]) {
//         visited[x][y] = true;
//         open.push(new Location(x, y, length));
//     }
// }

// function parse(maze) {
//     var parsed = [];
//     maze.split("\n").forEach( row => {
//         parsed.push(row.split('').map(x => x == '.' ? 0 : 1));
//     });
//     return parsed;
// }

// function pathFinder(maze) {
//     var map = parse(maze);
    
//     var visited = [];
//     for (var i = 0; i < map.length; i++) {
//         var row = [];
//         for (var j = 0; j < map.length; j++) {
//             row.push(false);
//         }
//         visited.push(row);
//     }
//     var open = [];
//     open.push(new Location(0, 0, 0));

//     var min = map.length * map.length;

//     while (open.length != 0) {
//         var p = open.shift();
//         if (p.x == map.length - 1 && p.y == map[p.x].length - 1 && min > p.steps) {
//             min = p.steps;
//         }

//         update(open, map, visited, p.x - 1, p.y, p.steps + 1);
//         update(open, map, visited, p.x + 1, p.y, p.steps + 1);
//         update(open, map, visited, p.x, p.y - 1, p.steps + 1);
//         update(open, map, visited, p.x, p.y + 1, p.steps + 1);
//     }

//     return min == map.length * map.length ? false : min;
// }

//DID NOT SOLVE WITH OWN SOLUTION 

/*
whole hell of a lot going on here, very complex for 4 kyu
*/





            //   const layers = maze.split('\n').map(item => item.trim())
            //   let currentPosition = [0,0]
            //   let endPosition = [layers.length - 1,layers[0].length - 1]
            //   console.log(endPosition)
            //   let lastMove = ''
            //   let count = 0
          
            //   while(count < 10) {
            //       let row = currentPosition[0]
            //       let column = currentPosition[1]
            //       // console.log(row,column)
            //       let possibleMoves = []
            //       if(row - 1 !== -1 && lastMove !== 'down') {
            //           possibleMoves.push('up')
            //       }if (column !== layers[0].length - 1 && lastMove !== 'left') {
            //           possibleMoves.push('right')
            //       }if(row + 1 !== layers[0].length && lastMove !== 'up') {
            //           possibleMoves.push('down')
            //       }if(column - 1 !== -1 && lastMove !== 'right') {
            //           possibleMoves.push('left')
            //       }
            //       console.log(possibleMoves)
            //       possibleMoves = possibleMoves.map(move => {
            //           switch(move) {
            //               case 'right':
            //                   return ['right',[row,column + 1]]
            //               case 'down':
            //                   return ['down',[row + 1,column]]
            //               case 'up':
            //                   return ['up',[row - 1,column]]
            //               case 'left':
            //                   return ['left',[row,column - 1]]
            //           }
            //       })
            //       // console.log(possibleMoves)
            //       .filter(move => {
            //           console.log(move[1][0],move[1][1])
            //           return layers[move[1][0]][move[1][1]] === 'W' ? false : true
            //       })
            //       if(!possibleMoves.length) {
            //           console.log(false)
            //           return false
            //       }
            //       if(possibleMoves > 1) {
            //           possibleMoves = possibleMoves[0]
            //       }
            //       console.log(possibleMoves)
            //       lastMove = possibleMoves[0][0]
            //       console.log(lastMove)
            //       count++
            //       currentPosition = possibleMoves[0][1]
            //       console.log(currentPosition)
          
            //       // break
            //   }


        //       let rows = maze.split('\n').map(item => item.trim())
        //       let startPosition = [0,0]
        //       let endPosition = [rows.length - 1,rows[0].length - 1]
        //       console.log(rows)
        //       let columns = createColumns(rows)
        //       console.log(columns)
        //       while(startPosition.toString !== endPosition.toString()) {
        //           let down = 0
        //           if(!columns[0].includes('W')) {
        //               startPosition[0] += columns[0].length - 1
        //           }
        //           if(!rows[])
        //           console.log(startPosition)
        //           break
        //       }
        //       // if(!rows[0].includes('W'))
        //   }
          
        //   function createColumns(rows) {
        //       let columns = []
        //       let columnNum = 0
        //       while(columnNum < 3) {
        //           let column = []
        //           for(let i = 0;i < rows.length;i++) {
        //               column.push(rows[i][columnNum])
        //           }
        //           columnNum++
        //           columns.push(column.join(''))
        //       }
          
        //       return columns


        //       let layers = maze.split('\n').map(item => item.trim())
        //       let startPosition = [0,0]
        //       let endPosition = [layers.length - 1,layers[0].length - 1]
        //       let count = 1
           
        //       down(layers,startPosition)
              
        //       while(startPosition.toString() !== endPosition.toString()) {
        //            let row = startPosition[0]
        //            let column = startPosition[1]
        //            while(row < layers.length && column < layers.length) {
        //                if(row > 2) break
        //                layers[row].charAt(count) === 'W' ? down(startPosition) : right(layers,startPosition)
        //                if(row === 2) count++
        //           }
        //       }
        //    }
           
        //    function down(startPosition) {
        //        console.log('down')
        //        return [startPosition[0] += 1,startPosition[1]]
        //    }
           
        //    function right(layers,startPosition) {
        //        console.log('right')
        //        return [startPosition[0],startPosition[1] + 1]
        //    }
           
           // layers[i] === endPosition[0] ? right(startPosition) :

//   const layers = maze.split('\n').map(item => item.trim())
//   let currentPosition = [0,0]
//   let lastMove = ''
//   let count = 0

//   while(count < 10) {
//       let row = currentPosition[0]
//       let column = currentPosition[1]
//       // console.log(row,column)
//       let possibleMoves = []
//       if(row - 1 !== -1 && lastMove !== 'down') {
//           possibleMoves.push('up')
//       }if (column !== layers[0].length - 1 && lastMove !== 'left') {
//           possibleMoves.push('right')
//       }if(row + 1 !== layers[0].length && lastMove !== 'up') {
//           possibleMoves.push('down')
//       }if(column - 1 !== -1 && lastMove !== 'right') {
//           possibleMoves.push('left')
//       }
//       console.log(possibleMoves)
//       possibleMoves = possibleMoves.map(move => {
//           switch(move) {
//               case 'right':
//                   return ['right',[row,column + 1]]
//               case 'down':
//                   return ['down',[row + 1,column]]
//               case 'up':
//                   return ['up',[row - 1,column]]
//               case 'left':
//                   return ['left',[row,column - 1]]
//           }
//       })
//       // console.log(possibleMoves)
//       .filter(move => {
//           console.log(move[1][0],move[1][1])
//           return layers[move[1][0]][move[1][1]] === 'W' ? false : true
//       })
//       if(!possibleMoves.length) {
//           console.log(false)
//           return false
//       }
//       if(possibleMoves > 1) {
//           possibleMoves = possibleMoves[0]
//       }
//       console.log(possibleMoves)
//       lastMove = possibleMoves[0][0]
//       console.log(lastMove)
//       count++
//       currentPosition = possibleMoves[0][1]
//       console.log(currentPosition)

//       // break
//   }

//               const layers = maze.split('\n').map(item => item.trim())
//               let currentPosition = [0,0]
//               let nextMove = true
//               let lastMove = null
//               let moves = 0
          
//               while(nextMove) {
//                   let positions = {
//                       left:[currentPosition[0],currentPosition[0]-1],
//                       up:[currentPosition[0] - 1,currentPosition[1]],
//                       right: [currentPosition[0],currentPosition[0] + 1],
//                       down: [currentPosition[0] + 1,currentPosition[1]]
//                   }
//                   let possibleMoves = [positions.left,positions.right,positions.down,positions.up]
//                   .filter(move => {
//                       return move.includes(-1) || move.includes(3) ? false : true
//                   })
//                   .filter(move => {
//                       return layers[move[0]][move[1]] === 'W' ||
//                       move.join('') == lastMove.join('') ? false : true
//                   })
//                   console.log(possibleMoves)
//                   currentPosition = possibleMoves
//                   lastMove = currentPosition
//                   console.log(lastMove)
//                   moves++
//                   if(!currentPosition.length) break
//                   if(moves > 5) break
//                   console.log(moves)
                 
//               }


// if(layers[0][1] === 'W') {
//     while(layers[currentPosition[0] + 1] != undefined && layers[currentPosition[0]][0] !== 'W') {
//         moves++
//         currentPosition[0]++
//     }
//     console.log(currentPosition)
//     for(let i = currentPosition[1] + 1;i < layers[currentPosition[0]].length;i++) {
//         if(layers[currentPosition[0]][i] === 'W') {
//             break
//         }
//         moves++
//     }
// console.log(moves)
// }

// const layers = maze.split('\n').map(item => item.trim())
//     console.log(layers)
//     let currentPosition = [0,0]
//     let nextMove = true
//     let moves = 0
//     while(currentPosition.toString() !== '2,2') {
//         console.log(currentPosition)
//         let right = layers[currentPosition[0]][currentPosition[1] + 1]
//         let down = layers[currentPosition[0] + 1][currentPosition[1]]
//         right === 'W' && down === 'W' ?
//         nextMove = false :
//         right === 'W' ?
//         currentPosition[0]++ :
//         currentPosition[1]++
//         moves++
//         if(!nextMove) break
//         if(moves === 4) break
//     }
//     if(nextMove === false) {
//         console.log(false)
//         return false
//     }
//     console.log(moves)

// let currentPosition = [0,0]
//     let layers = maze.split('\n')
//     let moves = 0
//     let lastMove = []

//     let count = 0
    
//     while(count < 2) {

//         let positions = {
//             left:[currentPosition[0],currentPosition[0]-1],
//             up:[currentPosition[0] - 1,currentPosition[1]],
//             right: [currentPosition[0],currentPosition[0] + 1],
//             down: [currentPosition[0] + 1,currentPosition[1]]
//         }

//         lastMove.push(currentPosition)
//         let possibleMoves = 
//         [positions.left,positions.up,positions.right,positions.down].filter(move => {
//             return move.includes(-1) || move.includes(3) ? false : true
//         })
//         .filter(move => {
//             let potentialMove = layers[move[0]][move[1]]
//             return potentialMove === 'W' ? false : true
//         }).filter(move => {
//             return lastMove === move ? false : true
//         })
//         console.log(possibleMoves)
//         if(possibleMoves.length >= 2) {

//         }
//         count++
//         moves++
//         lastMove = []
//         // console.log('lastMove: ',lastMove)
//         currentPosition = possibleMoves
//         // console.log('currentPosition',currentPosition)
        
//     }
//     console.log(moves)

// let layers = maze.split('\n')
//     console.log(layers)
//     let columns = []
//     let count = 0
//     while(count < 3) {
//         let column = []
//         for(let i = 0;i < layers.length;i++) {
//             column.push(layers[i][count])
//         }
//         columns.push(column)
//         count++
//     }
//     console.log(columns)
//   }





// if((move[0] === 1 && move[0] !== 'W') && (move[1] === 1 && move[1] !== 'W'))

//  while(nextMove) {
//     let possibleMoves = []
//     for(let i = 0;i < layers.length;i++) {
//         let move = []
//         for(let j = 0;i < layers[i].length;j++) {
//             if(layers[i][j + 1] !== 'W' || layers[i][j + 1] !== undefined) {
//                 move.push(layers[i])
//             }
//         }
//     }
// }
