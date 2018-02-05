function solve(str){
    let regex = /(?<!_)_{1}[a-zA-Z0-9]+(?!_)\b/g;
    let words = [];
    let result = [];
    let match = regex.exec(str);
    while(match){
        words.push(match[0])
        match = regex.exec(str);
    }
    for(let word of words){
        result.push(word.substr(1));
    }
    console.log(result.join(','))
}

solve('The _id and _age variables are both integers.');