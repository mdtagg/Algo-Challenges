

const knight = (start,finish) => {

    let chessMatrix = createChessMatrix()
    console.log(chessMatrix)

    const [letter,number] = start.split('')
    const [endLetter,endNumber] = finish.split('')
    const alphabet = 'abcdefgh'
    const endPosition = chessMatrix[endNumber][endLetter.charCodeAt(0) - 97]
    
    let result = 0
    let done = false
    function move(letter,number,min=0,direction,horizontalDist) {

        if(!letter || number > 8 || done) return
        let letterIndex = letter.charCodeAt(0) - 97
        let startPosition = chessMatrix[number][letterIndex]
        
        if( startPosition === endPosition || !startPosition) {
            done = true
            result = min
            return
        }
        
        number = parseInt(number)
        
        move(alphabet[letterIndex + 1],number + 2,++min,'upRight',horizontalDistance)
        move(alphabet[letterIndex - 1],number + 2,++min,'upLeft',horizontalDistance)
        move(alphabet[letterIndex + 2],number + 1,++min,'rightUp',horizontalDistance)
        // move(alphabet[letterIndex + 2],number - 1,++min,'rightDown')
        // move(alphabet[letterIndex + 1],number - 2,++min,'downRight')
        // move(alphabet[letterIndex - 1],number - 2,++min,'downLeft')
        // move(alphabet[letterIndex - 2],number - 1,++min,'leftDown')
        // move(alphabet[letterIndex - 2],number + 1,++min,'leftUp')
        
    }
    move(letter,number)
    console.log(result)
}

function createChessMatrix() {
    let total = 0
    let row = 1

    const chessMatrix = {}
    while(total < 64) {
        if(total && total % 8 === 0) row++;
        chessMatrix[row] ? chessMatrix[row].push(total+1) : chessMatrix[row] = [total+1]
        total++
    }

    return chessMatrix
}



knight('a3','e3')

/*
let horizontalDistance = (endLetter.charCodeAt(0) - 97) - letterIndex
        console.log(horizontalDist)

// let letterIndex = letter.charCodeAt(0) - 97

    // let min = 0
        // let startPosition = letter.charCodeAt(0) - 96 + (number * 8) - 8


// let chessMatrix = [
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    // ]
    // while(total > 0) {
    //     if(total !== 64 && total % 8 === 0) row++;
    //     chessMatrix[row].unshift(total)
    //     total--
    // }

  // let moves = ['upRight','rightUp','rightDown','downRight','downLeft','leftDown','leftUp','upLeft']

switch(letter) {
            case letter === 'a' && number < 3:
                possibleMoves = ['upRight','rightUp','rightDown']
                break 
            case letter === 'a':
                possibleMoves = ['upRight','rightUp','rightDown','downRight']
                break 
            case letter === 'h' && number < 3:
                possibleMoves = ['upLeft','']
        }

moves.filter(move => {
            switch(letter) {
                case letter === 'a':
                    return move !== 'upLeft' && move !== 'leftDown' && move !== 'downLeft' && move !== 'leftUp'
                case letter === 'h':
                    
            }
        })
const letterMap = {
        'a':1,
        'b':2,
        'c':3,
        'd':4,
        'e':5,
        'f':6,
        'g':7,
        'h':8
    }

    const numberMap = {
        '1':0,
        '2':8,
        '3':16,
        '4':24,
        '5':32,
        '6':40,
        '7':48,
        '8':56
    }

// let [finishRow,finishCol] = finish.split('')
    // const finishPosition = colMap[finishRow] + rowMap[finishCol]
    // console.log(startPosition,finishPosition)
    // const distance = finishPosition - startPosition
*/