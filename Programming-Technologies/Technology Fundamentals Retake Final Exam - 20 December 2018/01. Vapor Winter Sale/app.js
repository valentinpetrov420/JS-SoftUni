function app(input) {
    let output = [];
    let arr = [];
    let result = [];
    let resultObj = {};
    arr = input[0].split(', ');
    arr.forEach(element => {
        let obj = {};
        let entryPrice = element.split('-');
        let entryDLC = [];
        if (entryPrice.length > 1) {
            obj.name = entryPrice[0];
            obj.price = entryPrice[1];
            output.push(obj);
            result.push(obj);
        } else {
            entryDLC = element.split(':');
            output.forEach(entry => {
                if (entry.name == entryDLC[0]) {
                    result.forEach(game => {
                        if (game.name == entryDLC[0]) {
                            game.name = entryDLC[0];
                            game.dlc = entryDLC[1];
                            game.price = Number(game.price) + (Number(game.price) * 0.2);
                        }
                    })
                }
            })
        }
    });
    let resultPrice = [];
    let resultDlc = [];
    result.forEach(game => {
        if ('dlc' in game) {
            resultDlc.push(game);
        } else {
            resultPrice.push(game);
        }
    })
    
    resultDlc.sort((a, b) => {
        return a.price - b.price;
    });
    
    resultPrice.sort((b, a) => {
        return a.price - b.price;
    });

    resultDlc.forEach(game => {
        game.price = Number(game.price) - (Number(game.price) * 0.5);
        console.log(`${game.name} - ${game.dlc} - ${game.price.toFixed(2)}`)
    })
    resultPrice.forEach(game => {
        game.price = game.price - (game.price * 0.2);
        console.log(`${game.name} - ${game.price.toFixed(2)}`)
    })
}


app(['WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT']);

//app('WitHer 3-50,
// FullLife 3 - 60,
// WitHer 3: Blood and Beer,
// Cyberfunk 2077 - 120,
// League of Leg Ends - 10,
// League of Leg Ends: DoaT');