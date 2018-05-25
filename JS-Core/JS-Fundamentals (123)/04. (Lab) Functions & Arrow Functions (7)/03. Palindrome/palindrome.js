function solve(input){
    let reversedInput = input.split('').reverse().join('');
    return reversedInput === input;
}

console.log(solve('racecar'));
console.log(solve('asd'));