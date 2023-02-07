var threeSum = function(nums) {
    
}

threeSum([-1,0,1,2,-1,-4])

var threeSum = function(nums) {
	nums.sort((a,b) => a-b)
	const result=[]

	if(nums.length < 3) return result

	for(let i=0; i< nums.length; i++){
		let left = i+1
		let right = nums.length-1
		if(i > 0 && nums[i] === nums[i-1]) continue
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]
            console.log({sum},nums[i],nums[left],nums[right])
			if(sum===0){
				let arr=[nums[i], nums[left], nums[right]]
				result.push(arr)
				left++
				while(nums[left] === nums[left-1] && left < right) left++
			}else if(sum > 0){
				right--
			}else{
				left++
			}
		}
	}
    console.log(nums)
	// console.log(result)
};

threeSum([-1,0,1,2,-1,-4])

/*
The key is to make the most of sorting prior to performing any operations. If we know that the 
largest numbers will be on the right and the smallest numbers on the right we can peform our 
logic on the middle numbers and adjust the smallest and largest accordingly. Here the smallest
moves when the loop completes for i. The middle is set to i + 1 and the largest is the last number. 
We move the largest when the sum of our numbers is greater than 0. When the sum is greater than
0 it means that the lowest numbers left will not be able to produce a sum equal to zero, since 
we are moving from smallest to largest. 
*/


// var threeSum = function(nums) {
//     let validSums = []
//     let validSumsStr = []
//     let positives = nums.filter(item => item >= 0)
//     nums = nums.sort((a,b) => a - b)
//     console.log(nums)
//     while(nums.length >= 3) {
//        for(let i = 1;i < nums.length;i++) {
//             for(let j = i + 1;j < nums.length;j++) {
//                 let positiveTotal = positives.reduce((total,amt) => {return total + amt})
//                 if(positiveTotal < Math.abs(nums[0])) break
//                 let reducedSum = [nums[0],nums[i],nums[j]].reduce((total,amt) => {
//                     return total + amt
//                 })
                
//                 let potentialSum = [nums[0],nums[i],nums[j]]
//                 console.log(potentialSum,i,j)
//                 if(reducedSum === 0 && !validSumsStr.includes(potentialSum.join(''))) {
//                     validSums.push(potentialSum)
//                     validSumsStr.push(potentialSum.join(''))
//                 }
//             }
//             if(i === nums.length - 2) {
//                 nums.shift()
//                 break
//             }
//         } 
        
//     }
//     console.log(validSums)
// };

// -1,0,1,2,-1,-4
// 0,0,0,0