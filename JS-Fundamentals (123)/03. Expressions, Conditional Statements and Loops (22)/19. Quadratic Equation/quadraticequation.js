function solve(a, b, c) {

    let d = (Math.pow(b, 2) - 4 * a * c);

    if (d === 0) {

        let x = -(b / (2 * a));
        console.log(x);
        return;
    }

    if (d < 0) {
        console.log("No");
        return;
    }

    let result = [];

    result.push((-b - Math.sqrt(d)) / (2 * a));
    result.push((-b + Math.sqrt(d)) / (2 * a));

    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
}