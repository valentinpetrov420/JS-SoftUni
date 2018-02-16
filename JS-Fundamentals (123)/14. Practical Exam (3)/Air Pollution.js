function solve(arrOfStrings, forces) {
    let sofiaMap = [];
    let pollutedBlocks = [];
    for (let i = 0; i < arrOfStrings.length; i++) {
        let currentRow = Array.from(arrOfStrings[i].split(' ').map(function (item) {
            return parseInt(item, 10);
        }));
        sofiaMap.push(currentRow);
    }

    for (let i = 0; i < forces.length; i++) {
        let forceTokens = forces[i].split(' ');
        let forceType = forceTokens[0];
        let forcePower = Number(forceTokens[1]);
        switch (forceType) {
            case "breeze":
                for (let i = 0; i < sofiaMap[forcePower].length; i++) {
                    sofiaMap[forcePower][i] -= 15;
                    if (sofiaMap[forcePower][i] <= 0) {
                        sofiaMap[forcePower][i] = 0;
                    }
                }
                break;
            case "gale":
                for (let i = 0; i < sofiaMap[forcePower].length; i++) {
                    sofiaMap[i][forcePower] -= 20;
                    if (sofiaMap[i][forcePower] <= 0) {
                        sofiaMap[i][forcePower] = 0;
                    }
                }
                break;
            case "smog":
                for (let rows = 0; rows < sofiaMap.length; rows++) {
                    let currentRow = sofiaMap[i];
                    for (let cols = 0; cols < currentRow.length; cols++) {
                        sofiaMap[rows][cols] += forcePower;
                    }
                }
                break;
        }
        for (let rows = 0; rows < sofiaMap.length; rows++) {
            let currentRow = sofiaMap[i];
            for (let cols = 0; cols < currentRow.length; cols++) {
                if (sofiaMap[rows][cols] >= 50) {
                    pollutedBlocks.push(`[${[rows]}-${[cols]}]`);
                }
            }

        }

    }
    if (pollutedBlocks.length > 1) {
        let uniqueArray = pollutedBlocks.filter(function (item, pos) {
            return pollutedBlocks.indexOf(item) == pos;
        });

        console.log("Polluted areas: " + uniqueArray.join(', '))
    }
    else {
        console.log('No polluted areas')
    }
}

solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);