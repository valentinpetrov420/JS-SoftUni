function solve(){
    let first = 1;
    let second = 0;
    return function(){
        let sum = first + second;
        first = second;
        second = sum;
        return second;
    }
}

let fib = solve();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());