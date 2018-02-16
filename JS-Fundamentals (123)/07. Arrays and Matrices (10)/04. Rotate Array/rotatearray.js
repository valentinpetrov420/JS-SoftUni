function solve(arr){

    let shiftAmount = arr[arr.length-1];
    arr.splice(-1,1);

    for (let idx = 0; idx < shiftAmount % arr.length; idx++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', 100000000000000000000000000000]);