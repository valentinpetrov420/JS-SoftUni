function solve(str){
    let regex = /[\d]+/g;
    let numbers = [];
    let text = "";
    for (let i = 0; i < str.length; i++) {
        let currentSentence = str[i];
        text += currentSentence;
    }
    let match = regex.exec(text);
    while(match){
        numbers.push(match[0])
        match = regex.exec(text);
    }
    console.log(numbers.join(" "));

}

solve('123a456\n' +
    '789b987\n' +
    '654c321\n' +
    '0');