

var SeatManager = function(n) {
    this.seats = []
    this.last = 0
}

SeatManager.prototype.reserve = function() {
    if(!this.seats.length) {
        return ++this.last
    }else {
        this.seats.sort((a,b) => a - b)
        return this.seats.shift()
    }
};

SeatManager.prototype.unreserve = function(seatNumber) {
    if(seatNumber === this.last) {
        this.last--
    }else {
        this.seats.push(seatNumber)
    }
};

const test = new SeatManager(18)

test.reserve()
test.reserve()
test.unreserve(1)
// test.unreserve(2)
// test.reserve()
// test.unreserve(1)
// test.reserve()
// test.unreserve(1)


// test.unreserve(1)

/*
var SeatManager = function(n) {
    this.seats = []
    for(let i = 1;i <= n;i++) {
        this.seats.push(i)
    }
}

SeatManager.prototype.reserve = function() {
    return this.seats.shift()
};

SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats.unshift(seatNumber)
    this.seats.sort((a,b) => a - b)
};

let i = 0
    while(!this.unreserved[i]) i++;
    let temp = this.unreserved[i]
    this.unreserved[i] = null 
    return temp

    this.seats[seatNumber - 1] = seatNumber
*/