

const maximumWealth = function(accounts) {
    let result = 0;

    for(let person of accounts) {
      let totalWealth = 0
      for(let wealth of person) {
        totalWealth += wealth
      }
      result = Math.max(result,totalWealth)
    }
    return result
};

maximumWealth([[1,2,3],[3,2,1]])