function solve(input){
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = {};
    for(let i = 0; i < words.length; i++){
        if(wordsCount[words[i]] == undefined){
            wordsCount[words[i]] = 1;
        }
        else{
            wordsCount[words[i]] += 1;
        }
    }
    console.log(JSON.stringify(wordsCount));
}

solve(['JS devs use Node.js for server-side JS.-- JS for devs']);