function solve(n){
    let result = `<table border="1">\n`;
    result += `<tr>\n`;
    result += `<th>"x"</th>\n`;

    for (let idx = 1; idx <= n; idx++){
        result += `<th>${idx}</th>\n`;
    }
    result += `</tr>\n`;
    for (let row = 1; row <= n; row++){
        result += `<tr><th>${row}</th>\n`;
        for (let col = 1; col <= n; col++){
            result += `<tr>${row * col}</tr>\n`;
        }
        result += '</tr>\n'
    }
    result += '</table>\n';
    console.log(result);
}

solve(5);