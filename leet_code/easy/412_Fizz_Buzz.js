const fizzBuzz = function (n) {
  let result = new Array(n).fill("")
  for (let i = 0; i < n; i++) {
    if(typeof(i/3) === "int") result[i] += "Fizz"
    if(i % 5 === 0) result[i] += "Buzz"
    if(result[i] === "") result[i] = `${i + 1}`
  }
  return result
};

fizzBuzz();
