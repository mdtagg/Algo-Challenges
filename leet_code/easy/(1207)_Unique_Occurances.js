

const uniqueOccurances = (arr) => {
    //initialize instance of map object
    let uniqueOccurancesMap = new Map()
    //iterate through our array
    for(let i = 0;i < arr.length;i++) {
        // increment the count of each value in our map
        uniqueOccurancesMap.set(arr[i],(uniqueOccurancesMap.get(arr[i]) || 0) + 1)
    }

    //initialize an instace of the set object 
    let occurances = new Set()
    //iterate through our map objects values 
        for(let val of uniqueOccurancesMap.values()) {
            
        //if our set does not have a value 
            if(!occurances.has(val)) {
            //add it to our set
                occurances.add(val)
            }else {
            //if our set does have a value return false
                return false
            }
        }

        //if we have not returned false return true
        return true
        
}

uniqueOccurances([1,2,2,1,1,3])