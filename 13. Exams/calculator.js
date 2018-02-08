function solve(leftOperand, operator, rightOperand){
    let num1 = Number(leftOperand);
    let num2 = Number(rightOperand);

    switch (operator){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        case '^': return Math.pow(num1, num2);
    }
}

console.log(solve(2, '+', 2));
console.log(solve(2, '*', 2));
console.log(solve(2, '/', 2));
console.log(solve(2, '-', 2));
console.log(solve(2, '^', 2));

function solve2(arr, operator){
    let result = 0;
    if(arr.length = 0){
        return "not enough operators!";
    }
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        switch (operator){
            case '+': num += result;
                break;
            case '-': num -= result;
                break;
            case '*': num *= result;
                break;
            case '/': num /= result;
                break;
            default: return "wrong operator!";
        }
    }
    return result;
}

console.log(solve2([2, 2, 2], '+'));
console.log(solve2([2, 2, 2], '-'));
console.log(solve2([2, 2, 2], '/'));
console.log(solve2([2, 2, 2], '*'));
console.log(solve2([], ''));