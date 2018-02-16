function solve(n) {
    let nString = String(n);
    let getAverage = (nString) => nString.split('').map(Number).reduce((a, b) => a += b) / nString.length;
    while (getAverage(nString) <= 5) {
        nString += '9';
    }
    console.log(nString);
}

solve(101);