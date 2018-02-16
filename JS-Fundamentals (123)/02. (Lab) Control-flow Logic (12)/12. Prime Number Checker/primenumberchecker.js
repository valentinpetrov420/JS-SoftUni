function solve(n){
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime && (n > 1);
}

console.log(solve(7));
console.log(solve(8));
console.log(solve(81));
console.log(solve(-5));