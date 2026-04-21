


const maxDistance = (colors) => {

  let left = 0;
  let right = colors.length - 1;
  let max = 0;
  
  for(let i = 0;i < colors.length;i++) {
    if(colors[right] !== colors[i]) max = Math.max(max,right - i);
  }

  for(let i = colors.length - 1;i >= 0;i--) {
    if(colors[left] !== colors[i]) max = Math.max(max,i - left);
  }
  
  return max;
}

const inputs = [
  [1,1,1,6,1,1,1],
  [1,8,3,8,3],
  [4,4,4,11,4,4,11,4,4,4,4,4]
]

maxDistance(inputs[2])

/*

The trick is that the first value and the last value hold a lot of power
if the first and last value are different the max is automatically the length of the array
if they are different there are only two possible max lengths
The first is position 0 to the furthest different number 
Or the first number different from the last position closest to the beginning 

const maxDistance = (colors) => {
  
  let left = 0;
  let right = 1;
  let max = 1;

  while(right < colors.length) {
    if(colors[left] !== colors[right]) {
      max = Math.max(right - left,max);
      left = right;
    }
    right++;
  }
  return max;
}
*/

