

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
//     return function(arg) {
//       if(arg !== password) {
//         pastWords[arg] = callback(arg)
//         return pastWords[arg]
//     }
//         else return pastWords
//     }
//   }
//   // Uncomment these to check your work!
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


// function Inventory(item, price) {

//     return Object.create(Inventory.prototype,{
//         [item]: {
//             value: {
//                 price: price,
//                 quantity:1
//             }
//         }
//     })
// }

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

