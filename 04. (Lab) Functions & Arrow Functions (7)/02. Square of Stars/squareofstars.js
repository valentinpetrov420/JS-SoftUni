function solve(n){
    let symbol = '*';
    let whiteSpace = ' ';
    for(let i = 1; i <= n; i++){
        console.log(symbol + whiteSpace);
        for(let i = 1; i <= n; i++){
            console.log(symbol + whiteSpace);
        }
    }
}
solve(5);