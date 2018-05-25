function solve(input) {
    let brands = new Map();
    for (let carInfo of input) {
        let [brand, model, quantity] = carInfo.split(" | ");

        if (brands.has(brand)) {
            if (brands.get(brand).has(model)) {
                brands.get(brand).set(model, brands.get(brand).get(model) + quantity);
            } else {
                brands.get(brand).set(model, quantity);
            }
        } else {
            let currentCarInfo = new Map();
            currentCarInfo.set(model, quantity);
            brands.set(brand, currentCarInfo);
        }
    }
    for (let [currentBrand, currentModel] of brands) {
        console.log(`${currentBrand}`);
        for (let [model, totalSold] of currentModel) {
            console.log(`###${model} -> ${totalSold}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);