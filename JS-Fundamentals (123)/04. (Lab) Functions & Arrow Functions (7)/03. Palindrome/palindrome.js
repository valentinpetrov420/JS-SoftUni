function solve(input){
    let firstInput = input;
    let reversedInput = input.split('').reverse().join('');
    if(firstInput == reversedInput){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

solve('racecar');
solve('asd');