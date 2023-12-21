

var imageSmoother = function(img) {

    const rowLen = img.length
    const colLen = img[0].length
    const result = Array.from({length:rowLen},() => new Array(colLen).fill(0))

    for(let i = 0;i < rowLen;++i) {
        for(let j = 0;j < colLen;++j) {

            let sum = 0
            let count = 0

            for(let x = Math.max(0,i - 1);x < Math.min(rowLen,i + 2);++x) {
                for(let y = Math.max(0,j - 1);y < Math.min(colLen, j + 2);++y) {
                    sum += img[x][y]
                    count+=1
                }
            }
            result[i][j] = Math.floor(sum / count)
        }
    }
    return result
};

imageSmoother([[100,200,100,1000],[200,50,200,2000],[100,200,100,3000]])

/*
STEPS

1. Initialize a new array with the structure of the original filled with zeros

2. Iterate through each column in each row

3. Create two more iterations with the iterations above that start and end at the right indexs

4. add the values at those indexs and divide them by the number of cells they touch

var imageSmoother = function(img) {
    const rows = img.length;
    const cols = img[0].length;
    const result = new Array(rows);

    //traverses down a row
    for (let i = 0; i < rows; ++i) {
        result[i] = new Array(cols);

        //traverses right a column
        for (let j = 0; j < cols; ++j) {
            let totalSum = 0;
            let count = 0;

            const rowStart = Math.max(0,i - 1)
            const rowLen = Math.min(rows,i + 2)

            //x is initialized to 0 if we are on row 0 or 1 and 1 if we are on row 2
            //x is constrained by the row length if were on row 3 and 
            for (let x = Math.max(0, i - 1); x < Math.min(rows, i + 2); ++x) {
                for (let y = Math.max(0, j - 1); y < Math.min(cols, j + 2); ++y) {
                    totalSum += img[x][y];
                    count += 1;
                }
            }
            result[i][j] = Math.floor(totalSum / count);
        }
    }

    return result;
};

const imageSmoother = (img) => {

    const result = Array.from({length:imgLength},() => Array(img[0].length).fill(0))
    
    for(let i = 0;i < img.length;i+=3) {
        for(let j = 0;j < img[i].length;j+=3) {

            let rowLen = Math.min(img[i].length - j,3)
            let colLen = Math.min(img.length - i,3)
            
            if(rowLen === 3) {
                if(colLen === 3) {
                    let corners = fourCorner(result,[[0,0],[0,2],[2,0],[2,2]])
                    let steps = fourStep(result,[[0,1],[1,0],[1,2],[2,1]])
                    // center(result,[[]])
                }
                else if(colLen === 2) {
                    fourCorner(result)
                    twoStep(result)
                }else {
                    oneCol(result)
                }
            }
            if(rowLen === 2) {
                if(colLen === 3) {
                    fourCorner(result)
                    twoStep(result)
                }
                else if(colLen === 2) {
                    fourCorner(result)
                }else {
                    oneCol(result)
                }
            }
            if(rowLen === 1) {
                oneRow(result)
            }
        }
    }
}

function fourCorner(result,points) {
    let sum = 0
    for(let i = 0;i < points.length;i++) {
        const [p1,p2] = points[i]
        sum += p1 + p2
    }

}



let left = 0
            let center = 0
            let right = 0
            let counter = 0
            
            for(let k = 0;k < rowLen;k++) {
                
                for(let l = 0;l < colLen;l++) {
                    counter++
                    left++
                    if(l)
                }
                left++
            }


const imageSmoother = (img) => {

    const imgLength = img.length
    const result = Array.from({length:imgLength},() => Array(img[0].length).fill(0))

    for(let row = 0;row < imgLength;row+=3) {

        let rowLength = img[row].length

        for(let col = 0;col < rowLength;col+=3) {
            const rowLen = Math.min(rowLength - col,3)
            const colLen = Math.min(img.length,3)
            const directions = getSqDirections(img,row,col)
            smooth(result,directions,rowLen,colLen,row,col)
            
        }
    }
}

function getSqDirections(img,i,j) {
    return {
        upLeft:(img[i][j] || 0),
        upCenter:(img[i][j + 1] || 0),
        upRight:(img[i][j + 2] || 0),
        centerLeft:(img[i + 1][j] || 0),
        center:(img[i + 1][j + 1] || 0),
        centerRight:(img[i + 1][j + 2] || 0),
        downLeft:(img[i + 2][j] || 0),
        downCenter:(img[i + 2][j + 1] || 0),
        downRight:(img[i + 2][j + 2] || 0)
    }
}

function smooth(result,directions,rowLen,colLen,i,j) {
    const {
        upLeft,
        upCenter,
        upRight,
        centerLeft,
        center,
        centerRight,
        downLeft,
        downCenter,
        downRight
    } = directions

    let cornerAmt = Math.min(rowLen, 4)
    let centerStepAmt = Math.min(rowLen * 2, colLen * 2)
    let centerAmt = rowLen * colLen

    result[i][j] = Math.floor((upLeft + upCenter + centerLeft + center) / cornerAmt)
    result[i][j + 1] = Math.floor((upLeft + upCenter + upRight + centerLeft + center + centerRight) / centerStepAmt)
    result[i][j + 2] = Math.floor((upCenter + upRight + center + centerRight) / cornerAmt)
    result[i + 1][j] = Math.floor((upLeft + upCenter + centerLeft + center + downLeft + downCenter) / centerStepAmt)
    result[i + 1][j + 1] = Math.floor((upLeft + upCenter + upRight + centerLeft + center + centerRight + downLeft + downCenter + downRight) / centerAmt)
    result[i + 1] [j + 2] = Math.floor((upCenter + upRight + center + centerRight + downCenter + downRight) / centerStepAmt)
    result[i + 2][j] = Math.floor((centerLeft + center + downLeft + downCenter) / cornerAmt)
    result[i + 2][j + 1] = Math.floor((centerLeft + center + centerRight + downLeft + downCenter + downRight) / centerStepAmt)
    result[i + 2][j + 2] = Math.floor((center + centerRight + downCenter + downRight) / cornerAmt)

}

const imageSmoother = (img) => {
    const imgLength = img.length
    const result = Array.from({length:imgLength},() => Array(imgLength).fill(0))
    for(let sqRowIdx = 0;sqRowIdx < imgLength;sqRowIdx+=3) {
        for(let sqColIdx = 0;sqColIdx < img[sqRowIdx].length;sqColIdx+=3) {
            const directions = getSqDirections(img,sqRowIdx,sqColIdx)
            console.log(directions)
            smoothCorners(result,directions)
        }
    }
}

function getSqDirections(img,i,j) {
    return {
        upLeft:img[i][j],
        upCenter:(img[i][j + 1] || 0),
        upRight:(img[i][j + 2] || 0),
        centerLeft:img[i + 1][j],
        center:(img[i + 1][j + 1] || 0),
        centerRight:(img[i + 1][j + 2] || 0),
        downLeft:img[i + 2][j],
        downCenter:(img[i + 2][j + 1] || 0),
        downRight:(img[i + 2][j + 2] || 0)
    }
}

function smoothCorners(result,directions) {
    
}




console.log(0 % 2)
    const result = Array.from({length:imgLength},() => Array(imgLength).fill(0))
    for(let i = 0;i < img.length;i++) {
        for(let j = 0;j < img[i].length - 1;j++) {
            if(i % 2 === 0 && j % 2 === 0) {
                result[i][j]
            }
        }
    }




    let firstCorner = 0
    let firstStep = 0
    let secondCorner = 0

    for(let i = 0;i < img.length;i+=3) {
        for(let j = 0;j < img[i].length;j+=3) {
            for(let k = 0;k < 3;k++) {
                for(let l = 0;l < 3;l++) {
                    if()
                }
            }
        }
    }
*/