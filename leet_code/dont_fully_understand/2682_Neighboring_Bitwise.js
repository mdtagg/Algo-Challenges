

// const doesValidArrayExist = function(derived) {
//   let original = [0]
//   for (let i = 0 ;i < derived.length;i++) {
//     original.push(derived[i] ^ original[i])
//   }

//   let check_for_zero = original[0] == original[original.length - 1]
//   original = [1]

//   for(let i = 0 ;i < derived.length;i++){
//     original.push(derived[i] ^ original[i])
//   }

//   let check_for_one = original[0] == original[original.length - 1]
          
//   return check_for_zero || check_for_one
// }

var doesValidArrayExist = function(derived) {
  
  let n = derived.length;
  let original = 1;
  
  for (let i = 1; i < n; i++){
      original = original ^ derived[i - 1];
  }
  return 1 ^ original == derived[n - 1];
};

doesValidArrayExist([1,1,0])
