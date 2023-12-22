


const maxWidthOfVerticalArea = (points) => {

    const widths = []
    let max = 0

    for(let i = 0;i < points.length;i++) {
        widths[i] = points[i][0]
    }
    widths.sort((a,b) => a - b)
    
    for(let i = 0;i < widths.length - 1;i++) {
        let diff = widths[i + 1] - widths[i]
        if(diff > max) max = diff
    }
    return max
}

maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])