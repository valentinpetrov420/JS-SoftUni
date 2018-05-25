function solve(input) {
    let catalogue = new Map;
    let firstLetters = new Set;
    for(const string of input){
        let [product, price] = string.split(/\s* : \s*/);
        catalogue.set(product, price);
        let firstLetter = product[0].toUpperCase();
        if(!firstLetters[firstLetter]){
            firstLetters.add(firstLetter);
        }
    }
    let sorted = Array.from(firstLetters.values()).sort();
    for (const letter of sorted){
        console.log(letter);
        for (const key of [...catalogue.keys()].sort()){
            if (key[0] === letter){
                console.log(`   ${key}: ${catalogue.get(key)}`);
            }
        }
    }
}


solve(['Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);