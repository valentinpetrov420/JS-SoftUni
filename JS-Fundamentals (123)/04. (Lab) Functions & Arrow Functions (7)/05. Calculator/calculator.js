function solve(a, b, operator){
    let num1 = parseInt(a);
    let num2 = parseInt(b);

    switch (operator){
        case '+': function add(a, b){return a + b}
            console.log(add(num1, num2));
            break;
        case '-': function subtract(a, b){return a - b}
            console.log(subtract(num1, num2));
            break;
        case '*': function multiply(a, b){return a * b}
            console.log(multiply(num1, num2));
            break;
        case '/': function divide(a, b){return a / b}
            console.log(divide(num1, num2));
            break;
    }

}

solve('2', '4', '+');
solve('4', '4', '-');
solve('2', '2', '*');
solve('10', '10', '/');
solve('1000000000000000000000000', '1000000000000000', '*');
