function solve(input) {

    let sum = Number(input[0]);
    let interestRate = Number(input[1]) / 100;
    let frequency = 12 / Number(input[2]);
    let years = Number(input[3]);

    let f = sum * Math.pow(1 + interestRate/frequency, frequency * years);

    console.log(Math.round(f * 100) / 100);
}