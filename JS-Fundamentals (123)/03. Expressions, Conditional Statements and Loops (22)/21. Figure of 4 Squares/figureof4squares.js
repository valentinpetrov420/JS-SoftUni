function solve(n){
    let dash = '-';
    let plus = '+';
    let pipe = '|';
    let whiteSpace = ' ';
    let pipeCount = Math.ceil(n/2)/2;
    if(n>4){
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
        for(let i = 1; i <= pipeCount; i++){
            console.log(pipe + whiteSpace.repeat(Math.ceil(n-2)) + pipe + whiteSpace.repeat(Math.ceil(n-2)) + pipe);
        }
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
        for(let i = 1; i <= pipeCount; i++){
            console.log(pipe + whiteSpace.repeat(Math.ceil(n-2)) + pipe + whiteSpace.repeat(Math.ceil(n-2)) + pipe);
        }
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
    }
    else if(n<=4){
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
        console.log(plus + dash.repeat(n-2) + plus + dash.repeat(n-2) + plus);
    }
}

solve(7);