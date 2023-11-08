

const isReachableAtTime = (sx,sy,fx,fy,t) => {
    if(sx === fx && sy === fy && t === 1) return false
    
    let distX = Math.abs(sx - fx)
    let distY = Math.abs(sy - fy)

    let maxDist = Math.max(distX,distY)

    if(maxDist <= t) return true 
    return false
}

isReachableAtTime(1,3,2,2,2)

/*
const distance = [fy - sy, fx - sx]
    const [distX, distY] = distance
    if(distX === distY && t > 0) return true

    function downRight() {
        sy++
        sx++
    }

    function downLeft() {
        sy++
        sx--
    }

    function upLeft() {
        sy--
        sx--
    }

    function upRight() {
        sy--
        sx++
    }

    const moveSquare = distX > 0 && distY > 0 ? downRight :
    distX > 0 && distY < 0 ? downLeft : 
    distX < 0 && distY < 0 ? upLeft :
    upRight

    while(sx !== fx || sy !== fy) {
        while(sy !== fy && sx !== fx && t > 0) {
            moveSquare()
            t--
        }
        // if(t === 0) return false
        if(t === 0 || sx === fx && sy === fy) break
        sx !== fx && sx < fx ? sx++ : 
        sx !== fx && sx > fx ? sx-- :
        sy !== fy && sy < fy ? sy++ :
        sy--
        t--
    }
    if(sx === fx && sy === fy) return true
    return false



// switch(test) {
    //     case distX > 0 && distY > 0:
    //         downRight()
    //         break
    //     case distX > 0 && distY < 0:
    //         downLeft()
    //         break
    //     case distX < 0 && distY < 0:
    //         upLeft()
    //         break 
    //     case distX < 0 && distY > 0:
    //         upRight()
    //         break
    // }
    // console.log(test)

const distance = [fx-sx, fy-sy]
    console.log(distance)
    while(distance[0] || distance[1]) {
        if(t === 0) return false
        while(distance[1] !== )
        t--
    }

function moveSquare(direction) {
        switch(direction) {
            case "right":
                distance[0]--
                break 
            case "down-right":
                distance[0]--
                distance[1]--
                break
        }
    }
*/