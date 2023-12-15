

const destCity = (paths) => {

    const outgoingSet = new Set()
    const destinationSet = new Set()

    for(let i = 0;i < paths.length;i++) {
        outgoingSet.add(paths[i][0]);
        destinationSet.add(paths[i][1])
    }

    for(let i = 0;i < paths.length;i++) {
        for(let j = 0;j < paths[i].length;j++) {
            if(!outgoingSet.has(paths[i][j]) && destinationSet.has(paths[i][j])) {
                return paths[i][j]
            }
        }
    }
}

destCity([["B","C"],["D","B"],["C","A"]])

/*
if(!outgoingSet.has(paths[i][0])) 
if(!destinationSet.has(paths[i][j])) 


cityMap.set(paths[i][j],(cityMap.get(paths[i][j]) || 0) + 1)

const destCity = (paths) => {

    let outgoing = paths[0][1]
    if(paths.length === 1) return outgoing

    for(let i = 1;i < paths.length;i++) {
        if(paths[i][0] === outgoing) {
            outgoing = paths[i][1]
        }
    }
    return outgoing
}
*/