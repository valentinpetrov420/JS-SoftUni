function solve (arr){
    //_/((a-a1)^2 + (b-b1)^2 +(c-c1)^2)
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let a1 = arr[3];
    let b1 = arr[4];
    let c1 = arr[5];

    let distance = Math.sqrt((a-a1)*(a-a1) + (b-b1) * (b-b1) + (c-c1)*(c-c1));

    console.log(distance);
}

solve([1, 1, 0, 5, 4, 0]);