function solve(n){
    let symbol = '$';
    //let whiteSpace = ' ';
    for(let i = 1; i <= n; i++){
        console.log(symbol.repeat(i));
    }
}
solve(5);