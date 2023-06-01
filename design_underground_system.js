var UndergroundSystem = function() {
    this.travelLog = {
        // 1:{
        //     entries:[{ newbury:3, to:4 },{newbury:5,to:6}],
        //     status:'checked in'
        // }
    }
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if(!this.travelLog.hasOwnProperty(id)) {
        this.travelLog[id] = {}
        // this.travelLog[id][stationName] = t
        this.travelLog[id]["checkIn"] = []
        this.travelLog[id]["checkIn"][stationName] = t
        this.travelLog[id]["entries"] = []
        this.travelLog[id]["status"] = "checked in"
    }
    console.log(this.travelLog)
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(this.travelLog.hasOwnProperty(id) && this.travelLog[id]["status"] === "checked in") {
        const checkInEntry  = this.travelLog[id]["checkIn"]
        const riderEntry = {}
        riderEntry[stationName] = t
        this.travelLog[id]["entries"].push({checkInEntry,riderEntry})
        this.travelLog[id]["status"] = "checked out"
    } else {

    }
    console.log(this.travelLog)

};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const averages = []
    for(let id in this.travelLog) {
        const travelPoints = Object.getOwnPropertyNames(this.travelLog[id])
        if(travelPoints[0] === startStation && travelPoints[2] === endStation) {
            const startStationTime = this.travelLog[id][startStation]
            const endStationTime = this.travelLog[id][endStation]
            const travelTime = Math.abs(startStationTime - endStationTime)
            averages.push(travelTime)            
        }
    }
    // console.log(averages)
    const numberOfEntries = averages.length
    const test = averages.reduce((total,amt) => {
        return total + amt
    })
    console.log(test / numberOfEntries)
};

const test = new UndergroundSystem()
test.checkIn(1,'newbury',3)
test.checkOut(1,"thousand oaks",4)

// test.checkIn(1,'newbury',5)
// test.checkOut(1,"thousand oaks",6)

// test.checkIn(2,'thousand oaks',1)
// test.checkOut(2,'westlake',3)

// test.checkIn(3,'newbury',8)
// test.checkOut(3,'thousand oaks',9)

// test.checkIn(4,'thousand oaks',10)
// test.checkOut(4,'westlake',11)

// console.log(test)

// test.getAverageTime('newbury','thousand oaks')
// test.getAverageTime('thousand oaks','westlake')

// && (this.travelLog["state"] === "checked out" || !this.travelLog.hasOwnProperty('state'))