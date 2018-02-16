function solve(input){
    let sum = 0;
    let concat = '';
    let inverse = 0;

    for(let i = 0; i < input.length; i++){
        sum += parseInt(input[i]);
        inverse += (1 / parseInt(input[i]));
        concat += input[i];
    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}

solve([2, 4, 8, 16]);