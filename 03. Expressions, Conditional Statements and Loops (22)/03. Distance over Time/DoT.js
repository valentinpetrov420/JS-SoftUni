function solve(arr) {
    let t = arr[2]/3600;
    let a = arr[0];
    let b = arr[1];

    let s1 = (t * a);
    let s2 = (t * b);

    let s = Math.abs(s2 - s1);
    console.log(s*1000);
}

solve([0, 60, 3600]);