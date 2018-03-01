let robot = (function breakfastRobot() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let commands = {
        prepare: {
            "apple": () => {
                if (ingredients.carbohydrate < 1) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.flavour < 2) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= 1;
                    ingredients.flavour -= 2;
                    return 'Success'
                }
            },
            "coke": () => {
                if (ingredients.carbohydrate < 10) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.flavour < 20) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= 10;
                    ingredients.flavour -= 20;
                    return 'Success';
                }
            },
            "burger": () => {
                if (ingredients.carbohydrate < 5) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.fat < 7) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < 3) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.carbohydrate -= 5;
                    ingredients.fat -= 7;
                    ingredients.flavour -= 3;
                    return 'Success';
                }
            },
            "omelet": () => {
                if (ingredients.protein < 5) {
                    return 'Error: not enough protein in stock'
                } else if (ingredients.fat < 1) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < 1) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.protein -= 5;
                    ingredients.fat -= 1;
                    ingredients.flavour -= 1;
                    return 'Success';
                }
            },
            "cheverme": () => {
                if (ingredients.protein < 10) {
                    return 'Error: not enough protein in stock'
                } else if (ingredients.carbohydrate < 10) {
                    return 'Error: not enough carbohydrate in stock'
                } else if (ingredients.fat < 10) {
                    return 'Error: not enough fat in stock'
                } else if (ingredients.flavour < 10) {
                    return 'Error: not enough flavour in stock'
                } else {
                    ingredients.protein -= 10;
                    ingredients.carbohydrate -= 10;
                    ingredients.fat -= 10;
                    ingredients.flavour -= 10;
                    return 'Success';
                }
            }
        },
        restock: ([ingredient, quantity]) => {
            quantity = Number(quantity);
            ingredients[ingredient] += quantity;
            return "Success";
        },
        report: () => `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
    };

    return (instructions) => {
        let tokens = instructions.split(' ');
        let command = tokens.shift();
        if (command !== 'prepare') {
            return commands[command](tokens)
        } else {
            let meal = tokens[0];
            let quantity = Number(tokens[1]);
            let message;
            for (let i = 0; i < quantity; i++) {
                message = commands[command][meal]();
                if (message !== 'Success') {
                    break;
                }
            }
            return message;
        }
    }
})();

console.log(robot('restock flavour 50'));
console.log(robot('prepare coke 2'));