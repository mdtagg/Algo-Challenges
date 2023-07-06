var plusOne = function(arr) {
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr)
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};

console.log(plusOne([8,9,9]))