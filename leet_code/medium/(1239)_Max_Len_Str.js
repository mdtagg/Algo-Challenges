
const maxLength = (arr) => {

    let max = 0

    function checkDuplicates(str,checkArr=[]) {
        let set = []                                                                                     
        for(let i = 0;i < str.length;i++) {
            if(set.includes(str[i]) || checkArr.includes(str[i])) {
                set = [];
                break
            }
            if(!set.includes(str[i])) set.push(str[i]);
        }
        return set
    }

    for(let left = 0;left < arr.length;left++) {
       let leftSet = checkDuplicates(arr[left])
       if(!leftSet.length) continue;
        else {
            max = Math.max(max,leftSet.length)
            for(let middle = left + 1;middle < arr.length;middle++) {
                let middleSet = checkDuplicates(arr[middle],leftSet)
                if(!middleSet.length) continue;
                else {
                    max = Math.max(max,leftSet.length + middleSet.length)
                    let testArr = [...leftSet,...middleSet]
                    let count = middle + 1
                    
                    while(count < arr.length) {
                        for(let right = count; right < arr.length;right++) {
                            let rightSet = checkDuplicates(arr[right],testArr)
                            if(!rightSet.length) continue;
                            else testArr.push(...rightSet)
                        }
                        max = Math.max(max,testArr.length)
                        testArr = [...leftSet,...middleSet]
                        count++
                    }
                }
            }
       }
    }
    return max
}


maxLength(["abc","ab","cd","efg","ef","gh"])

/*

const maxLength = (arr) => {

    let max = 0
    let arrSet = []
    let left = 0
    let middle = 1

    while(left < arr.length) {

        for(let i = 0;i < arr[left].length;i++) {
            if(!arrSet.includes(arr[left][i])) arrSet.push(arr[left][i]);
            else {
                arrSet = []
                break
            }
        }
        max = Math.max(max,arrSet.length)
        if(left === arr.length - 1) break;

        while(middle < arr.length) {

            let right = middle
            let nextChars = []
            let count = right

            while(count < arr.length) {
                let chars = []
                for(let j = 0;j < arr[right].length;j++) {
                    if(nextChars.includes(arr[right][j]) || arrSet.includes(arr[right][j]) || chars.includes(arr[right][j])) {
                        chars = []
                        break
                    }else {
                        chars.push(arr[right][j])
                    }
                }
                if(chars.length) nextChars.push(...chars);
                right++
                if(right === arr.length) {
                    max = Math.max(max,arrSet.length + nextChars.length)
                    nextChars = []
                    count++
                    right = count
                }
            }
            max = Math.max(max,arrSet.length + nextChars.length)
            middle++
        }
        arrSet = []
        left++
        middle = left + 1
    }
    return max
}


const maxLength = (arr) => {

    let max = 0
    let arrSet = [[],[],[]]
    let left = 0
    let middle = 1
    let right = 2
    
    for(let i = 0;i < arr.length;i++) {
        if(!arrSet.includes(arr[i])) {
            arrSet[0][i] = arr[i]
        }else {
            arrSet[0] = []
            continue
        }
        
        for(let j = 1;j < arr.length;i++) {
            if(!arrSet[0].includes(arr[j])) {
                arrSet[1].push(arr[j])
            }else {
                arrSet[1] = []
                continue
            }
            for(let k = 2;k < arr.length;k++) {
                if(arrSet[i].includes(arrSet[k]) || arrSet[j].includes(arrSet[k])) {
                    arrSet[2] = []
                    continue
                }else {
                    arrSet[2].push(arr[k])
                }
            }
        }
    }
}
*/