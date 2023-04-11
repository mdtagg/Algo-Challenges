

class DnDCharacter {

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.constitution = DnDCharacter.generateAbilityScore()
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
    }

    static generateAbilityScore() {
        let rolls = 4
        const abilityScores = []
        while(rolls > 0) {
            rolls--
            const randomNum = Math.ceil(Math.random() * 6)
            abilityScores.push(randomNum)
        }
        abilityScores
        .sort()
        .pop()
        
        return abilityScores.reduce((total,amt) => {
            return total + amt
        })
    }

    static getModifierFor(constitution) {
        return Math.floor((constitution - 10) / 2)
    }

  }
//   DnDCharacter.generateAbilityScore()
// const zidane = new DnDCharacter()
// zidane.constitution = DnDCharacter.generateAbilityScore()
// // zidane.hitPoints = 10 + DnDCharacter.getModifierFor(zidane.constitution)
// console.log(zidane)


// const abilities = {}
        // const abilityNames = ['strength','dexterity','constitution','intelligence','wisdom','charisma','hitpoints']
        // while(abilityNames.length) {
        //     const abilityName = abilityNames.shift()
        //     if(abilityName !== 'hitpoints') {
        //         abilities[abilityName] = this.rollAbility()
        //     }else {
        //         abilities[abilityName] = 10 + this.getModifierFor(abilities.constitution)
        //     }
        // }
        // console.log(abilities)
        // return abilities
// console.log(DnDCharacter.getModifierFor(3))

//   const abilities = {}
    //   while(abilities.length) {
    //     const abilityTest = abilityNames.pop()
    //     if(abilityTest === 'constitution') {
            
    //     }
    //     abilities.abilityTest = 
    //   }