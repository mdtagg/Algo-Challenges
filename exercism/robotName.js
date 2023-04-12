class Robot {

    static robotNames

    constructor() {
      Robot.robotNames = new Map()
      this.robotName = this.generateName(0)
      this.mapIndex = 0
    }
  
    get name() {
        return this.robotName
    }

    generateName(mapIndex) {
      
      if(mapIndex !== 0) {
        mapIndex = this.mapIndex
      }
      const roboName = 
        [
            getRandomLetter(),
            getRandomLetter(),
            getRandomNumber(),
            getRandomNumber(),
            getRandomNumber()
        ]
        .join('')

        Robot.robotNames.set(mapIndex,roboName)
        this.mapIndex += 1

        return roboName
    }
  
    resetName() {
        const newName = this.generateName()
        const listOfNames = Array.from(Robot.robotNames.values())
        console.log(newName,listOfNames)
        // if(listOfNames.includes(newName)) {
        //   this.resetName()
        //   return
        // }
        // this.robotName = this.generateName()
        // return this.name
    }
  
    static releaseNames() {
      return this.robotNames.clear()
    }
  }

  function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomIndex = Math.floor(Math.random() * 26)
    const nameLetter = alphabet[randomIndex]
    return nameLetter
  }

  function getRandomNumber() {
    const randomNumber = (Math.floor(Math.random() * 10)).toString()
    return randomNumber
  }
  

const robot = new Robot()
console.log(robot.name)
robot.generateName()
// robot.generateName()
// robot.generateName()
robot.resetName()

console.log(Robot.robotNames)
// console.log(Array.from(Robot.robotNames.values()))
// console.log(Robot.robotNames)
// console.log(Array.from(Robot.robotNames.values()))

// robot.name
// robot.resetName()
// robot.releaseNames()