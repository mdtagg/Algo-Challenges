function power(array) {
	let subArray = []
    
    let count = 0
    while(count < 1) {
        let set = []
        for(let i = 0;i < array.length;i++) {
            set.push(array[i])
            if(i >= 1) {
                for(let j = set.length - 1;j >= 0;j--) {
                    subArray.unshift(set[j])
                }
                subArray.push(set)
                console.log(subArray)
                count++
                return
            }
        }
    }
    console.log(subArray)
}

power([1,2,3])

// subArray[subArray.length - 1 !== array]