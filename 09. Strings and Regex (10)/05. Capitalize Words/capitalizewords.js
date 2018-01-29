function solve(str){
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i].charAt(0);
        let currentWord = words[i];
        currentWord.substr(0, 1) = firstLetter.toUpperCase();
        result += currentWord + ' ';
    }
    console.log(result);
}

solve('Asd dsa ghf');