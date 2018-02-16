function solve(input){
    let shiftCount = 0;
    let bitcoinTotal = 0;
    let totalGold = 0;
    let firstDay = -1;
    for (let i = 0; i < input.length; i++) {
        let currentShift = Number(input[i]);
        shiftCount++;
        if(shiftCount == 3){
            currentShift *= 0.70;
            shiftCount = 0;
        }
        totalGold += currentShift * 67.51;
        while(totalGold >= 11949.16){
            if(firstDay == -1){
                firstDay = i + 1;
            }
            bitcoinTotal++;
            totalGold -= 11949.16;
        }

    }
    console.log(`Bought bitcoins: ${bitcoinTotal}`);
    if(firstDay != -1){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
}

solve(['3124.15', '504.212', '2511.124']);