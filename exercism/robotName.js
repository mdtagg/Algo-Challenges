class Robot {

    static robotNames

    constructor() {
      Robot.robotNames = new Set()
      this.robotName = this.generateName(0)
    }
  
    get name() {
        return this.robotName
    }

    generateName() {
      
      const roboName = 
        [
            getRandomLetter(),
            getRandomLetter(),
            getRandomNumber(),
            getRandomNumber(),
            getRandomNumber()
        ]
        .join('')
        if(Robot.robotNames.has(roboName)) {
          return this.generateName()
        }
        Robot.robotNames.add(roboName)
        return roboName
    }
  
    resetName() {

      this.robotName = this.generateName()
      return this.name
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
console.log(robot.name)
console.log(Robot.robotNames)
// console.log(Array.from(Robot.robotNames.values()))
// console.log(Robot.robotNames)
// console.log(Array.from(Robot.robotNames.values()))

// robot.name
// robot.resetName()
// robot.releaseNames()