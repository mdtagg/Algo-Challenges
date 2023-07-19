/*
Given an integer array nums and an integer k, return the k most 
frequent elements. You may return the answer in any order.

ex: 

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

var topKFrequent = function(nums, k) {
    
};

console.log(topKFrequent([1,1,2,2,2,3],3))

/*

WHAT I LEARNED

- You can use a for of loop to iterate through a map object to create 
a sorted array. By destructuring the key and values from the map you can then
set the index of the seperate array as the value in the map entry

PERFORMANCE SOLUTION

var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};

MEMORY SOLUTION 

var topKFrequent = function(nums, k) {
    var map = new Map();

    for(var i = 0; i < nums.length; i++) {
        
        if(!map.has(nums[i])){
           map.set(nums[i], 0); 
        }
        map.set(nums[i], map.get(nums[i]) + 1);
 
     }
    let sotArr = Array.from(map.keys()).sort((a,b)=> map.get(b) - map.get(a));
   
    return sotArr.slice(0,k);
};

FIRST SOLUTION

var topKFrequent = function(nums, k) {
    const result = []
    const arr = []
    const freqMap = new Map()

    for(let i = 0;i < nums.length;i++) {
        if(freqMap.has(nums[i])) {
            freqMap.set(nums[i],freqMap.get(nums[i]) + 1)
        }else {
            freqMap.set(nums[i],1)
        }
    }

    for(let [key,value] of freqMap) {
        console.log(key,value)
        arr[value] = (arr[value] || new Set()).add(key)
    }
  
    for(let i = arr.length - 1;i >= 0;i--) {
        if(arr[i]) result.push(...arr[i])
        if(result.length === k) return result 
    }
};

REDO 1

const freqMap = new Map()
    const numberArray = []
    const results = []

    for(let i = 0;i < nums.length;i++) {
        if(freqMap.has(nums[i])) {
            freqMap.set(nums[i],freqMap.get(nums[i]) + 1)
        } else {
            freqMap.set(nums[i],1)
        }
    }
    
    for(let entry of freqMap) {
        const [ num, freq ] = entry 
        //ERROR: forgot to return the set at numberArray[freq] or a new set with the added number
        //numberArray[freq] = num
        numberArray[freq] = (numberArray[freq] || new Set()).add(num)
    }

    for(let i = numberArray.length - 1;i >= 0;i--) {
        //ERROR: now that you introduced sets you just need check if the value is there
        // if(results.length >= k) break;
        // results.push(numberArray[i])

        if(numberArray[i]) results.push(...numberArray[i])
        if(results.length === k) break;
    }

    console.log(results)

    

MY SOLUTION

const map = new Map()
    const numberArray = []
    const result = []

    for(let i = 0;i < nums.length;i++) {
        if(map.has(nums[i])) {
            map.set(nums[i],map.get(nums[i]) + 1)
        }else {
            map.set(nums[i],1)
        }
    }

    //this is the key, we set the index as the value of frequency which 
    //sorts the array in ascending order
    for(let [number, frequency] of map) {
        numberArray[frequency] = (numberArray[frequency] || new Set()).add(number)
    }

    for(let i = numberArray.length - 1;i >= 0;i--) {
        if(numberArray[i]) result.push(...numberArray[i])
        if(result.length === k) break;
    }
    return result


var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};
    

const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        // console.log(num)
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
        // console.log(freqMap)
    }
    
    for(let [num, freq] of freqMap) {
        // console.log(num,freq)
        bucket[freq] = (bucket[freq] || new Set()).add(num);
        // console.log(bucket[freq])
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        console.log(bucket)
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;

const map = new Map()
    const arr = []

    

    for(let entry of map) {
        const [,value] = entry
        arr.push(value)
    }
    arr.sort((a,b) => b - a)
    return arr.splice()
    let max = -Infinity
    while(arr.length < k) {
        for(let entry of map) {
            const [key,value] = entry 
            if(value > max) {
                max = value
            }
        }
    }
    console.log(arr)

const map = new Map()
    const arr = []

    let index = 0
    while(arr.length < k) {
    // for(let i = 0;i < k;i++) {
        if(map.has(nums[index])) {
            while(nums[index] === nums[index + 1]) {
                index += 1;
            }
            console.log(index)
            break
        }else {
            map.set(nums[index],index)
            arr.push(nums[index])
            index++
        }
        console.log(index)
        // break
    }
    console.log(arr)

nums.forEach((num,index) => {
        if(map.has(num)) {

        }else {
            map.set(num,index)
        }
    })

*/