

const productExceptSelf = (nums) => {
    



}

console.log(productExceptSelf([1,2,3,4]))
























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