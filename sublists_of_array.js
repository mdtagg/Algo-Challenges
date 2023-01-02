function power(array) {
	let subArray = []
    let set = []
    for(let i = 0;i < array.length;i++) {
        subArray.push(array[i])
        set.push(array[i])
        if(i !== 0) {
            let subSet = []
            for(let i = 0;i < set.length - 1;i++) {
                subSet.push(set[i])
                subSet.push(set[set.length - 1])
            }
            while(subSet.length) {
                subArray.push(subSet.splice(0,2))
            }
        }
       
    }
    subArray.unshift([])
    subArray.push(set)
    console.log(subArray)
    // let count = 0
    // while(count < 1) {
    //     let set = []
        
    // }
    // console.log(subArray)
}

power([1,2,3])

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