function solve(arr){
    let towns = [];
    let sum = 0;
    for (let line of arr) {
        let currentTownToken = line.split('|');
        let currentTown = currentTownToken[1].trim();
        let currentIncome = Number(currentTownToken[2]);
        towns.push(currentTown);
        sum += currentIncome;
    }
    console.log(towns.join(', ') + `\n${sum}`);
}

solve(['| Sofia           | 300',
       '| Veliko Tarnovo  | 500',
       '| Yambol          | 275']
);