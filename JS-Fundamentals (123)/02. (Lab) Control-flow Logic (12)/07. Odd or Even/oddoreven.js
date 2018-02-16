function solve(a){
    let remainder = a % 2;

    if(remainder === 0){
        console.log("even");
    }
    else if(remainder == Math.round(remainder)){
        console.log("odd");
    }
    else{
        console.log("invalid")
    }
}

solve(5);
solve(4);
solve(1.5);