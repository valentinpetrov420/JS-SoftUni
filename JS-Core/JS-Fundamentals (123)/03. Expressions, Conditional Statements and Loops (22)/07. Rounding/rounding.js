function solve([number, precision]){
    if(precision > 15){
        precision = 15;
    }
    let multiplier = Math.pow(10, precision);
    let result = Math.round(number * multiplier) / multiplier;
    console.log(result);
}

solve([15, 4]);