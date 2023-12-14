/*

Given an integer array nums, return an array answer such that answer[i]
 is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/

const productExceptSelf = (nums) => {
    let result = []
    let prefix = 1
    for(let i = 0;i < nums.length;i++) {
        result[i] = prefix 
        prefix *= nums[i]
    }
    let suffix = 1
    for(let i = nums.length - 1;i >= 0;i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
}

// [1,2,6,24] []

console.log(productExceptSelf([1,2,3,4]))


/*

const productExceptSelf = (nums) => {
    let prefix = 1
    let result = []
    for(let i = 0;i < nums.length;i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    let suffix = 1
    for(let i = test.length - 1;i >= 0;i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    console.log(result)
    return result
}

OPTIMAL MEMORY

var productExceptSelf = function(nums) {
    let multiple = 1;
    let multipleWithoutZero = 1;
    let numOfZeros = 0;
    for (let num of nums) {
        if (num === 0) numOfZeros++;
        if (num !== 0) multipleWithoutZero *= num;
        multiple *= num;
    }
    if (numOfZeros > 1) return nums.map(e => 0);
    return nums.map((num) => {
        if (num === 0) return multipleWithoutZero;
        return multiple/num;
    });
};

OPTIMAL PERFORMANCE

const result = []
    
    let prefix = 1

    for(let i = 0; i<nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    let suffix = 1

    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result


SECOND ATTEMPT (times out not O(n))

const result = []

    for(let i = 0;i < nums.length;i++) {
        const slice = nums.slice(0,i).concat(nums.slice(i + 1))
        result.push(slice.reduce((total,amt) => total * amt))
    }
    console.log(result)
    return result

*/














//FIRST SOLUTION

// const recurse = (nums,index) => {
//     if(index === nums.length) return;
//     const product = nums.slice(0,index).concat(nums.slice(index + 1)).reduce((total,amt) => total * amt)
//     return [product,recurse(nums,index + 1)]
// }

// const productExceptSelf = (nums,index=0) => {
//     const products = [recurse(nums,index)].flat(nums.length)
//     products.pop()
//     return products
// }





// let result = [];
//     let left = 1;
//     let right = 1;

//   for (let i = 0; i < nums.length; i++) {
//     // compute left product for nums[i]
//     result[i] = left;
//     left *= nums[i];
//     console.log(left)
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     // compute right product for nums[i] and multiply it with the left product
//     result[i] *= right;
//     right *= nums[i];
//   }

//   return result;

//RECURSIVE STRATEGY

/*

Failed, test require too much memory for recursion to work. Heap size 
exceeded

*/

// const recurse = (nums,index) => {
//     if(index === nums.length) return;
//     const product = nums.slice(0,index).concat(nums.slice(index + 1)).reduce((total,amt) => total * amt)
//     return [product,recurse(nums,index + 1)]
// }

// const productExceptSelf = (nums,index=0) => {
//     const products = [recurse(nums,index)].flat(nums.length)
//     products.pop()
//     return products
// }



// for(let i = 0;i < nums.length;i++) {
//     if(i === 0) {
//         products.push(
//             nums.slice(1)
//             .reduce((total,amt) => total * amt)
//         )
//     }else if(i < nums.length - 1) {
//         const slice = nums
//             .slice(0,i)
//             .concat(nums.slice(i + 1))
//             .reduce((total,amt) => total * amt)
//         products.push(slice)
//     }else {
//         products.push(
//             nums.slice(0,nums.length - 1)
//             .reduce((total,amt) => total * amt)
//         )
//     }
// }
// console.log(products)