function solve(input) {
    let result = "";
    let n = parseInt(input);
    for (let i = 1; i < n; i++) {
        result += String(i);
    }
    console.log(result += String(input));
}

solve('11');