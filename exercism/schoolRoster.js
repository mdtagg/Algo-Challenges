class GradeSchool {

    _roster = {}
    
    roster() {
        // return JSON.parse(JSON.stringify(this._roster))
        return this._roster
    }
  
    add(name,grade) {
        this.removeDuplicates(name,grade)

        this._roster[grade] ? 
        this._roster[grade].push(name) :
        this._roster[grade] = [name]

        this._roster[grade].sort()
    }

    removeDuplicates(name) {
        for(let grade in this._roster) {
            this._roster[grade].forEach((entry,index) => {
                if(entry === name) {
                    this._roster[grade].splice(index,1)
                    return
                }
            })
        }
    }
  
    grade(grade) {
        if(this.roster()[grade] == undefined) {
            return []
        }
        return this.roster()[grade]
        }
  }
  
const school = new GradeSchool()
school.add('mike',9)
school.add('becca','9')
school.add('mike',7)
const test = school.roster()
test[2].push('oops')
console.log(school.grade(9))
console.log(school.roster())



// interface DB {
//     [key: number]: string[];
// }



// class GradeSchool {
//     _roster = {}
//     roster() { 
//         console.log(JSON.stringify(this._roster))
//         return JSON.parse(JSON.stringify(this._roster))
//     }

//     add(name, grade) {
//         this.deDupe(name)
//         this._roster[grade] ?
//             this._roster[grade].push(name) : this._roster[grade] = [name]
//         this._roster[grade].sort()
//     }

//     grade(grade) { 
//         return this.roster()[grade] ?? [] 
//     }

//     deDupe(name) {
//         for (let grade in this._roster) {
//             let names = this._roster[grade]
//             if (names.indexOf(name) != -1) { 
//                 names.splice(names.indexOf(name), 1); 
//                 break 
//             }
//         }
//     }
// }

// const school = new GradeSchool()
// school.add('mike',9)
// school.add('dylan',9)
// school.add('becca',8)
// console.log(school.roster())

