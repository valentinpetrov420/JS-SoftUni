function solve(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    let vat = result * 0.20;
    let total = result + vat;

    console.log("sum = " + result);
    console.log("VAT = " + vat);
    console.log("total = " + total);

}

solve([1.20, 2.60, 3.50]);