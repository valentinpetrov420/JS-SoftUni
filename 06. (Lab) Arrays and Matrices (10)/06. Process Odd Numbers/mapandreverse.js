function solve(arr){
    console.log(arr.filter((e, i) => i % 2 !== 0)
        .map(e => e*2)
        .reverse()
    );
}

solve([1,2,3,4,5,6]);