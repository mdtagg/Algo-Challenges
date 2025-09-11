

const peopleAwareOfSecret = (n,delay,forget) => {
  const MOD = 10e9 + 7;

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  let shareCount = 0;
  let totalAware = 1;

  for(let day = 2;day <= n;day++) {

    const newSharers = day - delay >= 1 ? dp[day - delay] : 0;
    const peopleWhoForget = day - forget >= 1 ? dp[day - forget] : 0;

    shareCount = (newSharers + shareCount - peopleWhoForget + MOD) % MOD;
    dp[day] = shareCount;
    totalAware = (totalAware + shareCount - peopleWhoForget + MOD) % MOD;
  }
  return totalAware;
}

peopleAwareOfSecret(6,2,4)

/*
var peopleAwareOfSecret = function(n, delay, forget) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  
  let shareCount = 0;
  let totalAware = 1;
  
  for (let day = 2; day <= n; day++) {
      const newSharers = (day - delay >= 1) ? dp[day - delay] : 0;
      const peopleWhoForget = (day - forget >= 1) ? dp[day - forget] : 0;
      
      shareCount = (shareCount + newSharers - peopleWhoForget + MOD) % MOD;
      
      const todayAware = shareCount;
      dp[day] = todayAware;
      
      totalAware = (totalAware + todayAware - peopleWhoForget + MOD) % MOD;
  }
  
  return totalAware;
};


let total = 1;
  let knowSecret = []

  for(let i = 0;i < n;i++) {
    if(i === 0) continue;
    if(i % delay === 0) {
      knowSecret.push(total);
      total += total;
    }
    if(i % forget === 0) {
      total -= knowSecret.shift()
    }
  }
*/