function pathFinder(maze) {
    const layers = maze.split('\n').map(item => item.trim())
    let currentPosition = [0,0]
    let nextMove = true
    let lastMove = null
    let moves = 0

    while(nextMove) {
        let positions = {
            left:[currentPosition[0],currentPosition[0]-1],
            up:[currentPosition[0] - 1,currentPosition[1]],
            right: [currentPosition[0],currentPosition[0] + 1],
            down: [currentPosition[0] + 1,currentPosition[1]]
        }
        let possibleMoves = [positions.left,positions.right,positions.down,positions.up]
        .filter(move => {
            return move.includes(-1) || move.includes(3) ? false : true
        })
        .filter(move => {
            return layers[move[0]][move[1]] === 'W' ||
            move == lastMove ? false : true
        })
        console.log(possibleMoves)
        currentPosition = possibleMoves
        lastMove = currentPosition
        moves++
        if(!currentPosition.length) break
        if(moves > 5) break
        console.log(moves)
       
    }
    

}


  pathFinder(`.W.
              .W.
              W..`)


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
