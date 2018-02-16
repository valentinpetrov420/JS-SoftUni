function solve(arr){
    let currentBiggest = arr[0];
    let currentNum;
    let result = [];
    result.push(currentBiggest);
    for(let i = 1; i < arr.length; i++){
        currentNum = arr[i];

        if(currentNum >= currentBiggest){
            currentBiggest = currentNum;
            result.push(currentBiggest);
        }
    }
    for(let num of result){
        console.log(num);
    }
}

solve([20, 2, 3, 15, 2, 1]);