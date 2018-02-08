function solve(input) {
    let productQuantity = new Map();
    let bottles = new Map();
    let bottleCount = 1;
    for(let productInfo of input){
        let [product, quantity] = productInfo.split(/\s* => \s*/);
        quantity = Number(quantity);
        while(quantity >= 1000){
            bottles.set(product, bottleCount);
            bottleCount++;
            productQuantity.set(product, productQuantity.get(product) - 1000);
        }
        bottleCount = 1;
        if (productQuantity.has(product)){
            productQuantity.set(product, productQuantity.get(product) + quantity);

        }
        else{
            productQuantity.set(product, quantity);
        }
        console.log(productQuantity)
    }
    for(let [product, bottleCount] of bottles){
        console.log(`${product} => ${bottleCount}`);
    }
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);