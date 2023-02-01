function checkCashRegister(price, cash, cid) {
    let changeDue = parseCents(cash-price)
    let totalCash = 0
    let denominations = [.01,.05,.10,.25,1,5,10,20,100]
    .map(item => parseCents(item))
    let cashAmounts = []
    let newRegister = []
    cid.forEach(item => {
      totalCash += parseCents(item[1])
      newRegister.push([item[0],0])
    })
    if(totalCash === changeDue) {
      return {status:'CLOSED',change:cid}
    }
    cid = cid.map(item => {return [item[0],parseCents(item[1])]})
    cid.forEach((item,index) => {
      cashAmounts.push(
        [item[0],item[1] / denominations[index]]
      )
    })
    // console.log(cashAmounts)
    while(changeDue > 0) {
      for(let i = cid.length - 1;i >= 0;i--) {
        let remainingChange = changeDue - denominations[i]
        if(remainingChange >= 0 && cashAmounts[i][1] !== 0){
          changeDue = remainingChange
          cashAmounts[i][1]--
          newRegister[i][1]++
          break
        }
        if(i === 0 && remainingChange > 0) {
          changeDue = 0
          newRegister = {}
          break
        }
      }
    }
    if(!newRegister.length) {
      return {status:"INSUFFICIENT_FUNDS",change:[]}
    }
    newRegister = newRegister.map((item,index) => {
      return [item[0],item[1]*denominations[index]/100]
    })
    newRegister = newRegister.reverse().filter(item => {
      return item[1] !== 0
    })
    // console.log(newRegister)
    return {status:"OPEN",change:newRegister}
  }
  
  function parseCents(cash) {
    if(cash.toString().includes('.')) {
    cash = cash.toString().split('.')
    cash[0] = parseInt(cash[0] * 100)
    cash[1] = cash[1].split('')
    for(let i = 0;i < cash[1].length;i++) {
      i === 0 ? cash[1][0] = parseInt(cash[1][0]) * 10 : 
      cash[1][1] = parseInt(cash[1][1]) * 1
    }
    cash[1] = cash[1].reduce((total,amt) => {
      return total + amt
    })
    return cash.reduce((total,amt) => {
      return total + amt
    })
    }else {
      return cash * 100
    }
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  //   parseAmounts(amounts)
  // }
  
  // function parseAmounts(amounts) {
  
  //   // console.log(amounts)
  
  // function parseCash(cashAmt) {
  //   // cashAmt = cashAmt.toString()
  //   // .split('.')
  //   // .map(item => parseInt(item))
  //   // cashAmt[0] *= 100
  //   // cashAmt = cashAmt.reduce((total,amt) => {
  //   //   return total + amt
  //   // })
  //   return (cashAmt * 100)/100
  // }
  
  // let changeDue = parseCash(cash - price);
  //   // console.log(changeDue)
  //   let cashAmounts = []
  //   let denominations = [.01,.05,.10,.25,1,5,10,20,100]
  //   cid = cid.map(item => {
  //     return [item[0],parseCash(item[1])]
  //   })
  //   // console.log(cid)
  //   let amounts = []
  //   cid.forEach((entry,index) => {
  //     console.log(entry[1],denominations[index])
  //     let denomination = entry[0]
  //     let cashAmt = parseCash(entry[1] / denominations[index])
  //     cashAmounts.push(
        
  //       [denomination, cashAmt]
  //       )
  //     })
  //   // console.log(cashAmounts)
  //   // let count = 0
  //   // while(changeDue > 0) {
  //   //   // console.log(count)
  //   //   for(let i = cid.length - 1;i >= 0;i--) {
  //   //     let remainingChange = 
  //   //     parseFloat((changeDue - denominations[i]).toFixed(2))
  //   //     // console.log(remainingChange)
  //   //     if(remainingChange > 0 && cashAmounts[i][1] !== 0) {
  //   //       changeDue = parseFloat(changeDue - denominations[i]).toFixed(2)
  //   //       // console.log(changeDue)
  //   //       cashAmounts[i][1]--
  //   //       // console.log(cashAmounts)
  //   //       amounts.push(denominations[i])
  //   //       count = parseFloat(count + denominations[i])
  //   //       // console.log(amounts)
  //   //       // console.log(count)
  //   //       break
  //   //     }
  //   //     // count++
  //   //   }
  //   //   break
  //   // }
  
  // let cashDue = cash - price
  //   let denominations = [100,20,10,5,1,.25,.10,.05,.01]
  //   cid = cid.reverse()
  //   let newCid = []
  //   cid.forEach(item => newCid.push([item[0],0]))
  //   // console.log(newCid)
  //   while(cashDue >= 0) {
  //     for(let i = 0;i < cid.length;i++) {
  //       if(cashDue - denominations[i] > 0 &&
  //       cid[i][1] !== 0) {
  //           cashDue -= denominations[i]
  //           cashDue = cashDue.toFixed(2)
  //           newCid[i][1] += denominations[i]
  //           cid[i][1] -= denominations[i]
  //           console.log(cashDue)
  //           break
  //        }
  //       //  break
  //     }
  //     // break
  //   }
  //   console.log(newCid)
  
  // let changeDue = cash - price
  //   // console.log(changeDue)
  //   let denominations = [100,20,10,5,1,.25,.10,.05,.01]
  //   cid = cid.reverse()
  //   let test = []
  //   // console.log(cid)
  //   while(changeDue > 0) {
  //     for(let i = 0;i < cid.length;i++) {
  //       if(changeDue - denominations[0] >= 0 &&
  //       cid[i][1] !== 0) {
  //         changeDue -= denominations[0]
  //         changeDue = changeDue.toFixed(2)
  //         cid[i][1] -= denominations[0]
  //         test.push(denominations[0])
  //         break
  //       }else {
  //         // cid.splice(0,1)
  //         denominations.splice(0,1)
  //       }
  //     }
  //   }
  //   // console.log(test)
  
  // let changeDue = cash - price
  //   cid = cid.reverse()
  //   let denominations = [100,20,10,5,1,.25,.10,.05,.01]
  //   let changeAmounts = []
  //   cid.forEach((item,index) => {
  //     let layer = []
  //     layer.push(item[0],parseInt((item[1] / denominations[index]).toFixed()))
  //     if(denominations[index] === cash) {
  //       layer[1] += 1
  //     }
  //     changeAmounts.push(layer)
  //   })
  //   // console.log(changeAmounts)
  //   let keys = cid.map(item => {
  //     return [item[0],0]
  //   })
  //   // console.log(keys)
  //   while(changeDue > 0) {
  //     for(let i = cid.length - 1;i >= 0;i--) {
  //       if(changeDue % denominations[i] === 0) {
  //         changeDue -= denominations[i]
  //         keys[i][1] += denominations[i]
  //         changeAmounts[i][1] -= 1
  //         break
  //       }
  //     }
  //   }
  //   keys = keys.filter(item => item[1] !== 0)
  //   console.log(keys)
  //   return {status:'OPEN',change:keys}
    
  //   while(changeDue > 0) {
  //     for(let i = cid.length - 1;i >=0;i--) {
  //       if(changeDue % denominations[i] === 0) {
  //         changeDue -= denominations[i]
  //         changeAmounts[i][1] -= 1
  //         console.log(changeDue)
  //         break
  //       }else {
  //         // console.log(changeAmounts)
  //         // changeAmounts.splice(0,1)
  //       }
  //     }
  //   }
  //   console.log(changeAmounts)
  
  // let totalCash = 0
  //   cid.forEach(entry => totalCash += entry[1])
  //   totalCash = totalCash.toFixed(2)
  
  //   if(changeDue > totalCash) return {status:'INSUFFICIENT_FUNDS', change: []}
   
  //   if(changeDue < totalCash)
  //   cid = cid.reverse()
  //   let change = []
  //   let denominations = [100,20,10,5,1,.25,.10,.05,.01]
  //   while(changeDue > 0) {
  //     for(let i = cid.length - 1;i >= 0;i--) {
  //       if(cid[i][1] % denominations[i] === 0) {
  //         changeDue -= denominations[i]
  //         cid[i][1] -= denominations[i]
  //         break
  //       }
  //     }
  //   }
  //   if(cid.every(item => item[1] === 0)) return {status:'CLOSED',change:cid}
  
  //  let denominations = [100,20,10,5,1,0.25,0.10,0.05,.01].reverse()
  //   console.log(denominations)
  
  //   while(changeDue > 0) {
  //     for(let i = denominations.length - 1;i > 0;i--) {
  //       if(changeDue % denominations[i] === 0) {
  //         changeDue -= denominations[i]
  //         cid[i][1] -= denominations[i]
  //       }
  //     }
  //   }
  // console.log(cid)
  
  // let denominations = [.01,.05,.10,.25,1,5,10,20,100].reverse()
    // cid = cid.reverse()
    // cid.forEach((entry,index) => {
    //   cashAmounts[entry[0]] = (entry[1] / denominations[index]).toFixed()
    //   if(denominations[index] === cash) {
    //     cashAmounts[entry[0]] += 1
    //   }
    // })
  
  // while(changeDue > 0) {
  //   for(let i in cashAmounts) {
  //     if(changeDue % denominations[0] === 0) {
  //       changeDue -= denominations[0]
  //       cashAmounts[i] -= 1
  //       console.log(changeDue)
  //     }
  //     else {
  //       denominations.splice(0,1)
  //     }
  //   }
  //   break
  //   }
  // console.log(denominations)
  // console.log(cashAmounts)
  
  // for(let i in cashAmounts) {
  //     console.log(changeDue,denominations[0])
  //     if(changeDue % denominations[0] === 0) {
  //       changeDue -= denominations[0]
  //       cashAmounts[i] -= denominations[0]
  //     }else {
  //       denominations.splice(0,1)
  //     }
  
  // let cashAmounts = {}
  //   cid = cid.reverse()
  //   let denominations = [.01,.05,.10,.25,1,5,10,20,100].reverse()
  //   cid.forEach((entry,index) => {
  //     cashAmounts[entry[0]] = (entry[1] / denominations[index]).toFixed()
  //   })
  //   for(let i in cashAmounts) {
  //     if(cid[i] % price === 0) {
  
  //     } else {
  //       cid.splice(0)
  //     }
  //   }
  //   console.log(cashAmounts)
  //   console.log(cid)