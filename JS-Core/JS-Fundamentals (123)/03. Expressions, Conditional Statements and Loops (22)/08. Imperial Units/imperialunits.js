function solve(inches) {

    let inch = inches.toFixed(0);
    let feet = Math.floor(inch / 12);
    inch %= 12;

    console.log(feet + "'-" + inch + '"');
}

solve(55);