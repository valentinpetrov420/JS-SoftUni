function solve([n]) {
    n = Number(n);
    let pattern = 'ATCGTTAGGG';
    let counter = 0;
    for(let i = 0; i < n; i++) {
        if(i % 4 == 0) {
            console.log(`**${pattern[counter%10]}${pattern[counter % 10 + 1]}**`);
        } else if(i % 4 == 1) {
            console.log(`*${pattern[counter%10]}--${pattern[counter % 10 + 1]}*`);
        } else if(i % 4 == 2) {
            console.log(`${pattern[counter%10]}----${pattern[counter% 10 + 1]}`);
        } else if(i % 4 == 3) {
            console.log(`*${pattern[counter%10]}--${pattern[counter % 10 + 1]}*`);
        }
        counter += 2
    }
}

solve([25]);