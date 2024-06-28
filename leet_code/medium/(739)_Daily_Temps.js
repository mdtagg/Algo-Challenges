

function dailyTemperatures(temps) {

  let arr = new Array(temps.length).fill(0);
  let stack = [];

  for(let i = 0;i < temps.length;i++) {
    while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      let idx = stack.pop();
      arr[idx] = i - idx;
    }
    stack.push(i)
  }
  return arr
}

dailyTemperatures([73,74,75,71,69,72,76,73])

/*
function dailyTemperatures(temps) {

  let arr = new Array(temps.length).fill(0);
  let stack = []

  for(let i = 0;i < temps.length;i++) {
    while(stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      let idx = stack.pop()
      arr[idx] = i - idx;

    }
    stack.push(i)
  }
  return arr
}
*/