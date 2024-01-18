

const findMinArrowShots = (points) => {
     
    if(points.length === 1) return 1
    points = points.sort((a,b) => a[1] - b[1])
    let arrows = points.length
    let maxPoint = points[0][1]
    
    for(let i = 0;i < points.length - 1;i++) {

        if(maxPoint >= points[i + 1][0]) arrows--;
        else maxPoint = points[i + 1][1]
    }
    return arrows
}


const testCases = [
    [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]],
    [[1,2],[3,4],[5,6],[7,8]],
    [[10,16],[2,8],[1,6],[7,12]]
]

findMinArrowShots(testCases[1])

/*
const findMinArrowShots = (points) => {
     
    if(points.length === 1) return 1
    points = points.sort((a,b) => a[1] - b[1])
    let arrows = points.length
    let maxPoint = points[0][1]
    
    for(let i = 0;i < points.length - 1;i++) {

        let [ currFirst,currLast ] = points[i]
        let [ nextFirst,nextLast ] = points[i + 1]

        if(maxPoint >= nextFirst) arrows--;
        else maxPoint = nextLast
    }
    return arrows
}



const findMinArrowShots = (points) => {

    points = points.sort((a,b) => a[0] - b[0])
    let arrows = 0
    let maxPoint = points[0][1]

    for(let i = 0;i < points.length - 1;i++) {
        let [ first, last ] = points[i]
        let [ nextFirst,nextLast ] = points[i + 1]
        if(last >= nextFirst) {
            if(maxPoint >= nextFirst || last < nextFirst) arrows++;
            else maxPoint = points[i + 1][1]
        }else {
            arrows++
        }
    }
    return arrows
}
*/