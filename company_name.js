var distinctNames = function(ideas) {
    let uniqueNames = []
    ideas.forEach((idea,index) => {
        let restOfArr = ideas.slice(index)
        // console.log(restOfArr)
        let namePairs = []
        restOfArr.forEach(item => {
            // console.log(item)
            let firstLetter1 = idea.slice(0,1)
            let firstLetter2 = item.slice(0,1)
            let body1 = idea.slice(1)
            let body2 = item.slice(1)
            // console.log({body1,body2})
            
            let uniqueTest1 = firstLetter1.concat(body2)
            let uniqueTest2 = firstLetter2.concat(body1)
            console.log({uniqueTest1,uniqueTest2})
            if(!ideas.includes(uniqueTest1) && !ideas.includes(uniqueTest2)) {
                namePairs.push(`${uniqueTest1} ${uniqueTest2}`)
                namePairs.push(`${uniqueTest2} ${uniqueTest1}`)
                
            }
            
        })
        if(namePairs.length) {
            uniqueNames.push(namePairs)
        }
    })
    uniqueNames = uniqueNames.flat()
    console.log(uniqueNames)
}

distinctNames(["coffee","donuts","time","toffee"])


// let uniqueNames = []
//     let strHeads = ideas.map(item => {
//         return item.slice(0,1)
//     })
//     console.log(strHeads)
//     let strBodies = []
//     ideas.forEach(idea => strBodies.push(idea.slice(1)))
//     // console.log(strBodies)
//     let duplicates = []
//     strBodies.forEach((item,index) => {
//         let test = strBodies.slice(index + 1)
//         if(test.includes(item)) {
//             duplicates.push(item)
//         }
//     })
//     // console.log(duplicates)
//     let duplicateIndex = []
//     duplicates.forEach(duplicate => {
//         strBodies.forEach((item,index) => {
//             if(duplicate === item) {
//                 duplicateIndex.push(index)
//             }
//         })
//     })
//     console.log(duplicateIndex)
//     for(let i = 0;i < ideas.length;i++) {
//         if(strHeads[duplicateIndex[0]] !== strHeads[duplicateIndex[1]]) {
//             console.log('test')
//         }
//     }
// };

