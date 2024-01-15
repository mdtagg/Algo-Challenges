
const findWinners = (matches) => {

    let answer = [[],[]]
    let winners = new Set()
    let losers = new Map()

    for(let i = 0;i < matches.length;i++) {

        let [ winner,loser ] = matches[i]
        losers.set(loser,(losers.get(loser) || 0) + 1)
        winners.add(winner)
        winners.add(loser)
    }

    for(let player of winners) {
        if(!losers.get(player)) answer[0].push(player);
        if(losers.get(player) === 1) answer[1].push(player);
    }

    answer[0] = answer[0].sort((a,b) => a - b)
    answer[1] = answer[1].sort((a,b) => a - b)

    return answer
}

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])

/*
const findWinners = (matches) => {

    let answer = [[],[]]
    let winners = new Set()
    let losers = new Map()

    for(let i = 0;i < matches.length;i++) {

        let [ winner,loser ] = matches[i]
        losers.set(loser,(losers.get(loser) || 0) + 1)
        winners.add(winner)
        winners.add(loser)
    }

    for(let player of winners) {
        if(!losers.get(player)) {
            answer[0].push(player)
        }
    }

    for(let [playerNum,losses] of losers) {
        if(losses === 1) answer[1].push(playerNum);
    }

    answer = answer.map(entry => entry.sort((a,b) => a - b))
    return answer
}
*/