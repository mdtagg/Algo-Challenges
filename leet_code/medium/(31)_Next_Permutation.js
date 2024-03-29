

var nextPermutation = function(nums) {
    
  for(let i = nums.length - 1;i >= 0;i--) {
    if(nums[i] < nums[i + 1]) {
      const largest = findLargest(i)
      swapNums(i,largest)
      reverse(i+1)
      return
    }
  }

  nums.reverse()

  function reverse(i) {
    let start = i, end = nums.length - 1

    while(start < end) {
      swapNums(start,end) 
      start++
      end--
    }
  }

  function swapNums(i,largest) {
    [nums[i],nums[largest]] = [nums[largest],nums[i]]
  }

  function findLargest(idx) {
    for(let i = nums.length - 1;i >= idx;i--) {
      if(nums[i] > nums[idx]) return i
    }
  }

};
//3,2,1

console.log(nextPermutation([1,3,6,4]))

/*
The solution to this problem is tricky. 
Have to find the first descending number in relation to the number next to it
For 1,3,2 one is the first descending number since 3 is greater
Then the first number higher than the last number we found needs to be swapped with that number
In this example that number is 2
Lastly we have to reverse sort the numbers after the left number of the  swap in ascending order


CODE GRAVEYARD

var nextPermutation = function(nums) {
    
    for(let i = nums.length-1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);
            return;
        }
    }
	
	// If there is no next permutation reverse the arr
    nums.reverse()
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }
};

const lastIndex = arr.length - 1
  
  for(let i = lastIndex;i >= 0;i--) {
    if(arr[i] < arr[lastIndex]) {
      swapNums(arr,i,lastIndex)
      for(let j = i + 1;j < arr.length;j++) {
        if(arr[j] > arr[j + 1]) {
          swapNums(arr,j,j+1)
        }
      }
      break
    }
    break
  }

for(let i = arr.length - 1;i > 0;i--) {
    for(let j = i - 1;j >= 0;j--) {
      if(arr[j] < arr[i]) {

        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        
        
      }
    }
  }

const min = parseInt(arr.join(''))
  arr.sort((a,b) => b - a)
  let max = parseInt(arr.join(''))
  if(min === max) return arr.reverse()

  function switchNums(arr,i,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for(let i = 0;i < arr.length - 1;i++) {
    for(let j = i + 1;j < arr.length;j++) {
      switchNums(arr,i,j)
      const num = parseInt(arr.join(''))
      num <= max && num > min ? max = num : switchNums(arr,i,j)
    }
  }

const nextPermutation = (arr) => {

  const min = parseInt(arr.join(''))
  const arr = Array.from(arr.sort((a,b) => b - a))
  // arr.sort((a,b) => b - a)
  let max = parseInt(arr.join(''))

  for(let i = 0;i < arr.length - 1;i++) {
    for(let j = i + 1;j < arr.length;j++) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      const num = parseInt(arr.join(''))
      if(num <= max && num > min) {
        max = num 

      }else {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
    
}



let min = parseInt(arr.join(''))
    let maxArray = Array.from(arr).sort((a,b) => b - a)
    let max = parseInt(maxArray.join('')) + 1
    console.log(maxArray)
    let i = 0
    while(i < arr.length) {
        let num = arr.pop()
        arr.unshift(num)
        if(parseInt(arr.join('')) < max && parseInt(arr.join('')) > min) {

        }
    }




test[i] = arr[j]
          test[j] = arr[i]
            // function switchNums(arr,i,j) {
            //     let temp = arr[i]
            //     arr[i] = arr[j]
            //     arr[j] = temp
            // }
            // switchNums(arr,i,j)
            
            const num = parseInt(test.join(''))

            if(num <= max && num > min) {
                // let temp = arr[i]
                // arr[i] = arr[j]
                // arr[j] = temp
                arr = test
                max = num 
                i = 0
                
            }

 let min = parseInt(arr.join(''))
    let max = parseInt(Array.from(arr).sort((a,b) => b - a).join('')) + 1
    if(min === max - 1) {
        arr.reverse()
        return
    }

    function switchNums(arr,j,i) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }
   
    for(let i = arr.length - 1;i >= 1;i--) {
      for(let j = i - 1;j >= 0;j--) {
        switchNums(arr,j,i)
        const num = parseInt(arr.join(''))
        if(num < max && num > min) {
          max = num
          i = j = arr.length - 1
        }else {
          switchNums(arr,j,i)
        }
      }
    }

*/