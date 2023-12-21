
const union = (arrays) => {
    const result = []
    arrays = arrays.reduce((newArray,oldArray) => newArray.concat(oldArray))
    for(let i = 0;i < arrays.length;i++) {
        if(!result.includes(arrays[i])) result.push(arrays[i])
    }
    return result
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
union([arr1,arr2,arr3])

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

