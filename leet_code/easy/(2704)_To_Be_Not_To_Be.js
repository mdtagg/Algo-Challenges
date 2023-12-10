


const expect = (val1) => {

    return {
        toBe(val2) {
            if(val1 === val2) {
                return true
            }else {
                throw new Error("Not Equal")
            }
            
        },
        notToBe(val2) {
            if(val1 !== val2) {
                return true
            }else {
                throw new Error("Equal")
            }
        }
    }
}

expect(5)