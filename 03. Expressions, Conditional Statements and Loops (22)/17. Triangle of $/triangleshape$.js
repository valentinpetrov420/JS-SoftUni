function solve(n){
    let symbol = '$';
    //let whiteSpace = ' ';
    for(let i = 1; i <= n; i++){
        //console.log(whiteSpace.repeat(n-i) + symbol.repeat(i) + symbol.repeat(i));
        console.log(symbol.repeat(i));
    }
}
solve(5);