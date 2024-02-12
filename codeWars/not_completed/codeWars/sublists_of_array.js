function power(array) {
    
    console.log(array)
    // let test =[ [], [ 304 ], [ 304, 50 ], [ 304, 50, 578 ], [ 304, 50, 578, 882 ], [ 304, 50, 882 ], [ 304, 578 ], [ 304, 578, 882 ], [ 304, 882 ], [ 50 ], [ 50, 578 ], [ 50, 578, 882 ], [ 50, 882 ], [ 578 ], [ 578, 882 ], [ 882 ] ]
	// console.log(testTwo)
    let subArray = []
    let set = []
    for(let i = 0;i < array.length;i++) {
        subArray.push([array[i]])
        set.push(array[i])
        if(i !== 0) {
            let subSet = []
            for(let i = 0;i < set.length - 1;i++) {
                subSet.push(set[i])
                subSet.push(set[set.length - 1])
            }
            if(i === 1) {
                subArray.push(subSet)
                continue
            }
            
            while(subSet.length) {
                subArray.push(subSet.splice(0,2))
            }
            
            subArray.push(set.slice(0))
        }
       
    }
    subArray.unshift([])
    console.log(subArray)
}

power([ 50, 304, 578, 882 ])

// let count = 0
    // while(count < 1) {
    //     let set = []
        
    // }
    // console.log(subArray)

// subArray[subArray.length - 1 !== array]


// let set = []
//         for(let i = 0;i < array.length;i++) {
//             set.push(array[i])
//             if(i >= 1) {
//                 for(let j = set.length - 1;j >= 0;j--) {
//                     subArray.unshift(set[j])
//                 }
//                 subArray.push(set)
//                 console.log(subArray)
//                 count++
//                 return
//             }
//         }