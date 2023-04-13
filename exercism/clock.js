class Clock {
    constructor(hours, minutes) {
        this.time = this.parseTime(hours,minutes)
    }

    parseTime(hours,minutes) {
        const { newMinutes, hoursToAdjust } = this.parseMinutes(minutes)
        const newHours = this.parseHours(hours,hoursToAdjust)
        return { newMinutes, newHours }
    }

    parseMinutes(minutes) {
        let hoursToAdjust = Math.floor(minutes / 60)
        let adjustedMinutes = minutes % 60
        const newMinutes = this.adjustTime(adjustedMinutes,60)
        return { newMinutes,hoursToAdjust }
    }

    parseHours(hours,hoursToAdjust) {
        let adjustedHours = (hours + hoursToAdjust) % 24
        const newHours = this.adjustTime(adjustedHours,24)

        return newHours
    }

    adjustTime(timeToAdjust,adjustment) {

        let adjustedArray = timeToAdjust.toString().split('')
        if(timeToAdjust < 0) {
            timeToAdjust += adjustment
        }
        if(adjustedArray.length === 1) {
            adjustedArray.unshift('0')
            timeToAdjust = parseInt(adjustedArray.join(''))
            // adjustedArray = adjustedArray.join('')
        }
        return timeToAdjust
    }
  
    toString() {
        const { newHours,newMinutes } = this.time
        return `${newHours}:${newMinutes}`
    }
  
    plus(minutes) {
        const { newHours, newMinutes } = this.time
        const minutesToAdd = newMinutes + minutes
        return this.time = this.parseTime(newHours,minutesToAdd)
    }
  
    minus(minutes) {
        const { newHours, newMinutes } = this.time
        const adjustedMinutes = parseInt(newMinutes) + minutes * -1
        const adjustedHours = parseInt(newHours)
        this.time = this.parseTime(adjustedHours,adjustedMinutes)
    }
  
    equals(other) {
        other === this.time
    }
  }
  
  const clock = new Clock(8)
//   console.log(clock.toString())
  clock.plus(50)
  clock.minus(51)
  console.log(clock.toString())


//   parseTime(hours,minutes) {
    //     // let hoursToAdjust = Math.floor(minutes / 60)
    //     // let adjustedHours = (hours + hoursToAdjust) % 24
    //     // let adjustedMinutes = minutes % 60

    //     // const newMinutes = this.adjustTime(adjustedMinutes,60)
    //     // const newHours = this.adjustTime(adjustedHours,24)
        
    //     return { newHours, newMinutes }
    // }



  // if(adjustedMinutes < 0) {
        //     adjustedMinutes += 60
        // }
        // if(adjustedHours < 0) {
        //     adjustedHours += 24
        // }
        // if(minutesArray.length === 1) {
        //     minutesArray.unshift('0')
        //     adjustedMinutes = minutesArray.join('')
        // }
        // if(hoursArray.length === 1) {
        //     hoursArray.unshift('0')
        //     adjustedHours = hoursArray.join('')
        // }