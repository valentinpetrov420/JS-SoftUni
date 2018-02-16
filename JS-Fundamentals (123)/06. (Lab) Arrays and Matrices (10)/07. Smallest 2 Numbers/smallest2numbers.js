function solve(arr){
    console.log(arr.sort((a,b) => a-b).slice(0, 2));
}

solve([1,2,3,5,0]);