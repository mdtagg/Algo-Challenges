

const isPathCrossing = (path) => {

    let currPosition = [0,0]
    let visited = new Set().add(`${currPosition[0]},${currPosition[1]}`)

    function move(currPosition,direction) {
        switch(direction) {
            case "N":
                currPosition[1]++
                break 
            case "E":
                currPosition[0]++
                break 
            case "S":
                currPosition[1]--
                break 
            case "W":
                currPosition[0]--
                break
        }
    }

    for(let i = 0;i < path.length;i++) {
        move(currPosition,path[i])
        let strPoint = `${currPosition[0]},${currPosition[1]}`
        if(visited.has(strPoint)) return true
        visited.add(strPoint)
    }
    return false
}

isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS")

/*

*/