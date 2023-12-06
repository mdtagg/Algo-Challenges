

const totalMoney = (n) => {

    let week = 1
    let day = week 
    let money = 1

    for(let i = 1;i < n;i++) {
        if(i % 7 === 0) {
            week++
            day = week
        }else {
            day++
        }
        money += day
    }
}

totalMoney(4)

/*
const totalMoney = (n) => {

    let week = 1
    let day = week
    let money = 1

    for(let i = 1;i < n + 1;i++) {
        if(i % 7 === 0) {
            week++
            day = week
        }
        money = day
        day += 1
    }
    return money
}
*/