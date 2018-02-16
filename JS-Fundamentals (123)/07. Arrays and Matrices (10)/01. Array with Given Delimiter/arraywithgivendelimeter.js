function solve(arr){
    let delimeter = arr[arr.length-1];
    let newArr = [];

    for (var i = 0; i < arr.length-1; i++) {
        newArr[i] = arr[i];
        
    }
    console.log(newArr.join(delimeter));
}

solve(['1', '5', 'yes', '_no_', '=']);