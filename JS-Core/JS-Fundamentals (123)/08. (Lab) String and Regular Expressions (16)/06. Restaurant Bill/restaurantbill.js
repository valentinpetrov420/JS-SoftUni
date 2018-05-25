function solve(arr){
    let products = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0){
            sum += Number(arr[i]);
        }
        else{
            products.push(arr[i]);
        }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}

solve(['Cola', '1.35', 'Pancakes', '2.88']);