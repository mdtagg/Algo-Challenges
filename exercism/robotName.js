class Robot {
    constructor() {
      this.robotNames = new Map()
      this.mapIndex = 1
    }
  
    get name() {
        const roboName = 
        [
            getRandomLetter(),
            getRandomLetter(),
            getRandomNumber(),
            getRandomNumber(),
            getRandomNumber()
        ]
        .join('')

        this.robotNames.set(this.mapIndex,roboName)
        this.mapIndex += 1

        return roboName
    }
  
    resetName() {
        this.robotNames.delete(this.mapIndex)
        this.mapIndex -= 1
        return this.name
    }
  
    releaseNames() {
        console.log(this.robotNames)
      return this.robotNames
    }
  }

  function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomIndex = Math.ceil(Math.random() * 26)
    const nameLetter = alphabet[randomIndex]
    return nameLetter
  }

  function getRandomNumber() {
    const randomNumber = (Math.ceil(Math.random() * 10)).toString()
    return randomNumber
  }
const robot = new Robot()
robot.name
robot.name
robot.resetName()
robot.releaseNames()