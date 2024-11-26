class Screen { 

  constructor(width,height,diagonal=0) {
    this.width = width
    this.height = height
    this.diagonal = diagonal
  }
  
  diagonal() {
    //originally returning the sqrt function
    this.diagonal = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
  
  dimensions(definition) {
    var dimensions = definition.split('x')
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
  }
}

var screen = new Screen(0, 0);
screen.dimensions('500x300');
screen.width = 400;
console.log(screen.diagonal); // Should print 500



// function wrap (execute) {
//   // Return modified function
//   // const cache = new Set();
//   const cache = new Set()

//   return () => {
//     try {
//       if(cache.has(execute)) return null
//       return execute()
//     }
//     catch(e) {
//       cache.add(execute)
//       return null;
//     }
//   }
// }

// var errorExec = wrap(function () {
//   throw new Error('Error');
// });
// var resultExec = wrap(function () {
//   return "Result";
// });
// console.log(typeof errorExec === "function" && errorExec()); // Should output null
// console.log(typeof resultExec === "function" && resultExec()); // Should output "Result"
// console.log(typeof errorExec === "function" && errorExec());



// function wrap (execute) {
//   // Return modified function
//   const cache = new Set();

//   return () => {
//     try {
//       if(cache.has(execute)) return null;
//       else {
//         cache.add(execute);
//         return execute();
//       }
//     }
//     catch(e) {
//       return null;
//     }
//   }
// }

// var errorExec = wrap(function () {
//   throw new Error('Error');
// });
// var resultExec = wrap(function () {
//   return "Result";
// });
// console.log(typeof errorExec === "function" && errorExec()); // Should output null
// console.log(typeof resultExec === "function" && resultExec()); // Should output "Result"