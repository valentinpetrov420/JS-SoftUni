function solve(input) {
    input = input.toUpperCase();
    let result = [];
    let letters = '';
    let text = input.split(' ');

    for (let element of text){
        let word = element[0];
        for (let i = 1; i < element.length; i++){
            letters += element[i].replace(element[i], element[i].toLowerCase());
        }
        word += letters;
        letters = '';
        result.push(word);
    }
    return result.join(' ');
}

console.log(solve('Was That Easy? Try This One For Size!'));