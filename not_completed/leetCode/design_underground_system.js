var UndergroundSystem = function() {
    this.avg = new Map();
    this.train = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, start, t) {
    this.train.set(id, [start, t]);
    // console.log(this.train.get(id))
};

UndergroundSystem.prototype.checkOut = function(id, end, t) {
    //destructures the starting station and the starting time
    const [start, s] = this.train.get(id);
    // joins starting and ending station names with a ,
    const key = [start, end].join();

    //if the rider has a start and stop that has been logged before
    if (this.avg.has(key)) {
        let [avg, cnt] = this.avg.get(key);

        console.log('cnt before', cnt)

        this.avg.set(key, [avg * (cnt/++cnt) + ((t - s)/cnt), cnt]);

        console.log('cnt after', cnt)
        
    } else {
        //sets the avg object with the time spent traveling and an initial counter
        this.avg.set(key, [(t - s), 1]);
    }
    this.train.delete(id);
    // console.log(this.avg)
};

UndergroundSystem.prototype.getAverageTime = function(start, end) {
    return this.avg.get([start, end].join())[0];
};

const test = new UndergroundSystem()

test.checkIn(1,'newbury',5)
test.checkOut(1,'thousand oaks',6)

test.checkIn(1,'newbury',6)
test.checkOut(1,'thousand oaks',8)

//THIRD TRY

// var UndergroundSystem = function() {
//     this.travelLog = {}
// };

// UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
//     if(!this.travelLog.hasOwnProperty(id)) {
//         this.travelLog[id] = {"entries":[]}
//     } 
//     this.travelLog[id]["checkIn"] = [stationName,t]
// };

// UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
//     if(this.travelLog.hasOwnProperty(id)) {
//         const [checkInStation,time] = this.travelLog[id]["checkIn"]
//         const rideEntry = {
//             [checkInStation]: time,
//             [stationName]:t
//         }
//         this.travelLog[id]["entries"].push(rideEntry)
//     }
//     console.log(this.travelLog)
// };

// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//     let test = []
//     for(id in this.travelLog) {
//         const rider = this.travelLog[id]
//         rider.entries.forEach(entry => {
//             const [checkInStation,checkOutStation] = Object.getOwnPropertyNames(entry)
//             if(checkInStation === startStation && checkOutStation === endStation) {
//                 const startTime = entry[checkInStation]
//                 const endTime = entry[checkOutStation]
//                 const travelTime = Math.abs(startTime - endTime)
//                 console.log(travelTime)
//                 test.push(travelTime)
//             }
//         })
//         this.travelLog[id]['entries'] = []
//     }
//     const numberOfEntries = test.length
//     test = test.reduce((total,amt) => {
//         return total + amt
//     })
//     console.log(test / numberOfEntries)
// };

// const test = new UndergroundSystem()

// test.checkIn(1,"newbury",4)
// test.checkOut(1,'thousand oaks',5)

// test.checkIn(1,"newbury",5)
// test.checkOut(1,'thousand oaks',6)

// test.getAverageTime('newbury','thousand oaks')

// test.checkIn(1,"newbury",4)
// test.checkOut(1,"thousand oaks",5)

// test.checkIn(1,"westlake",8)
// test.checkOut(1,"camarillo",9)

// test.checkIn(2,"thousand oaks",1)
// test.checkOut(2,"westlake",2)

// test.getAverageTime('newbury','thousand oaks')
/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

//FIRST SOLUTION

// var UndergroundSystem = function() {
//     this.travelLog = {}
// };

// UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
//     if(!this.travelLog.hasOwnProperty(id)) {
//         this.travelLog[id] = {}
//         this.travelLog[id][stationName] = t
//     }
// };

// UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
//     if(this.travelLog.hasOwnProperty(id)) {
//         this.travelLog[id][stationName] = t
//     }
// };

// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//     const averages = []
//     for(let id in this.travelLog) {
//         const travelPoints = Object.getOwnPropertyNames(this.travelLog[id])
//         if(travelPoints[0] === startStation && travelPoints[1] === endStation) {
//             const startStationTime = this.travelLog[id][startStation]
//             const endStationTime = this.travelLog[id][endStation]
//             const travelTime = Math.abs(startStationTime - endStationTime)
//             averages.push(travelTime)            
//         }
//     }
//     const numberOfEntries = averages.length
//     const test = averages.reduce((total,amt) => {
//         return total + amt
//     })
//     return test / numberOfEntries
// };

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

//SECOND SOLUTION (trying to solve for multiple check ins with the same Id)

// var UndergroundSystem = function() {
//     this.travelLog = {
//         // 1:{
//         //     entries:[{ newbury:3, to:4 },{newbury:5,to:6}],
//         //     status:'checked in'
//         // }
//     }
// };

// UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
//     if(!this.travelLog.hasOwnProperty(id)) {
//         this.travelLog[id] = {}
//         this.travelLog[id]["checkIn"] = []
//         this.travelLog[id]["checkIn"][stationName] = t
//         this.travelLog[id]["entries"] = []
//         this.travelLog[id]["status"] = "checked in"
//     }
//     console.log(this.travelLog)
// };

// UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
//     if(this.travelLog.hasOwnProperty(id) && this.travelLog[id]["status"] === "checked in") {
//         const checkInEntry = this.travelLog[id]["checkIn"]
//         const riderEntry = {}
//         riderEntry[stationName] = t
//         this.travelLog[id]["entries"].push({checkInEntry,riderEntry})
//         this.travelLog[id]["status"] = "checked out"
//     } else {

//     }
//     console.log(this.travelLog)

// };

// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//     const averages = []
//     for(let id in this.travelLog) {
//         const travelPoints = Object.getOwnPropertyNames(this.travelLog[id])
//         if(travelPoints[0] === startStation && travelPoints[2] === endStation) {
//             const startStationTime = this.travelLog[id][startStation]
//             const endStationTime = this.travelLog[id][endStation]
//             const travelTime = Math.abs(startStationTime - endStationTime)
//             averages.push(travelTime)            
//         }
//     }
//     // console.log(averages)
//     const numberOfEntries = averages.length
//     const test = averages.reduce((total,amt) => {
//         return total + amt
//     })
//     console.log(test / numberOfEntries)
// };

// const test = new UndergroundSystem()
// test.checkIn(1,'newbury',3)
// test.checkOut(1,"thousand oaks",4)

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