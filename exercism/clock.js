class Clock {
    constructor(hours, minutes) {
      this.parsedTime = this.parseTime(hours,minutes) 
    }

    parseTime(hours,minutes,operation) {
        let hoursToAdjust = Math.floor(minutes / 60)
        // if(operation === 'plus') {
        //     hoursToAdjust = Math.floor(minutes / 60)
        // }
        let adjustedHours = (hours + hoursToAdjust) % 24
        let adjustedMinutes = minutes % 60

        const newMinutes = this.adjustTime(adjustedMinutes,60)
        const newHours = this.adjustTime(adjustedHours,24)
        
        return { newHours, newMinutes }
    }

    adjustTime(timeToAdjust,adjustment) {
        const adjustedArray = timeToAdjust.toString().split('')

        if(timeToAdjust < 0) {
            timeToAdjust += adjustment
        }
        if(adjustedArray.length === 1) {
            adjustedArray.unshift('0')
            timeToAdjust = adjustedArray.join('')
        }
        return timeToAdjust
    }
  
    toString() {
        const { newHours, newMinutes } = this.parsedTime
        return `${newHours}:${newMinutes}`
    }
  
    plus(minutes) {
        const { newHours, newMinutes } = this.parsedTime
        const adjustedMinutes = newMinutes + minutes
        this.parsedTime = this.parseTime(newHours,adjustedMinutes)
    }
  
    minus(minutes) {
        const { newHours, newMinutes } = this.parsedTime
        const adjustedMinutes = newMinutes - minutes
        this.parsedTime = this.parseTime(newHours,adjustedMinutes)
    }
  
    equals(other) {
      throw new Error('Remove this statement and implement this function')
    }
  }
  
  const clock = new Clock(72,8640)
//   console.log(clock.toString())
  clock.plus(50)
  clock.minus(51)
  console.log(clock.toString())

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