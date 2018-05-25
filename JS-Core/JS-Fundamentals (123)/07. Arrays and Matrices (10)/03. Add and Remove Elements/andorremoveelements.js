function solve(inputArgs) {
    let arr = [];
    let initial = 1;

    for (let i = 0; i < inputArgs.length; i++) {
        if(inputArgs[i] == 'add'){
            arr.push(initial);
            initial++;
        }
        else if(inputArgs[i] == 'remove'){
            if(arr.length === 0){
                initial++;
            }
            else{
                arr.length = arr.length-1;
                initial++;
            }
        }
    }
    if(arr.length === 0){
        console.log('Empty')
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

solve(['remove', 'remove', 'remove']);