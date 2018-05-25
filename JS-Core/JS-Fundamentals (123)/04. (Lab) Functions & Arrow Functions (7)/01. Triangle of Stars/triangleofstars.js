function solve(n){
    let symbol = '*';
    //let whiteSpace = ' ';
    for(let i = 1; i <= n; i++){
        //console.log(whiteSpace.repeat(n-i) + symbol.repeat(i) + symbol.repeat(i));
        console.log(symbol.repeat(i));
    }
    for(let i = n-1; i > 0; i--){
        //console.log(whiteSpace.repeat(n-i) + symbol.repeat(i) + symbol.repeat(i));
        console.log(symbol.repeat(i));
    }
}
solve(5);