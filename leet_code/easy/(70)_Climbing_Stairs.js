

const climbStairs = (n) => {
    
    if(n < 2) return 1

    let firstStep = 1
    let secondStep = 1
    let thirdStep = 0

    for(let i = 2;i <= n;i++) {
        thirdStep = firstStep + secondStep
        firstStep = secondStep
        secondStep = thirdStep
    }

    return thirdStep
} 

climbStairs(5)

/*
1,1,1,1

1,2,1
2,1,1
1,1,2

2,2

1,1,1
1,2
2,1
*/