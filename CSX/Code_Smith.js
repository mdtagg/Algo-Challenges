

function List() {
  
  return Object.create(List.prototype,{
    list: {
      value: {}
    },
    length: {
      writable:true,
      value:0
    }
  })

}

List.prototype.add = function(arg) {
  this.list[this.length] = arg
  this.length++
  return length
}
const myList = new List()
myList.add("test")
myList.add("testTwo")

console.log(myList)

// function findIndex(array,value,idx=0) {
//   if(idx === array.length) return -1;
//   if(array[idx] === value) return idx
//   let nextIdx = findIndex(array,value,++idx)
//   return nextIdx
// }

// console.log(findIndex([1,1, 2, 3, 4, 5, 3], 10))

// function shuffleCards(top,bottom) {
//   let cards = []
//   function shuffle(top,bottom) {
//     if(!top.length) cards.push(...bottom);
//     if(!bottom.length) cards.push(...top);
//     else {
//       cards.push(top.shift())
//       cards.push(bottom.shift())
//       shuffle(top,bottom)
//     }
//   }
//   shuffle(top,bottom)
//   return cards
// }

// const shuffleCards = (topHalf,bottomHalf,idx=0) => {
//   let cards = []
//   if(topHalf.length) cards.push(topHalf.shift())
//   if(bottomHalf.length) cards.push(bottomHalf.shift())
//   if(topHalf.length || bottomHalf.length) cards.push(...shuffleCards(topHalf,bottomHalf))
//   return cards
// }

// console.log(shuffleCards(['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'],['Jack of Hearts', 'Ten of Spades']))


// function undefinedToNull(arg) {
//   return Array.isArray(arg) ? traverseArray(arg) : traverseObject(arg);
// }

// function traverseArray(arr) {
//   for(let i = 0;i < arr.length;i++) {
//     if(typeof(arr[i]) !== 'object' || arr[i] === null) {
//       if(arr[i] === undefined) arr[i] = null;
//       continue
//     }
//     if(Array.isArray(arr[i])) arr[i] = traverseArray(arr[i])
//     else arr[i] = traverseObject(arr[i])
//   }
//   return arr
// }

// function traverseObject(obj) {
//   for(let key of Object.keys(obj)) {
//     if(typeof(obj[key]) !== 'object'|| arr[i] === null) {
//       if(obj[key] === undefined) obj[key] = null;
//       continue
//     }
//     if(Array.isArray(obj[key])) obj[key] = traverseArray(obj[key])
//     else obj[key] = traverseObject(obj[key])
//   }
//   return obj
// }

// console.log(undefinedToNull(['BFE.dev', undefined, null, {a: ['BFE.dev', undefined]}]))

// //ARRAY BUILDERz

// function arrayBuilder(obj) {
//   let arr = []
//   for(let [item,count] of Object.entries(obj)) {
//     while(count > 0) {
//       arr.push(item)
//       count--
//     }
//   }
//   return arr
// }

// // Uncomment these to check your work!
// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []


// RULE IN ORDER

// Add code here
// function runInOrder(funcs,arr) {

//   if(!funcs.length) return;
  
//   setTimeout(() => {
//     (funcs.shift())()
//     runInOrder(funcs,arr)
//   },arr.shift())
// }
// // /* Uncomment the following lines and click 'run' to test your work */

// function runInOrder(funcs,times) {
//   let totalTime = 0

//   for(let i = 0;i < funcs.length;i++) {
//     totalTime += times[i]
//     setTimeout(funcs[i],totalTime)
//   }
// }

// async function runInOrder(funcs,times) {
//   async function runFunc() {
//     return new Promise((resolve) => {
      
//       setTimeout(() => {

//         resolve(funcs.shift())

//       },times.shift())
//     })
//   }

//   while(funcs.length) {
//     const func = await runFunc()
//     func()
//   }
// }

/*
  define variable total time that will increment its total by each time value in our times array

  invoke a for loop starting at index 0 and continuing to the end of our funcs array
    add each time to our totalTime variable 
    invoke a setTimeout function that calls the function at our current index after the time in our total time variable

*/

// function sayHi() {
//   console.log('hi');
// }
// function sayBye() {
//   console.log('bye');
// }
// function sayHowdy() {
//   console.log('howdy');
// }

// runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);


//LIMITED INTERVAL

// const limitedInterval = (callback,wait,limit) => {
//   let intervalId = setInterval(callback,wait)
//   setTimeout(() => clearInterval(intervalId),limit)
// }
// limitedInterval(() => console.log('repeating'), 100, 550);

//AJAX SIMULATE

// let dataReceived;

// function ajaxSimulate(id, callback) {
//   const database = ['Aaron', 'Barbara', 'Chris'];
//   setTimeout(() => {
//     callback(database[id])
//   },0)
// }

// function storeData(data) {
//   dataReceived = data
//   console.log(dataReceived)
// }
// ajaxSimulate(1,storeData)
// console.log(dataReceived)

//FOR EACH ASYNC

// Add code here
// const delays = [200,500,0,350]

// function forEach(arr,cb) {
//   for(let i = 0;i < arr.length;i++) {
//     cb(arr[i],i)
// 	}
// }

// function delayLog(delayTime,i) {
//   setTimeout(() => {
//     console.log(`printing element ${i}`)
//   },delayTime)
// }

// forEach(delays,delayLog)


// CASCADE

// function cascade(number) {
//   let num = number % 10
//   if(number / 10 >= 1) {
//     console.log(number)
//     number = Math.floor(number/10)
//     cascade(number)
//   }
//   else if(number / 10 < 1) {
//     console.log(number)
//     return
//   }
//   console.log(number * 10 + num)
// }

// cascade(10000)

/*
function cascade(number,idx=0,pastNums=[]) {
  if(number / 10 > 1 && idx === 0) {
    console.log(number)
    pastNums.unshift(number)
    number = Math.floor(number/10)
    cascade(number,idx,pastNums)
  }
  else if(number / 10 < 1) {
    pastNums.unshift(number)
    console.log(number)
    idx++
  }
  if(idx !== 0 && idx < pastNums.length) {
    console.log(pastNums[idx])
    cascade(number * 10,++idx,pastNums)
  }
}



//SHUFFLE

// const shuffleCards = (topHalf,bottomHalf,idx=0) => {

//   let cards = []
//   if(topHalf[idx]) cards.push(topHalf[idx])
//   if(bottomHalf[idx]) cards.push(bottomHalf[idx])
//   if(topHalf[idx] || bottomHalf[idx]) cards.push(...shuffleCards(topHalf,bottomHalf,++idx))
//   return cards
// }
// console.log(shuffleCards(['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'],['Jack of Hearts', 'Ten of Spades']))


function shuffleCards(top,bottom) {
    let cards = []
    function shuffle(top,bottom) {
      if(!top.length) cards.push(...bottom);
      if(!bottom.length) cards.push(...top);
      else {
        cards.push(top.shift())
        cards.push(bottom.shift())
        shuffleCards(top,bottom)
      }
    }
    return cards
  }

const shuffleCards = (topHalf,bottomHalf) => {

  let cards = []

  if(topHalf.length) cards.push(topHalf.shift())
  if(bottomHalf.length) cards.push(bottomHalf.shift())
  if(topHalf.length || bottomHalf.length) cards.push(...shuffleCards(topHalf,bottomHalf))
  return cards
}

const shuffleCards = (topHalf,bottomHalf) => {

  if(!topHalf.length && !bottomHalf.length) return []
  if(topHalf.length && bottomHalf.length) {
    return [topHalf.shift(),bottomHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }else if(topHalf.length && !bottomHalf.length) {
    return [topHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }else if(!topHalf.length && bottomHalf.length) {
    return [bottomHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }
  
}


const shuffleCards = (topHalf,bottomHalf) => {

  let card = ""

  if(topHalf.length && bottomHalf.length) {
    card = [topHalf.shift(),bottomHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }
  if(!topHalf.length && bottomHalf.length) {
    card = [bottomHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }
  if(topHalf.length && !bottomHalf.length) {
    card = [topHalf.shift(),...shuffleCards(topHalf,bottomHalf)]
  }
  
  return card
}

const shuffleCards = (topHalf,bottomHalf) => {

  let result = []

  shuffle()

  function shuffle() {
    let topCard
    let bottomCard 

    if(topHalf.length) topCard = topHalf.shift();
    if(bottomHalf.length) bottomCard = bottomHalf.shift()
    if(!topCard && !bottomCard) return
    if(topCard && bottomCard) {
      result.push(topCard)
      result.push(bottomCard)
    }
    else if(!topCard && bottomCard) {
      result.push(bottomCard)
    }
    else if(topCard && !bottomCard) {
      result.push(topCard)
    }
    shuffle(topHalf,bottomHalf)
  }
  return result
}

let topCard = ""
  let bottomCard = ""

  if(!change && topHalf.length) {
    topCard = topHalf.shift()
    shuffleCards(topHalf,bottomHalf,true)
  }
  else if(change && bottomHalf.length) {
    bottomCard = bottomHalf.shift()
    shuffleCards(topHalf,bottomHalf,false)
  }else if(topHalf.length && !bottomHalf.length) {
    topCard = shuffleCards(topHalf,bottomHalf,false) 
  }else if(!topHalf.length && bottomHalf.length) {
    bottomCard = shuffleCards(topHalf,bottomHalf,true)
    
  }
 */
//FLOW

// function flow(input, funcArray,count=0) {
//   if(!funcArray[count]) return input
// 	let currFunc = funcArray[count]
//   input = currFunc(input)
//   return flow(input,funcArray,++count)
// }

// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7

//POW

// function pow(base, exponent) {
// 	if(exponent === 0) return 1
//   base *= pow(base,--exponent)
//   return base
// }

// // To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243 

//GET LEN RECURSION

// function getLength(array,len=0) {
//   if(!array[len]) return len
//   len = getLength(array,++len)
//   return len
// }

// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

//FACTORIAL

// function factorial(num) {
// 	if(num === 0) return 1
//   let factor = num
//   factor *= factorial(--num)
//   return factor
// }

// factorial(4)

//REPEATER

// function repeater(char,count=0) {
//   if(count === 5) return ""
// 	char += repeater(char,count + 1)
//   return char
// }

// console.log(repeater('g'));
// console.log(repeater('j'));


//CENSOR

// const censor = () => {
//   let cache = {}
//   return function(...args) {
//     if(args.length === 2) {
//       cache[args[0]] = args[1]
//     }else {
//       let [word] = args
//       let keys = Object.keys(cache)
//       for(let i = 0;i < keys.length;i++) {
//         word = word.replace(keys[i],cache[keys[i]])
//       }
//       return word
//     }
//   }
// }

// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

//DATE STAMP
// const dateStamp = (callback) => {
//   return function(...args) {
//     return {
//       date:new Intl.DateTimeFormat('en-US',
//       {
//         year: 'numeric',
//   			month: 'short',
//   			day: '2-digit',
//         weekday:"short"
//       }).format(new Date()).split(',').join(''),
//       output:callback(...args)
//     }
//   }
// }
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }



//HOBBY TRACKER

// function hobbyTracker(hobbies) {
  
//   let cache = {}
  
//   for(let i = 0;i < hobbies.length;i++) {
//     cache[hobbies[i]] = 0
//   }
  
//   return function(str,int) {
//     if(!str && !int) {
//       for(let hobby of hobbies) {
//         cache[hobby] = 0
//       }
//       return "tracker has been reset!"
//     }
//     cache[str] += int
//     return cache
//   }
// }

// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}


// // ADD CODE HERE
// const defineFirstArg = (callback,arg1) => {
//     return function(...args) {
//       return callback(arg1,...args)
//     }
//   }
//   // Uncomment these to check your work!
//   const subtract = function(big, small) { return big - small; };
//   const subFrom20 = defineFirstArg(subtract, 20);
//   console.log(subFrom20(5)); // should log: 15


// const cycleIterator = (arr) => {
//     let len = arr.length
//     let count = 0
//     return function() {
//       if(count === len) count = 0
//       return arr[count++]
//     }
//   }

// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'

// ADD CODE HERE
// const saveOutput = (callback,str) => {
//     let password = str
//     let pastWords = {}
//     return function(arg) {https://stackoverflow.com/jobs/companies?so_medium=superuser&so_source=SiteNav
//       if(arg !== password) {
//         pastWords[arg] = callback(arg)
//         return pastWords[arg]
//     }
//         else return pastWords
//     }
//   }
// //   // Uncomment these to check your work!
//   const multiplyBy2 = function(num) { return num * 2; };
//   const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
//   console.log(multBy2AndLog(2)); // should log: 4
//   console.log(multBy2AndLog(9)); // should log: 18
//   console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

// const after = (times,callback) => {

//     return function increment(str) {
//         if(times === 0) return callback(str)
//     }
//   }
  
//   const called = function(string) { return('hello ' + string); };
//   const afterCalled = after(3, called);

// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed

// function once(callback) {
//     let count = 0
//     let output
//     return function(num) {
//       if(count === 0) {
//         count++
//         output = callback(num)
//       }
//       return output
//     }
//   }

//   const addByTwoOnce = once(function(num) {
//     return num + 2;
//   });

//   console.log(addByTwoOnce(5));  //should log 7
//   console.log(addByTwoOnce(10));  //should log 7



// function addByX(input) {
//     return function(x) {
//       return x + input
//     }
//   }
//   const addByTwo = addByX(2)
//   console.log(addByTwo(1))
//   console.log(addByTwo(2))
//   console.log(addByTwo(3))


  // UNCOMMENT THESE TO TEST YOUR WORK!
//   const sampleFunc = createFunctionWithInput('sample');
//   console.log(sampleFunc()); // should log: 'sample'
//   const helloFunc = createFunctionWithInput('hello');
//   console.log(helloFunc()); // should log: 'hello'

// class Chain {
// 	constructor(name) {
//     this.name = name
//     this.totalStores = 0
//     this.locations = []
// 	}
// }

// Chain.prototype.openStore = function(owner,city) {
//     this.locations.push(new Franchise(owner,city))
//     this.totalStores++
//   }

// Chain.prototype.closeStore = function(city) {
//     for(let i = 0;i < this.locations.length;i++) {
//         if(this.locations[i].city === city) {
//             this.locations.splice(i,1)
//             this.totalStores--
//             console.log(`${this.name} closed the store in ${city}!`)
//             return
//         }
//     }
//     console.log( `${this.name} doesn't have a store in ${city}.`)
// }


// class Franchise {
//     constructor(owner,city) {
//       this.owner = owner
//       this.city = city
//     }
// }

// const buenoBell = new Chain('Bueno Bell');
// const KFC = new Chain("KFC")
// buenoBell.openStore('Will', 'Phoenix');
// buenoBell.openStore('Kyle', 'Austin');
// buenoBell.openStore('Allison', 'Wichita');

// buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
// buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'


//INVENTORY

// function Inventory(item, price) {

//     return Object.create(Inventory.prototype,{
//         [item]: {
//             value: {
//                 price: price,
//                 quantity:1
//             }
//         }
//     })
//   }

// Inventory.prototype.addItem = function(item,price) {
//     if(this[item]) {
//         this[item].quantity++
//         this[item].price = price
//     } else {
//         this[item] = {
//             price:price,
//             quantity:1
//         }
//     }
// }

// Inventory.prototype.deleteItem = function(item) {
//     if(this[item].quantity === 0) {
//         return "Nothing to delete"
//     }else {
//         this[item].quantity--
//         return "Deleted"
//     }
// }

// Inventory.prototype.checkItem = function(item) {
//     if(this[item]) return this[item]
//     return "Item is not in inventory"
// }

// const myInventory = new Inventory('cucumber', 2);
// // console.log(myInventory)
// console.log(myInventory.addItem("test",1))
// myInventory.addItem('cucumber',5)
// // myInventory.addItem('banana',2)
// // myInventory.deleteItem('banana')
// // console.log(myInventory.checkItem('toast'))
// console.log(myInventory)

// this.obj = Object.create(Inventory.prototype,{
        
//     [item]: {
//         value: {
//             price:price,
//             writable:true,
//             quantity:1
//         }
//     }
// })

// return this.obj

//   myInventory.deleteItem('cucumber',1)
//   myInventory.checkItem('cucumber')
// console.log(myInventory)

// this.obj.addItem = (item,price) => {
    // if(this.obj[item]) {
    //     this.obj[item][quantity]++
    //     this.obj[item][price] = price
    // } else {
    //     this.obj[item] = {
    //         price:price,
    //         quantity:1
    //     }
    // }
// }

// this.obj.deleteItem = (item) => {
//     if(this.obj[item].quantity === 0) {
//         return "Nothing to delete"
//     }else {
//         this.obj[item].quantity--
//         return "Deleted"
//     }
// }

// this.obj.checkItem = (item) => {
//     return this.obj[item]
// }
// Inventory.prototype.addItem = function(item,price) {
    // console.log(this.obj)
    // if(Inventory.prototype.obj[item]) {
    //     Inventory.prototype.obj[item][quantity]++
    //     Inventory.prototype.obj[item][price] = price
    // } else {
    //     Inventory.prototype.obj[item] = {
    //         price:price,
    //         quantity:1
    //     }
    // }
// }
  
 

//   Inventory.prototype.obj = {}
//     Inventory.prototype.obj[item] = {
//         price:price,
//         quantity:1
//     }

//     Inventory.prototype.addItem = function(item,price) {
//         if(Inventory.prototype.obj[item]) {
//             Inventory.prototype.obj[item][quantity]++
//             Inventory.prototype.obj[item][price] = price
//         } else {
//             Inventory.prototype.obj[item] = {
//                 price:price,
//                 quantity:1
//             }
//         }
//     }

//     Inventory.prototype.deleteItem = function(item) {
//         if(Inventory.prototype.obj[item].quantity === 0) {
//             return "Nothing to delete"
//         }else {
//             Inventory.prototype.obj[item].quantity--
//             return "Deleted"
//         }
//     }

//     Inventory.prototype.checkItem = function(item) {
//         return Inventory.prototype.obj[item]
//     }

// console.log(obj)
  
    // this.obj[item] = {
    //     price:price,
    //     quantity:1
    // }
    
    // this.obj.addItem = (item,price) => {
    //   this.obj[item] ? 
    //   this.obj[item] = this.obj[item][quantity]++ :
    //   this.obj[item] = {
    //     price:price,
    //     quantity:1
    //   }
    // }
    
    // this.obj.deleteItem = (item) => {
    //   if(this.obj[item].quantity === 0) { 
    //     return "Nothing to delete"
    //     }
    //   else {
    //     this.obj[item].quantity-- 
    //     return "Deleted"
    //     }
    // }
    
    // this.obj.checkItem = (item) => {
    //   return this.obj[item] ? this.obj[item] : "Item is not in inventory"
    //   }
    
    // return this.obj





// function Dog(name, breed) {
  
//     this.name = name
//     this.breed = breed
//     this.tricks = []

// }

// function learnTrick(trick) {
//     this.tricks.push(trick)
// }

// function performTrick(trick) {
//     this.tricks.includes(trick) ? 
//     console.log(this.name + " performed " + trick + "!") :
//     console.log(this.name + " doesn't know that trick.")
// }
// Dog.prototype.learnTrick = learnTrick
// Dog.prototype.performTrick = performTrick

// const fido = new Dog('Fido', 'poodle');
// fido.learnTrick('fetch')
// fido.performTrick('fetch')
// const goodKeys = (obj,callback) => {
//     let arr = []
//     for(let key of Object.keys(obj)) {
//       let value = obj[key]
//       if(callback(value)) arr.push(key);
//       }
//     return arr
//   }


// const countBy = (array,callback) => {
  
//     const newObj = {}
    
//     for(let i = 0;i < array.length;i++) {
//       const value = callback(array[i])
//       newObj[value] = (newObj[value] || 0) + 1
//     }
    
//     return newObj
//   }

// const prioritize = (array,callback) => {
  
//     const prefix = []
//     const suffix = []
    
//     for(let i = 0;i < array.length;i++) {
//       callback(array[i]) ? prefix.push(array[i]) : suffix.push(array[i])
//       }
//     return prefix.concat(suffix)
//   }

// const majority = (arr,callback) => {
  
//     let trues = 0, falses = 0
//     for(let i = 0;i < arr.length;i++) callback(arr[i]) ? trues++ : falses++;
//     return trues > falses ? true : false
//   }

// const multiMap = (array1,array2) => {
  
//     const newObj = {}
    
//     for(let i = 0;i < array1.length;i++) {
//       newObj[array1[i]] = array2.map(func => func(array1[i]))
//     }
//     return newObj
//   }


// const joinAndMap = (array1,array2,callback) => {
//     const combinedArr = array1.concat(array2)
    
//     for(let i = 0;i < combinedArr.length;i++) {
//       combinedArr[i] = callback(combinedArr[i])
//     }
//     return combinedArr
//   }


// const objOfMatches = (array1,array2,callback) => {
//     const newObj = {}
    
//     for(let i = 0;i < array1.length;i++) {
//       const capped = callback(array1[i])
//       const nextElement = array2[i]
//       if(capped === nextElement) {
//         newObj[array1[i]] = nextElement
//       }
//     }
//     return newObj
//   }
// objOfMatches()



// const union = (arrays) => {
//     const result = []
//     arrays = arrays.reduce((newArray,oldArray) => newArray.concat(oldArray))
//     for(let i = 0;i < arrays.length;i++) {
//         if(!result.includes(arrays[i])) result.push(arrays[i])
//     }
//     return result
// }

// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// union([arr1,arr2,arr3])

// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// const intersection = (arrays) => {

//     const accum = arrays.pop()

//     while(arrays.length) {

//         const current = arrays.pop()
//         const newArr = []

//         current.forEach(element => {
//             if(accum.includes(element)) newArr.push(element)
//         })
        
//         accum = newArr
//     }
//     return newArr
// }

// intersection([arr1,arr2])
// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 5, 7];

// Uncomment these to check your work!
// const arrLen = arr.length
//     arr = arr.reduce((total,amt) => total.concat(amt)).sort((a,b) => a - b)
//     let result = []
//     for(let i = 0,j = i + arrLen - 1;i < arr.length - arrLen;i++,j++) {
//         if(arr[i] === arr[j]) result.push(arr[i])
//     }
//     console.log(arr)
//     return result

// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2])); // should log: [5, 15]


// function eitherCallback(callback1, callback2) {
//     return function(num,i,arr) {
//         if(callback1(arr[i]) || callback2(arr[i])) return num
//     }
// }

// function filterArray(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//       if (callback(array[i], i, array)) newArray.push(array[i]);
//     }
//     return newArray;
//   }
//   const arrOfNums = [10, 35, 105, 9];
//   const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
//   const over100 = n => n > 100;
//   const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
//   console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]


// const newYearNewMe = () => {

//     const nyList = []
    
//     return (str) => {
//       nyList.push(str)
//       return nyList
//     }
// };

// const myResolutions = newYearNewMe();
// const yourResolutions = newYearNewMe()

// console.log(myResolutions('Practice coding every day 💻'))
// console.log(myResolutions('Build my first web app ⌨️'))

// console.log(yourResolutions('Finish CSX ✅'))
// console.log(yourResolutions('test'))


// const forEach = (arr,callback) => {
//     for(let i = 0;i < arr.length;i++) {
//       arr[i] = callback(arr[i])
//     }
//   }
  
//   const map = (arr,callback) => {
//     forEach(arr,callback)
//     return arr
//   }

//   map([3,4,5], n => n - 2) 

