

const minTimeToVisitAllPoints = function(points) {

    let seconds = 0
    
    for(let i = 0;i < points.length - 1;i++) {

        let horizontalDist = Math.abs(points[i + 1][0] - points[i][0])
        let vertDist = Math.abs(points[i + 1][1] - points[i][1])
        let totalDist = [horizontalDist,vertDist]
        
        while(totalDist[0] > 0 || totalDist[1] > 0) {
            if(totalDist[0] > 0 && totalDist[1] > 0) {
                totalDist[0]--
                totalDist[1]--
            }
            else if(totalDist[0] === 0 && totalDist[1] > 0) {
                totalDist[1]--
            }
            else {
                totalDist[0]--
            }
            seconds++
        }
    }
    console.log(seconds)
}

    
    
    minTimeToVisitAllPoints(
        [[3,2],[-2,2]]
    )
