

const numSteps = (num) => {
  num = parseInt(num,2);
  let result = 0;
  while(num !== 1) {
    if(num % 2 !== 0) num++;
    else num /= 2;
    result++;
  }
  return result
}

numSteps("1")