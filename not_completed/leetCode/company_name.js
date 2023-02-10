// var distinctNames = function(ideas) {
//     let left = 0
//     let right = left + 1
//     let uniqueNames = []
//     while(left < ideas.length - 1) {
//         let firstLetter1 = ideas[left][0]
//         let firstLetter2 = ideas[right][0]
//         let body1 = ideas[left].slice(1)
//         let body2 = ideas[right].slice(1)
//         let uniqueTest1 = firstLetter1.concat(body2)
//         let uniqueTest2 = firstLetter2.concat(body1)
//         console.log({uniqueTest1,uniqueTest2})
//         if(!ideas.includes(uniqueTest1) && 
//             !ideas.includes(uniqueTest2)) {
//                 uniqueNames.push(`${uniqueTest1} ${uniqueTest2}`)
//                 uniqueNames.push(`${uniqueTest2} ${uniqueTest1}`)
//         }
//         if(right === ideas.length - 1) {
//             left++
//             right = left + 1
//         }else {
//             right++

//         }
//     }
//     console.log(uniqueNames)
// }



// const distinctNames = (ideas) => {
//     const sets = separateIdeasByFirstLetter(ideas);
//     const same = createIntersectionSet(sets);
//     const result = uniqueNames(sets, same);
//     return result;
//  };
 
//  const separateIdeasByFirstLetter = (ideas) => {
//     const sets = [];
//     for (let i = 0; i < 26; i++) {
//         sets[i] = new Set();
//     }
//     for (let s of ideas) {
//         sets[s.charCodeAt(0) - 97].add(s.substring(1));
//     }
//     console.log(sets)
//     return sets;
//  };
 
//  const createIntersectionSet = (sets) => {
//     const same = [];
 
//     for (let i = 0; i < 26; i++) {
//         same[i] = Array(26).fill(0);
//     }
 
//     for (let i = 0; i < 26; i++) {
//         for (let s of sets[i]) {
//             console.log(s)
//             for (let j = i + 1; j < 26; j++) {
//                 if (sets[j].has(s)) {
//                     same[i][j]++;
//                 }
//             }
//         }
//     }
//     console.log(same)
//     return same;
//  };
 
//  const uniqueNames = (sets, same) => {
//     let result = 0;
//     for (let i = 0; i < 26; i++) {
//         for (let j = i + 1; j < 26; j++) {
//             result +=
//                 (sets[i].size - same[i][j]) * (sets[j].size - same[i][j]) * 2;
//         }
//     }
//     // console.log(result)
//     return result;
//  };

var distinctNames = (ideas) => {
    let duplicates = []
    for(let i = 0;i < ideas.length;i++) {
        duplicates.includes(ideas[i]) ? 
        ideas.splice(i,1) :
        duplicates.push(ideas[i])
    
    }
    console.log(ideas)
}

 distinctNames(["coffee","donuts","time","toffee",'coffee'])

// let uniqueNames = []
//     ideas.forEach((idea,index) => {
//         let restOfArr = ideas.slice(index)
//         // console.log(restOfArr)
//         let namePairs = []
//         restOfArr.forEach(item => {
//             // console.log(item)
//             let firstLetter1 = idea.slice(0,1)
//             let firstLetter2 = item.slice(0,1)
//             let body1 = idea.slice(1)
//             let body2 = item.slice(1)
//             // console.log({body1,body2})
//             let uniqueTest1 = firstLetter1.concat(body2)
//             let uniqueTest2 = firstLetter2.concat(body1)
//             console.log({uniqueTest1,uniqueTest2})
//             if(!ideas.includes(uniqueTest1) && !ideas.includes(uniqueTest2)) {
//                 namePairs.push(`${uniqueTest1} ${uniqueTest2}`)
//                 namePairs.push(`${uniqueTest2} ${uniqueTest1}`)
//             }
            
//         })
//         if(namePairs.length) {
//             uniqueNames.push(namePairs)
//         }
//     })
//     uniqueNames = uniqueNames.flat()
//     console.log(uniqueNames)


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

