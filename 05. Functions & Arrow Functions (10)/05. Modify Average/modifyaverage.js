function solve(n){
    function modifyAverage(n){
        let nAsString = n.toString();
        let total = 0;
        let digitCount = 0;

        for(let i = 0; i < nAsString.length; i++){
            total += parseInt(nAsString[i]);
            digitCount++;
        }
        let average = total / digitCount;
    }
    if(modifyAverage(n) < 5){
        console.log(average + '9');
    }
    else{
        modifyAverage(n);
    }
}

solve(101);