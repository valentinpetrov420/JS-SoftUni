function solve(a, b) {
    let boxCount = 0;
    for (let i = 0; i < a; i+=b){
        boxCount++;
    }
    return boxCount;
}

console.log(solve(5, 10));